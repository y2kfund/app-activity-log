import { default as ActivityLog } from './views/ActivityLog.vue';
export { ActivityLog };
export default ActivityLog;
export interface activityLogProps {
    symbolRoot: string;
    userId?: string | null;
}
