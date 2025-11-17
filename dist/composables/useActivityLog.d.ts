interface ActivityLogEntry {
    id: number;
    time_of_data_insert: string;
    human_readable_description_of_changes: string;
    internal_account_id: string;
    symbol: string;
    created_at: string;
    legal_entity?: string;
}
export declare function useActivityLog(userId: string | null, symbolRoot: string): {
    activities: import('vue').Ref<{
        id: number;
        time_of_data_insert: string;
        human_readable_description_of_changes: string;
        internal_account_id: string;
        symbol: string;
        created_at: string;
        legal_entity?: string | undefined;
    }[], ActivityLogEntry[] | {
        id: number;
        time_of_data_insert: string;
        human_readable_description_of_changes: string;
        internal_account_id: string;
        symbol: string;
        created_at: string;
        legal_entity?: string | undefined;
    }[]>;
    loading: import('vue').Ref<boolean, boolean>;
    error: import('vue').Ref<string | null, string | null>;
    fetchActivities: () => Promise<void>;
};
export {};
