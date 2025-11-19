export declare function useCommentCount(): {
    counts: import('vue').Ref<Record<string, number>, Record<string, number>>;
    loading: import('vue').Ref<boolean, boolean>;
    fetchCommentCounts: (activityIds: string[], activityType: "position" | "trade") => Promise<void>;
    getCount: (activityId: string) => number;
};
