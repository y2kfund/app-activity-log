<script setup lang="ts">
</script>

<template>
  <div class="coming-soon">
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M9 5H2v7l6.29 6.29c.94.94 2.48.94 3.42 0l3.58-3.58c.94-.94.94-2.48 0-3.42L9 5z"/>
      <path d="M6 9.01V9"/>
      <path d="M16 8l-8 8"/>
      <path d="M22 12l-8 8"/>
    </svg>
    <h2>Orders</h2>
    <p>Order history and management coming soon</p>
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