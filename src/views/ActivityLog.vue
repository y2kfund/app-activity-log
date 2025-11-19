<script setup lang="ts">
import { onMounted, watch, ref, computed } from 'vue'
import { useActivityLog } from '../composables/useActivityLog'

interface ActivityLogProps {
  symbolRoot: string
  userId?: string | null
}

const props = withDefaults(defineProps<ActivityLogProps>(), {
  userId: '4fbec15d-2316-4805-b2a4-5cd2115a5ac8',
  symbolRoot: ''
})

const { activities, loading, error, fetchActivities } = useActivityLog(props.userId, props.symbolRoot)

// Filter state
const filterText = ref('')

// Computed filtered activities
const filteredActivities = computed(() => {
  if (!filterText.value.trim()) {
    return activities.value
  }
  
  // Split by comma and trim each part
  const searchTerms = filterText.value
    .split(',')
    .map(term => term.trim().toLowerCase())
    .filter(term => term.length > 0)
  
  if (searchTerms.length === 0) {
    return activities.value
  }
  
  return activities.value.filter(activity => {
    const legalEntity = (activity.legal_entity || '').toLowerCase()
    const internalAccount = (activity.internal_account_id || '').toLowerCase()
    const symbol = (activity.symbol || '').toLowerCase()
    const description = (activity.human_readable_description_of_changes || '').toLowerCase()
    
    // Check if each term matches anywhere in the activity
    // All terms must match (AND logic)
    return searchTerms.every(term => {
      // Check if term matches symbol
      const symbolMatch = symbol.includes(term)
      
      // Check if term matches ID
      const idMatch = legalEntity.includes(term) || internalAccount.includes(term)
      
      // Check if term matches description
      const descriptionMatch = description.includes(term)
      
      // The term should match at least one field
      return symbolMatch || idMatch || descriptionMatch
    })
  })
})

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
    <div class="filter-section">
      <div class="filter-input-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="search-icon">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.35-4.35"/>
        </svg>
        <input 
          v-model="filterText"
          type="text" 
          placeholder="Filter by symbol or ID..."
          class="filter-input"
        />
        <button 
          v-if="filterText"
          @click="filterText = ''"
          class="clear-button"
          aria-label="Clear filter"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
      <span v-if="!loading" class="result-count">
        {{ filteredActivities.length }} of {{ activities.length }} activities
      </span>
    </div>
    
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

    <div v-else-if="filteredActivities.length === 0" class="empty">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
      <p>{{ filterText ? 'No activities match your filter' : 'No activities found' }}</p>
    </div>

    <div v-else class="activity-list">
      <div 
        v-for="activity in filteredActivities" 
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