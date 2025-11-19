interface UserInfo {
    id: string;
    email?: string;
    name?: string;
}
export declare function useUserInfo(): {
    loading: import('vue').Ref<boolean, boolean>;
    error: import('vue').Ref<string | null, string | null>;
    getUserInfo: (userId: string) => Promise<UserInfo>;
    clearCache: () => void;
};
export {};
