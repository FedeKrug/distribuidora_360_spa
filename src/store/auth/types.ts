export type AuthType = {
    status: 'checking' | 'not-authenticated' | 'authenticated' | 'registered';
    uid: string | null;
    email: string | null;
    displayName: string | null;
    photoURL: string | null;
    errorMessage: string | null;
}