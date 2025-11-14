import { ref, watch } from 'vue'
import { createClient } from '@supabase/supabase-js'

interface ActivityLogEntry {
  id: number
  time_of_data_insert: string
  human_readable_description_of_changes: string
  internal_account_id: string
  symbol: string
  created_at: string
}

export function useActivityLog(userId: string | null, symbolRoot: string) {
  const activities = ref<ActivityLogEntry[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const supabase = createClient(
    import.meta.env.VITE_SUPA_URL,
    import.meta.env.VITE_SUPA_ANON
  )

  const fetchActivities = async () => {
    loading.value = true
    error.value = null

    try {
      let query = supabase
        .schema('hf')
        .from('position_table_changes_computed_in_supabase')
        .select('*')
        .order('created_at', { ascending: false })

      /*if (userId) {
        query = query.eq('internal_account_id', userId)
      }

      if (symbolRoot) {
        query = query.ilike('symbol', `${symbolRoot}%`)
      }*/

      const { data, error: fetchError } = await query

      if (fetchError) throw fetchError

      activities.value = data || []
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Failed to fetch activities'
    } finally {
      loading.value = false
    }
  }

  return {
    activities,
    loading,
    error,
    fetchActivities
  }
}