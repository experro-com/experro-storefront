export interface ForgotPassword {
    email: string;
}
export interface SetNewPassword {
    password: string;
    emailToken?: string;
    rpToken?: string;
    customerId?: string;
    email?: string;
}
