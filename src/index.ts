// src/index.ts
import ActivityLog from './views/ActivityLog.vue'

// Named export
export { ActivityLog }

// Default export (optional)
export default ActivityLog

// Props interface
export interface activityLogProps {
  symbolRoot: string    // Root symbol of the instrument
  userId?: string | null    // Current user ID for access control
}
