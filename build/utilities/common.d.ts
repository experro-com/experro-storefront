export declare class CommonUtilities {
    static getLanguage(): string;
    static getTenantId(): any;
    static getWorkspaceId(): any;
    static getEnvironmentId(): any;
    static getHostname(): any;
    static getEnvironmentType(): any;
    static getCacheDomain(): any;
    static isRenderingOnServer(): boolean;
    static getStoreHash(): any;
    static utf8_to_b64(str: any): any;
    static b64_to_utf8(str: any): string;
    static getGoogleCdnMediaPrefix(): string;
    static getLocalState(key: any): any;
    static isMobileInAppBrowser(): string;
    static generateUUID(): string;
    static isRenderingInHeadlessBrowser(): boolean;
    static setCurrency(currenyToSet: any): void;
    static getCurrency(): any;
}
