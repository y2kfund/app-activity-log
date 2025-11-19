import { ref } from 'vue'
import { createClient } from '@supabase/supabase-js'

export function useCommentCount() {
  const counts = ref<Record<string, number>>({})
  const loading = ref(false)

  const supabase = createClient(
    import.meta.env.VITE_SUPA_URL,
    import.meta.env.VITE_SUPA_ANON
  )

  async function fetchCommentCounts(activityIds: string[], activityType: 'position' | 'trade') {
    if (activityIds.length === 0) return

    loading.value = true

    try {
      const { data, error } = await supabase
        .schema('hf')
        .from('activity_log_comments')
        .select('activity_id')
        .eq('activity_type', activityType)
        .in('activity_id', activityIds)

      if (error) throw error

      // Count comments per activity
      const countMap: Record<string, number> = {}
      data?.forEach(item => {
        countMap[item.activity_id] = (countMap[item.activity_id] || 0) + 1
      })

      counts.value = countMap
    } catch (err) {
      console.error('Error fetching comment counts:', err)
    } finally {
      loading.value = false
    }
  }

  function getCount(activityId: string): number {
    return counts.value[activityId] || 0
  }

  return {
    counts,
    loading,
    fetchCommentCounts,
    getCount
  }
}