import { ref } from 'vue'
import { createClient } from '@supabase/supabase-js'

export interface Comment {
  id: string
  activity_id: string
  activity_type: 'position' | 'trade'
  user_id: string
  comment: string
  created_at: string
  updated_at: string
}

export function useComments() {
  const comments = ref<Comment[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const supabase = createClient(
    import.meta.env.VITE_SUPA_URL,
    import.meta.env.VITE_SUPA_ANON
  )

  async function fetchComments(activityId: string, activityType: 'position' | 'trade') {
    loading.value = true
    error.value = null

    try {
      const { data, error: fetchError } = await supabase
        .schema('hf')
        .from('activity_log_comments')
        .select('*')
        .eq('activity_id', activityId)
        .eq('activity_type', activityType)
        .order('created_at', { ascending: false })

      if (fetchError) throw fetchError

      comments.value = data || []
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to fetch comments'
      console.error('Error fetching comments:', err)
    } finally {
      loading.value = false
    }
  }

  async function addComment(activityId: string, activityType: 'position' | 'trade', userId: string, commentText: string) {
    loading.value = true
    error.value = null

    try {
      const { data, error: insertError } = await supabase
        .schema('hf')
        .from('activity_log_comments')
        .insert({
          activity_id: activityId,
          activity_type: activityType,
          user_id: userId,
          comment: commentText
        })
        .select()
        .single()

      if (insertError) throw insertError

      if (data) {
        comments.value = [data, ...comments.value]
      }

      return data
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to add comment'
      console.error('Error adding comment:', err)
      throw err
    } finally {
      loading.value = false
    }
  }

  async function updateComment(commentId: string, commentText: string) {
    loading.value = true
    error.value = null

    try {
      const { data, error: updateError } = await supabase
        .schema('hf')
        .from('activity_log_comments')
        .update({ comment: commentText, updated_at: new Date().toISOString() })
        .eq('id', commentId)
        .select()
        .single()

      if (updateError) throw updateError

      if (data) {
        const index = comments.value.findIndex(c => c.id === commentId)
        if (index !== -1) {
          comments.value[index] = data
        }
      }

      return data
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to update comment'
      console.error('Error updating comment:', err)
      throw err
    } finally {
      loading.value = false
    }
  }

  async function deleteComment(commentId: string) {
    loading.value = true
    error.value = null

    try {
      const { error: deleteError } = await supabase
        .schema('hf')
        .from('activity_log_comments')
        .delete()
        .eq('id', commentId)

      if (deleteError) throw deleteError

      comments.value = comments.value.filter(c => c.id !== commentId)
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to delete comment'
      console.error('Error deleting comment:', err)
      throw err
    } finally {
      loading.value = false
    }
  }

  return {
    comments,
    loading,
    error,
    fetchComments,
    addComment,
    updateComment,
    deleteComment
  }
}