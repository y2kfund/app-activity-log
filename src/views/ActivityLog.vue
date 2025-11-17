<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useActivityLog } from '../composables/useActivityLog'

interface ActivityLogProps {
  symbolRoot: string
  userId?: string | null
}

const props = withDefaults(defineProps<ActivityLogProps>(), {
  userId: null,
  symbolRoot: ''
})

const { activities, loading, error, fetchActivities } = useActivityLog(props.userId, props.symbolRoot)

onMounted(() => {
  fetchActivities()
})

function formatExpiryFromYyMmDd(yymmdd: string): string {
  if (!yymmdd || yymmdd.length !== 6) return ''
  const year = '20' + yymmdd.substring(0, 2)
  const month = yymmdd.substring(2, 4)
  const day = yymmdd.substring(4, 6)
  const date = new Date(`${year}-${month}-${day}`)
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

function extractTagsFromSymbol(symbolText: string): string[] {
  if (!symbolText) return []
  const text = String(symbolText)
  const symMatch = text.match(/^([A-Z]+)\b/)
  const base = symMatch?.[1] ?? ''
  const rightMatch = text.match(/\s([CP])\b/)
  const right = rightMatch?.[1] ?? ''
  const strikeMatch = text.match(/\s(\d+(?:\.\d+)?)\s+[CP]\b/)
  const strike = strikeMatch?.[1] ?? ''
  const codeMatch = text.match(/\b(\d{6})[CP]/)
  const expiry = codeMatch ? formatExpiryFromYyMmDd(codeMatch[1]) : ''
  return [base, expiry, strike, right].filter(Boolean)
}

interface DescriptionPart {
  type: 'text' | 'symbol'
  content: string
  tags?: string[]
}

function parseDescriptionWithSymbols(description: string): DescriptionPart[] {
  if (!description) return [{ type: 'text', content: '' }]
  
  const symbolPattern = /([A-Z]+\s+[A-Z]+\d{4}\s+\d+(?:\.\d+)?\s+[CP]\s+\[[A-Z]+\s+\d{6}[CP]\d+\s+\d+\])/g
  
  const parts: DescriptionPart[] = []
  let lastIndex = 0
  let match
  
  while ((match = symbolPattern.exec(description)) !== null) {
    if (match.index > lastIndex) {
      parts.push({
        type: 'text',
        content: description.substring(lastIndex, match.index)
      })
    }
    
    parts.push({
      type: 'symbol',
      content: match[1],
      tags: extractTagsFromSymbol(match[1])
    })
    
    lastIndex = match.index + match[0].length
  }
  
  if (lastIndex < description.length) {
    parts.push({
      type: 'text',
      content: description.substring(lastIndex)
    })
  }
  
  return parts.length > 0 ? parts : [{ type: 'text', content: description }]
}

watch(() => [props.userId, props.symbolRoot], () => {
  fetchActivities()
})

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}
</script>

<template>
  <div class="activity-log-container">
    <!--div class="header">
      <h2>Activity Log</h2>
      <div class="header-info">
        <span v-if="!loading" class="count">{{ activities.length }} activities</span>
      </div>
    </div-->
    
    <div v-if="loading" class="loading">
      <div class="spinner"></div>
      <span>Loading activities...</span>
    </div>

    <div v-else-if="error" class="error">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
      {{ error }}
    </div>

    <div v-else-if="activities.length === 0" class="empty">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
      <p>No activities found</p>
    </div>

    <div v-else class="activity-list">
      <div 
        v-for="activity in activities" 
        :key="activity.id"
        class="activity-item"
      >
        <div class="activity-content">
          <div class="activity-main">
            <div class="symbol-tags">
              <span 
                v-for="(tag, index) in extractTagsFromSymbol(activity.symbol)" 
                :key="index"
                class="tag"
                :class="{
                  'tag-symbol': index === 0,
                  'tag-expiry': index === 1,
                  'tag-strike': index === 2,
                  'tag-right': index === 3
                }"
              >
                {{ tag }}
              </span>
            </div>
            <p class="activity-description">
              <!--template v-for="(part, index) in parseDescriptionWithSymbols(activity.human_readable_description_of_changes)" :key="index">
                <span v-if="part.type === 'text'">{{ part.content }}</span>
                <span v-else class="inline-symbol-tags">
                  <span 
                    v-for="(tag, tagIndex) in part.tags" 
                    :key="tagIndex"
                    class="tag tag-inline"
                    :class="{
                      'tag-symbol': tagIndex === 0,
                      'tag-expiry': tagIndex === 1,
                      'tag-strike': tagIndex === 2,
                      'tag-right': tagIndex === 3
                    }"
                  >
                    {{ tag }}
                  </span>
                </span>
              </template -->
              {{ activity.human_readable_description_of_changes }}
            </p>
          </div>
          <div class="activity-meta">
            <span class="meta-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              {{ formatDate(activity.created_at) }}
            </span>
            <span class="meta-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              ID: {{ activity.legal_entity || activity.internal_account_id }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import '../styles/styles.css';
</style>

<style scoped>
@import '../styles/scoped-styles.css';
</style>