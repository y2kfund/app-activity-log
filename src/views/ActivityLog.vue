<script setup lang="ts">
import { onMounted, watch } from 'vue'

interface ActivityLogProps {
  symbolRoot: string
  userId?: string | null
}

const props = withDefaults(defineProps<ActivityLogProps>(), {
  userId: null,
  symbolRoot: ''
})

</script>

<template>
  <div class="activity-log-box">
    <h2>Activity Log</h2>
    <!-- Activity log content goes here -->
  </div>
</template>

<style>
@import '../styles/styles.css';
</style>

<style scoped>
@import '../styles/scoped-styles.css';
</style>