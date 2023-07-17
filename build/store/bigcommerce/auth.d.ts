interface LoginRequest {
    username: string;
    password: string;
}
export declare class BigCommerceAuth {
    static getCustomerDetails(): Promise<any>;
    static getCustomerOrders(): Promise<any>;
    static updateCustomerDetails(commonDetails: any, dynamicDetails: any): Promise<any>;
    static getCustomerAddresses(): Promise<any>;
    static createCustomerAddress(bodyData: any): Promise<any>;
    static updateCustomerAddress({ bodyData }: {
        bodyData: any;
    }): Promise<any>;
    static deleteCustomerAddress(AddressId: number): Promise<any>;
    static getCountries(): Promise<any>;
    static getStates(countryCode: any): Promise<any>;
    static login({ username, password }: LoginRequest): Promise<any>;
    static logout(): Promise<any>;
}
export {};
