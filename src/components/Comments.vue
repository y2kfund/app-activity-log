<script setup lang="ts">
import { ref, watch, onMounted, computed } from 'vue'
import { useComments, type Comment } from '../composables/useComments'
import { useUserInfo } from '../composables/useUserInfo'

interface CommentsProps {
  activityId: string
  activityType: 'position' | 'trade'
  userId: string
  isOpen: boolean
}

const props = defineProps<CommentsProps>()
const emit = defineEmits<{
  'close': []
}>()

const { comments, loading, error, fetchComments, addComment, updateComment, deleteComment } = useComments()
const { getUserInfo } = useUserInfo()

const newCommentText = ref('')
const editingCommentId = ref<string | null>(null)
const editingCommentText = ref('')
const userDisplayNames = ref<Map<string, string>>(new Map())

// Fetch user display names for all comments
async function loadUserDisplayNames() {
  const uniqueUserIds = [...new Set(comments.value.map(c => c.user_id))]
  
  for (const userId of uniqueUserIds) {
    if (!userDisplayNames.value.has(userId)) {
      const userInfo = await getUserInfo(userId)
      userDisplayNames.value.set(userId, userInfo.name || userInfo.email || userId)
    }
  }
}

// Watch comments and load user info when they change
watch(comments, () => {
  loadUserDisplayNames()
}, { deep: true })

function getDisplayName(userId: string): string {
  return userDisplayNames.value.get(userId) || userId
}

// Fetch comments immediately when component mounts and isOpen is true
onMounted(() => {
  if (props.isOpen) {
    fetchComments(props.activityId, props.activityType)
  }
})

watch(() => props.isOpen, (isOpen) => {
  if (isOpen) {
    fetchComments(props.activityId, props.activityType)
  }
}, { immediate: true })

async function handleAddComment() {
  if (!newCommentText.value.trim()) return

  try {
    await addComment(props.activityId, props.activityType, props.userId, newCommentText.value.trim())
    newCommentText.value = ''
  } catch (err) {
    console.error('Failed to add comment:', err)
  }
}

function startEditing(comment: Comment) {
  editingCommentId.value = comment.id
  editingCommentText.value = comment.comment
}

function cancelEditing() {
  editingCommentId.value = null
  editingCommentText.value = ''
}

async function handleUpdateComment(commentId: string) {
  if (!editingCommentText.value.trim()) return

  try {
    await updateComment(commentId, editingCommentText.value.trim())
    cancelEditing()
  } catch (err) {
    console.error('Failed to update comment:', err)
  }
}

async function handleDeleteComment(commentId: string) {
  if (!confirm('Are you sure you want to delete this comment?')) return

  try {
    await deleteComment(commentId)
  } catch (err) {
    console.error('Failed to delete comment:', err)
  }
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}
</script>

<template>
  <div v-if="isOpen" class="comments-modal-overlay" @click.self="emit('close')">
    <div class="comments-modal">
      <div class="comments-header">
        <h3>Comments</h3>
        <button @click="emit('close')" class="close-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>

      <div class="comments-content">
        <div class="add-comment-section">
          <textarea
            v-model="newCommentText"
            placeholder="Add a comment..."
            class="comment-input"
            rows="3"
            @keydown.meta.enter="handleAddComment"
            @keydown.ctrl.enter="handleAddComment"
          ></textarea>
          <button 
            @click="handleAddComment" 
            :disabled="!newCommentText.trim() || loading"
            class="add-comment-button"
          >
            Add Comment
          </button>
        </div>

        <div v-if="loading && comments.length === 0" class="loading">
          <div class="spinner"></div>
          <span>Loading comments...</span>
        </div>

        <div v-else-if="error" class="error">{{ error }}</div>

        <div v-else-if="comments.length === 0" class="empty-comments">
          <p>No comments yet. Be the first to comment!</p>
        </div>

        <div v-else class="comments-list">
          <div v-for="comment in comments" :key="comment.id" class="comment-item">
            <div v-if="editingCommentId === comment.id" class="edit-comment-section">
              <textarea
                v-model="editingCommentText"
                class="comment-input"
                rows="3"
              ></textarea>
              <div class="edit-actions">
                <button @click="handleUpdateComment(comment.id)" class="save-button">Save</button>
                <button @click="cancelEditing" class="cancel-button">Cancel</button>
              </div>
            </div>
            <div v-else>
              <div class="comment-header">
                <span class="comment-user">{{ getDisplayName(comment.user_id) }}</span>
                <span class="comment-date">{{ formatDate(comment.created_at) }}</span>
              </div>
              <p class="comment-text">{{ comment.comment }}</p>
              <div v-if="comment.user_id === userId" class="comment-actions">
                <button @click="startEditing(comment)" class="edit-button">Edit</button>
                <button @click="handleDeleteComment(comment.id)" class="delete-button">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.comments-modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.comments-modal {
  background: white;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
}

.comments-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid #e5e7eb;
}

.comments-header h3 {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
}

.close-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  color: #6b7280;
  transition: color 0.2s;
}

.close-button:hover {
  color: #111827;
}

.comments-content {
  padding: 20px;
  overflow-y: auto;
  flex: 1;
}

.add-comment-section {
  margin-bottom: 24px;
}

.comment-input {
  width: 100%;
  padding: 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  font-family: inherit;
  resize: vertical;
  margin-bottom: 8px;
}

.comment-input:focus {
  outline: none;
  border-color: #3b82f6;
}

.add-comment-button {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s;
}

.add-comment-button:hover:not(:disabled) {
  background: #2563eb;
}

.add-comment-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.loading, .error, .empty-comments {
  text-align: center;
  padding: 40px 20px;
  color: #6b7280;
}

.spinner {
  border: 2px solid #f3f4f6;
  border-top-color: #3b82f6;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: spin 1s linear infinite;
  margin: 0 auto 12px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.comments-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.comment-item {
  background: #f9fafb;
  padding: 16px;
  border-radius: 6px;
}

.comment-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.comment-user {
  font-weight: 600;
  font-size: 14px;
  color: #111827;
}

.comment-date {
  font-size: 12px;
  color: #6b7280;
}

.comment-text {
  margin: 0 0 8px 0;
  font-size: 14px;
  color: #374151;
  white-space: pre-wrap;
  word-wrap: break-word;
}

.comment-actions {
  display: flex;
  gap: 12px;
}

.edit-button, .delete-button {
  background: none;
  border: none;
  font-size: 12px;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  transition: background 0.2s;
}

.edit-button {
  color: #3b82f6;
}

.edit-button:hover {
  background: #dbeafe;
}

.delete-button {
  color: #ef4444;
}

.delete-button:hover {
  background: #fee2e2;
}

.edit-comment-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.edit-actions {
  display: flex;
  gap: 8px;
}

.save-button, .cancel-button {
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 13px;
  cursor: pointer;
  border: none;
}

.save-button {
  background: #3b82f6;
  color: white;
}

.save-button:hover {
  background: #2563eb;
}

.cancel-button {
  background: #f3f4f6;
  color: #374151;
}

.cancel-button:hover {
  background: #e5e7eb;
}
</style>