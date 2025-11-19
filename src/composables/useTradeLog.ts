import { ref, watch } from 'vue'
import { createClient } from '@supabase/supabase-js'

interface TradeLogEntry {
  id: number
  human_readable_description_of_changes: string
  internal_account_id: string
  symbol: string
  buysell: string
  tradedate: string
  created_at: string
  legal_entity?: string
}

export function useTradeLog(userId: string | null, symbolRoot: string) {
  const trades = ref<TradeLogEntry[]>([])
  const tradesLoading = ref(false)
  const tradesError = ref<string | null>(null)

  const supabase = createClient(
    import.meta.env.VITE_SUPA_URL,
    import.meta.env.VITE_SUPA_ANON
  )

  const fetchTrades = async () => {
    tradesLoading.value = true
    tradesError.value = null

    try {
      let query = supabase
        .schema('hf')
        .from('trade_table_changes_computed_in_supabase')
        .select('*')
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
      const uniqueTrades = allData?.reduce((acc: TradeLogEntry[], current) => {
        const key = `${current.tradedate}-${current.human_readable_description_of_changes}-${current.internal_account_id}`
        if (!acc.find(item => 
          `${item.tradedate}-${item.human_readable_description_of_changes}-${item.internal_account_id}` === key
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

      trades.value = uniqueTrades || []
    } catch (e) {
      tradesError.value = e instanceof Error ? e.message : 'Failed to fetch trades'
    } finally {
      tradesLoading.value = false
    }
  }

  return {
    trades,
    tradesLoading,
    tradesError,
    fetchTrades
  }
}