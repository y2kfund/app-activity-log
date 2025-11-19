<script setup lang="ts">
import { onMounted, watch, ref, computed } from 'vue'
import { useActivityLog } from '../composables/useActivityLog'
import { useTradeLog } from '../composables/useTradeLog'
import TabNavigation, { type TabType } from '../components/TabNavigation.vue'
import Positions from '../components/Positions.vue'
import Orders from '../components/Orders.vue'
import Trades from '../components/Trades.vue'

interface ActivityLogProps {
  symbolRoot: string
  userId?: string | null
}

const props = withDefaults(defineProps<ActivityLogProps>(), {
  userId: '4fbec15d-2316-4805-b2a4-5cd2115a5ac8',
  symbolRoot: ''
})

const { activities, loading, error, fetchActivities } = useActivityLog(props.userId, props.symbolRoot)
const { trades, tradesLoading, tradesError, fetchTrades } = useTradeLog(props.userId, props.symbolRoot)

// Filter state
const filterText = ref('')

onMounted(() => {
  fetchActivities()
})

const activeTab = ref<TabType>('positions')

function handleTabChange(tab: TabType) {
  activeTab.value = tab
}

watch(() => [props.userId, props.symbolRoot, activeTab.value], () => {
  if (activeTab.value === 'positions') {
    fetchActivities()
  } else if (activeTab.value === 'trades') {
    fetchTrades()
  }
})
</script>

<template>
  <div class="activity-log-container">
    <TabNavigation @tab-change="handleTabChange" />
    
    <Positions 
      v-if="activeTab === 'positions'"
      :activities="activities"
      :loading="loading"
      :error="error"
      :filter-text="filterText"
      @update:filter-text="filterText = $event"
    />

    <Orders v-else-if="activeTab === 'orders'" />
    
    <Trades 
      v-else-if="activeTab === 'trades'" 
      :trades="trades"
      :loading="tradesLoading"
      :error="tradesError"
      :filter-text="filterText"
      @update:filter-text="filterText = $event"
    />
  </div>
</template>

<style>
@import '../styles/styles.css';
</style>

<style scoped>
@import '../styles/scoped-styles.css';
</style>