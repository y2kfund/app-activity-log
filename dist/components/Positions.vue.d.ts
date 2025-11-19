interface Activity {
    id: string;
    symbol: string;
    human_readable_description_of_changes: string;
    created_at: string;
    legal_entity: string | null;
    internal_account_id: string | null;
}
interface PositionsProps {
    activities: Activity[];
    loading: boolean;
    error: string | null;
    filterText: string;
}
declare const _default: import('vue').DefineComponent<PositionsProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:filterText": (value: string) => any;
}, string, import('vue').PublicProps, Readonly<PositionsProps> & Readonly<{
    "onUpdate:filterText"?: ((value: string) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
