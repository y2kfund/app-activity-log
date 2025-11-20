<script setup lang="ts">
import { ref } from 'vue'

export type TabType = 'orders' | 'trades' | 'positions'

const emit = defineEmits<{
  'tab-change': [tab: TabType]
}>()

const activeTab = ref<TabType>('orders')

function selectTab(tab: TabType) {
  activeTab.value = tab
  emit('tab-change', tab)
}
</script>

<template>
  <div class="tab-navigation">
    <button
      :class="['tab-button', { active: activeTab === 'orders' }]"
      @click="selectTab('orders')"
    >
      Orders
    </button>
    <button
      :class="['tab-button', { active: activeTab === 'trades' }]"
      @click="selectTab('trades')"
    >
      Trades
    </button>

    <button
      :class="['tab-button', { active: activeTab === 'positions' }]"
      @click="selectTab('positions')"
    >
      Positions
    </button>
  </div>
</template>

<style scoped>
.tab-navigation {
  display: flex;
  gap: 4px;
  border-bottom: 1px solid #e5e7eb;
  background: #ffffff;
  padding: 0 16px;
  margin-bottom: 16px;
}

.tab-button {
  padding: 12px 24px;
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: #6b7280;
  transition: all 0.2s ease;
  position: relative;
}

.tab-button:hover {
  color: #374151;
}

.tab-button.active {
  color: #2563eb;
  border-bottom-color: #2563eb;
}
</style>