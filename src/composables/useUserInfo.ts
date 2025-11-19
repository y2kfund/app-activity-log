import { ref } from 'vue'
import { createClient } from '@supabase/supabase-js'

interface UserInfo {
  id: string
  email?: string
  name?: string
}

const userCache = new Map<string, UserInfo>()

export function useUserInfo() {
  const loading = ref(false)
  const error = ref<string | null>(null)

  const supabase = createClient(
    import.meta.env.VITE_SUPA_URL,
    import.meta.env.VITE_SUPA_ANON
  )

  async function getUserInfo(userId: string): Promise<UserInfo> {
    // Check cache first
    if (userCache.has(userId)) {
      return userCache.get(userId)!
    }

    loading.value = true
    error.value = null

    try {
      // Use RPC to call the database function
      const { data, error: fetchError } = await supabase
        .schema('hf')
        .rpc('get_user_email', { user_uuid: userId })
      
      if (fetchError) {
        console.error('Error fetching user info:', fetchError)
        // Fallback: return userId as display name
        const fallbackInfo: UserInfo = { id: userId, email: userId }
        userCache.set(userId, fallbackInfo)
        return fallbackInfo
      }

      // The RPC returns an array with one object
      const userData = Array.isArray(data) ? data[0] : data

      const userInfo: UserInfo = {
        id: userId,
        email: userData?.email || userId,
        name: userData?.name
      }

      userCache.set(userId, userInfo)
      return userInfo
    } catch (err) {
      console.error('Failed to fetch user info:', err)
      error.value = 'Failed to load user information'
      // Return fallback
      const fallbackInfo: UserInfo = { id: userId, email: userId }
      userCache.set(userId, fallbackInfo)
      return fallbackInfo
    } finally {
      loading.value = false
    }
  }

  function clearCache() {
    userCache.clear()
  }

  return {
    loading,
    error,
    getUserInfo,
    clearCache
  }
}