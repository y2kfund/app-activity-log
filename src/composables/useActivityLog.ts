import { ref, watch } from 'vue'
import { createClient } from '@supabase/supabase-js'

interface ActivityLogEntry {
  id: number
  time_of_data_insert: string
  human_readable_description_of_changes: string
  internal_account_id: string
  symbol: string
  created_at: string
  legal_entity?: string // Add this field
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
        .order('time_of_data_insert', { ascending: false })
        .order('created_at', { ascending: false })

      const { data: allData, error: fetchError } = await query

      if (fetchError) throw fetchError

      // Fetch accounts and aliases (similar to putPositionsForSingleInstrument.ts)
      const [acctRes, aliasRes] = await Promise.all([
        supabase
          .schema('hf')
          .from('user_accounts_master')
          .select('internal_account_id, legal_entity'),
        userId
          ? supabase
              .schema('hf')
              .from('user_account_alias')
              .select('internal_account_id, alias')
              .eq('user_id', userId)
          : { data: [], error: null }
      ])

      if (acctRes.error) {
        console.error('❌ Accounts query error:', acctRes.error)
        throw acctRes.error
      }

      // Map: internal_account_id -> alias
      const aliasMap = new Map<string, string>(
        (aliasRes.data || []).map((r: any) => [r.internal_account_id, r.alias])
      )

      const accounts = new Map<string, string | null | undefined>(
        (acctRes.data || []).map((r: any) => [r.internal_account_id as string, r.legal_entity as string])
      )

      // Group by the three columns in JavaScript
      const uniqueActivities = allData?.reduce((acc: ActivityLogEntry[], current) => {
        const key = `${current.time_of_data_insert}-${current.human_readable_description_of_changes}-${current.internal_account_id}`
        if (!acc.find(item => 
          `${item.time_of_data_insert}-${item.human_readable_description_of_changes}-${item.internal_account_id}` === key
        )) {
          // Enrich with alias or legal_entity
          let legal_entity = accounts.get(current.internal_account_id) || undefined
          if (aliasMap.has(current.internal_account_id)) {
            legal_entity = aliasMap.get(current.internal_account_id)
          }
          
          acc.push({
            ...current,
            legal_entity
          })
        }
        return acc
      }, [])

      activities.value = uniqueActivities || []
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