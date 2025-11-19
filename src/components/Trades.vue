<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import Comments from './Comments.vue'
import { useCommentCount } from '../composables/useCommentCount'

interface Trades {
  id: string
  symbol: string
  human_readable_description_of_changes: string
  created_at: string
  legal_entity: string | null
  internal_account_id: string | null
}

interface TradesProps {
  trades: Trades[]
  loading: boolean
  error: string | null
  filterText: string 
  userId: string
}

const props = defineProps<TradesProps>()
const emit = defineEmits<{
  'update:filterText': [value: string]
}>()

const activeCommentActivityId = ref<string | null>(null)
const { getCount, fetchCommentCounts } = useCommentCount()

// Fetch comment counts when trades change
watch(() => props.trades, (trades) => {
  if (trades && trades.length > 0) {
    const activityIds = trades.map(t => t.id)
    fetchCommentCounts(activityIds, 'trade')
  }
}, { immediate: true })

function openComments(activityId: string) {
  activeCommentActivityId.value = activityId
}

function closeComments() {
  activeCommentActivityId.value = null
}

const filteredActivities = computed(() => {
  if (!props.filterText.trim()) {
    return props.trades
  }
  
  const searchTerms = props.filterText
    .split(',')
    .map(term => term.trim().toLowerCase())
    .filter(term => term.length > 0)
  
  if (searchTerms.length === 0) {
    return props.trades
  }
  
  return props.trades.filter(activity => {
    const legalEntity = (activity.legal_entity || '').toLowerCase()
    const internalAccount = (activity.internal_account_id || '').toLowerCase()
    const symbol = (activity.symbol || '').toLowerCase()
    const description = (activity.human_readable_description_of_changes || '').toLowerCase()
    
    return searchTerms.every(term => {
      const symbolMatch = symbol.includes(term)
      const idMatch = legalEntity.includes(term) || internalAccount.includes(term)
      const descriptionMatch = description.includes(term)
      return symbolMatch || idMatch || descriptionMatch
    })
  })
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

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

function updateFilter(value: string) {
  emit('update:filterText', value)
}

function clearFilter() {
  emit('update:filterText', '')
}
</script>

<template>
  <div class="positions-container">
    <div class="filter-section">
      <div class="filter-input-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="search-icon">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.35-4.35"/>
        </svg>
        <input 
          :value="filterText"
          @input="updateFilter(($event.target as HTMLInputElement).value)"
          type="text" 
          placeholder="Filter by symbol or ID..."
          class="filter-input"
        />
        <!--button 
          v-if="filterText"
          @click="clearFilter"
          class="clear-button"
          aria-label="Clear filter"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button-->
      </div>
      <span v-if="!loading" class="result-count">
        {{ filteredActivities.length }} of {{ trades.length }} trades
      </span>
    </div>
    
    <div v-if="loading" class="loading">
      <div class="spinner"></div>
      <span>Loading trades...</span>
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
      <p>{{ filterText ? 'No trades match your filter' : 'No trades found' }}</p>
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
            <button @click="openComments(activity.id)" class="comment-icon-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              <span v-if="getCount(activity.id) > 0" class="comment-badge">
                {{ getCount(activity.id) }}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <Comments
      v-if="activeCommentActivityId"
      :activity-id="activeCommentActivityId"
      activity-type="trade"
      :user-id="props.userId"
      :is-open="!!activeCommentActivityId"
      @close="closeComments"
    />
  </div>
</template>

<style scoped>
@import '../styles/scoped-styles.css';
</style>