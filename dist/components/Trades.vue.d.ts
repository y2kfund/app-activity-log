interface Trades {
    id: string;
    symbol: string;
    human_readable_description_of_changes: string;
    created_at: string;
    legal_entity: string | null;
    internal_account_id: string | null;
}
interface TradesProps {
    trades: Trades[];
    loading: boolean;
    error: string | null;
    filterText: string;
}
declare const _default: import('vue').DefineComponent<TradesProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:filterText": (value: string) => any;
}, string, import('vue').PublicProps, Readonly<TradesProps> & Readonly<{
    "onUpdate:filterText"?: ((value: string) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
