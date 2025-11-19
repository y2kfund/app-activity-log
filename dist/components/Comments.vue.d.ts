interface CommentsProps {
    activityId: string;
    activityType: 'position' | 'trade';
    userId: string;
    isOpen: boolean;
}
declare const _default: import('vue').DefineComponent<CommentsProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    close: () => any;
}, string, import('vue').PublicProps, Readonly<CommentsProps> & Readonly<{
    onClose?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
