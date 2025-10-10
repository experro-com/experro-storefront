import { ForgotPassword, SetNewPassword } from '../../interfaces/forgot-password.interface';
import SignupInterface from '../../interfaces/signup.interface';
interface LoginRequest {
    username: string;
    password: string;
}
export declare class MagentoAuth {
    static getCustomerDetails(): Promise<any>;
    static getCustomerOrders(): Promise<any>;
    static updateCustomerDetails(commonDetails: any): Promise<any>;
    static getCustomerAddresses(): Promise<any>;
    static createCustomerAddress(bodyData: any): Promise<any>;
    static updateCustomerAddress({ bodyData, addressId, }: {
        bodyData: any;
        addressId: any;
    }): Promise<any>;
    static deleteCustomerAddress(AddressId: any): Promise<any>;
    static updatePassword(passwordDetails: any): Promise<any>;
    static getCountries(): Promise<any>;
    static getStates(countryCode: any): Promise<any>;
    static handleMagentoStore({ action, }: {
        action: 'logoutInMagento' | 'loginInMagento';
    }): Promise<void>;
    static forceLogout(): Promise<boolean>;
    static login({ username, password }: LoginRequest): Promise<any>;
    static logout(): Promise<any>;
    static signup({ firstName, lastName, middleName, email, password, phone, company, customFields, gctoken, }: SignupInterface): Promise<any>;
    static forgotPassword({ email }: ForgotPassword): Promise<any>;
    static setNewPassword({ password, rpToken, customerId, email }: SetNewPassword): Promise<any>;
}
export {};
