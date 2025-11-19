interface TradeLogEntry {
    id: number;
    human_readable_description_of_changes: string;
    internal_account_id: string;
    symbol: string;
    buysell: string;
    tradedate: string;
    created_at: string;
    legal_entity?: string;
}
export declare function useTradeLog(userId: string | null, symbolRoot: string): {
    trades: import('vue').Ref<{
        id: number;
        human_readable_description_of_changes: string;
        internal_account_id: string;
        symbol: string;
        buysell: string;
        tradedate: string;
        created_at: string;
        legal_entity?: string | undefined;
    }[], TradeLogEntry[] | {
        id: number;
        human_readable_description_of_changes: string;
        internal_account_id: string;
        symbol: string;
        buysell: string;
        tradedate: string;
        created_at: string;
        legal_entity?: string | undefined;
    }[]>;
    tradesLoading: import('vue').Ref<boolean, boolean>;
    tradesError: import('vue').Ref<string | null, string | null>;
    fetchTrades: () => Promise<void>;
};
export {};
