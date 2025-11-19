export interface Comment {
    id: string;
    activity_id: string;
    activity_type: 'position' | 'trade';
    user_id: string;
    comment: string;
    created_at: string;
    updated_at: string;
}
export declare function useComments(): {
    comments: import('vue').Ref<{
        id: string;
        activity_id: string;
        activity_type: "position" | "trade";
        user_id: string;
        comment: string;
        created_at: string;
        updated_at: string;
    }[], Comment[] | {
        id: string;
        activity_id: string;
        activity_type: "position" | "trade";
        user_id: string;
        comment: string;
        created_at: string;
        updated_at: string;
    }[]>;
    loading: import('vue').Ref<boolean, boolean>;
    error: import('vue').Ref<string | null, string | null>;
    fetchComments: (activityId: string, activityType: "position" | "trade") => Promise<void>;
    addComment: (activityId: string, activityType: "position" | "trade", userId: string, commentText: string) => Promise<any>;
    updateComment: (commentId: string, commentText: string) => Promise<any>;
    deleteComment: (commentId: string) => Promise<void>;
};
