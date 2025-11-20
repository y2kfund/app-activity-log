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
  userId: null,
  symbolRoot: ''
})

const { activities, loading, error, fetchActivities } = useActivityLog(props.userId, props.symbolRoot)
const { trades, tradesLoading, tradesError, fetchTrades } = useTradeLog(props.userId, props.symbolRoot)

// Filter state
const filterText = ref('')

onMounted(() => {
  fetchActivities()
})

const activeTab = ref<TabType>('orders')

function handleTabChange(tab: TabType) {
  activeTab.value = tab
}

watch(() => [props.userId, props.symbolRoot, activeTab.value], () => {
  if (activeTab.value === 'positions') {
    fetchActivities()
  } else if (activeTab.value === 'trades') {
    fetchTrades()
  } else if (activeTab.value === 'orders') {
    // fetchOrders() --- IGNORE ---
  }
})
</script>

<template>
  <div class="activity-log-container">
    <TabNavigation @tab-change="handleTabChange" />
    
    <Orders v-if="activeTab === 'orders'" />
    
    <Trades 
      v-else-if="activeTab === 'trades'" 
      :trades="trades"
      :loading="tradesLoading"
      :error="tradesError"
      :filter-text="filterText"
      :user-id="props.userId"
      @update:filter-text="filterText = $event"
    />

    <Positions 
      v-else-if="activeTab === 'positions'"
      :activities="activities"
      :loading="loading"
      :error="error"
      :filter-text="filterText"
      :user-id="props.userId"
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