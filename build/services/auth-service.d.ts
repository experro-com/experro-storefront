import SignupInterface from "../interfaces/signup.interface";
import { ForgotPassword, SetNewPassword } from "../interfaces/forgot-password.interface";
interface LoginRequest {
    username: string;
    password: string;
}
export declare class AuthService {
    private static __userDetails__;
    static checkSessionInfo(): Promise<any>;
    static isUserLoggedIn(): boolean;
    static getUserDetails(): any;
    static setUserDetails(userDetails: any, isRefresh?: any): void;
    static getCustomerDetails(): Promise<any>;
    static getCustomerOrders(): Promise<any>;
    static updateCustomerDetails(commonDetails: any, dynamicDetails?: string): Promise<any>;
    static getCustomerAddresses(): Promise<any>;
    static getCountries(): Promise<any>;
    static getStates(countryCode: any): Promise<any>;
    static createCustomerAddress(bodyData: any): Promise<any>;
    static updateCustomerAddress(bodyData: any, addressId?: string): Promise<any>;
    static deleteCustomerAddress(AddressId: number): Promise<any>;
    static login({ username, password }: LoginRequest): Promise<any>;
    static logout(): Promise<any>;
    static signup({ firstName, lastName, email, password, phone, company, customFields, gctoken }: SignupInterface): Promise<any>;
    static forgotPassword({ email }: ForgotPassword): Promise<any>;
    static setNewPassword({ emailToken, password }: SetNewPassword): Promise<any>;
}
export {};
