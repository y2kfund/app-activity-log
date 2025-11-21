interface OrderLogEntry {
    id: number;
    human_readable_description_of_changes: string;
    internal_account_id: string;
    symbol: string;
    buysell: string;
    ordertime: string;
    created_at: string;
    legal_entity?: string;
}
export declare function useOrderLog(userId: string | null, symbolRoot: string): {
    orders: import('vue').Ref<{
        id: number;
        human_readable_description_of_changes: string;
        internal_account_id: string;
        symbol: string;
        buysell: string;
        ordertime: string;
        created_at: string;
        legal_entity?: string | undefined;
    }[], OrderLogEntry[] | {
        id: number;
        human_readable_description_of_changes: string;
        internal_account_id: string;
        symbol: string;
        buysell: string;
        ordertime: string;
        created_at: string;
        legal_entity?: string | undefined;
    }[]>;
    ordersLoading: import('vue').Ref<boolean, boolean>;
    ordersError: import('vue').Ref<string | null, string | null>;
    fetchOrders: () => Promise<void>;
};
export {};
