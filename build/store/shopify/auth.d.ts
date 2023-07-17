interface LoginRequest {
    username: string;
    password: string;
}
export declare class ShopifyAuth {
    static getCustomerDetails(): Promise<any>;
    static getCustomerOrders(): Promise<any>;
    static updateCustomerDetails(commonDetails: any): Promise<any>;
    static getCustomerAddresses(): Promise<any>;
    static createCustomerAddress(bodyData: any): Promise<any>;
    static updateCustomerAddress({ bodyData, addressId }: {
        bodyData: any;
        addressId: any;
    }): Promise<any>;
    static deleteCustomerAddress(AddressId: any): Promise<any>;
    static login({ username, password }: LoginRequest): Promise<any>;
    static logout(): Promise<any>;
}
export {};
