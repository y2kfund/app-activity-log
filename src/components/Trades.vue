<script setup lang="ts">
</script>

<template>
  <div class="coming-soon">
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>
    <h2>Trades</h2>
    <p>Trade history and analytics coming soon</p>
  </div>
</template>

<style scoped>
.coming-soon {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  color: #6b7280;
}

.coming-soon svg {
  margin-bottom: 24px;
  opacity: 0.5;
}

.coming-soon h2 {
  font-size: 24px;
  font-weight: 600;
  color: #374151;
  margin: 0 0 8px 0;
}

.coming-soon p {
  font-size: 14px;
  margin: 0;
}
</style>