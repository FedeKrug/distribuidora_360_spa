export type AuthType = {
    username: string;
    email: string;
    password: string;
    id: number | null;
    status: "authenticated" | "not-authenticated" | "checking-credentials"
}