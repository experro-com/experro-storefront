import SignupInterface from '../interfaces/signup.interface';
import { ForgotPassword, SetNewPassword } from '../interfaces/forgot-password.interface';
interface LoginRequest {
    username: string;
    password: string;
}
export declare class AuthService {
    private static __userDetails__;
    static checkSessionInfo(): Promise<any>;
    static getUserSessionInfo(): Promise<any>;
    static isUserLoggedIn(): any;
    static getCurrentLoggedInUserEmail(): any;
    static getUserDetails(): any;
    static setUserDetails(userDetails: any, isRefresh?: any): void;
    static getCustomerDetails(): Promise<any>;
    static getCustomerOrders(queryParameters?: string): Promise<any>;
    static updateCustomerDetails(commonDetails: any, dynamicDetails?: string): Promise<any>;
    static getCustomerAddresses(): Promise<any>;
    static getCountries(): Promise<any>;
    static getStates(countryCode: any): Promise<any>;
    static createCustomerAddress(bodyData: any): Promise<any>;
    static updateCustomerAddress(bodyData: any, addressId?: string): Promise<any>;
    static deleteCustomerAddress(AddressId: number): Promise<any>;
    static updatePassword(passwordDetails: any): Promise<any>;
    static login({ username, password }: LoginRequest): Promise<any>;
    static forceLogout(): Promise<any>;
    static logout(): Promise<any>;
    static signup({ firstName, lastName, middleName, email, password, phone, company, customFields, gctoken, formFields }: SignupInterface): Promise<any>;
    static forgotPassword({ email }: ForgotPassword): Promise<any>;
    static setNewPassword({ emailToken, password }: SetNewPassword): Promise<any>;
    static activateCustomerAccount({ emailToken, password, }: SetNewPassword): Promise<any>;
    static getCustomerAttributes(): Promise<any>;
    static updateCustomerAttributes(bodyData: any): Promise<any>;
    static getDefaultCustomerGroup(): Promise<any>;
    static getSignUpFormFields(): Promise<any>;
}
export {};
