export declare class CommonUtilities {
    static getLanguage(): any;
    static getDefaultLanguage(): any;
    static getTenantId(): any;
    static getStoreURL(): any;
    static getWorkspaceId(): any;
    static getEnvironmentId(): any;
    static getCustomDomain(): string;
    static getChannelsInfo(): any;
    static getCurrentChannelInfo(): any;
    static getHostname(): any;
    static getEnvironmentType(): any;
    static isEcommStoreExist(): boolean;
    static getCacheDomain(): any;
    static getPingDetails(): any;
    static isExperroHost(): any;
    static isRenderingOnServer(): boolean;
    static getStoreHash(): any;
    static utf8_to_b64(str: any): any;
    static b64_to_utf8(str: any): string;
    static getGoogleCdnMediaPrefix(): string;
    static getLocalState(key: any): any;
    static getGlobalSettings(): any;
    static isMobileInAppBrowser(): string;
    static generateUUID(): string;
    static isRenderingInHeadlessBrowser(): boolean;
    static setCurrency(currenyToSet: any): void;
    static getCurrency(): any;
    static getCustomerGroupId(): any;
    /**
     * This utility file is tasked with parsing the component_content (the experro_storefront, custom traits values specific to our storefront) and
     *  combining it with the other component props, resulting in a unified object.
     */
    static propsParser(props: any): any;
}
