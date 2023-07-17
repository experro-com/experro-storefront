interface HttpRequestConfig {
    body?: any;
    headers?: any;
    credentials?: string;
    redirect?: string;
    cache?: string;
    mode?: string;
    method?: string;
}
interface HttpRequest {
    key: string;
    url: string;
    config?: HttpRequestConfig;
    enableSSR?: boolean;
    componentId?: string;
    excludeCommonHeaders?: boolean;
    language?: string;
}
export declare class Http {
    private static request;
    static get({ key, url, config, enableSSR, componentId, excludeCommonHeaders, language }: HttpRequest): Promise<any>;
    static post({ key, url, config, enableSSR, componentId, excludeCommonHeaders, language }: HttpRequest): Promise<any>;
    static put({ key, url, config, enableSSR, componentId, excludeCommonHeaders, language }: HttpRequest): Promise<any>;
    static patch({ key, url, config, enableSSR, componentId, excludeCommonHeaders, language }: HttpRequest): Promise<any>;
    static delete({ key, url, config, enableSSR, componentId, excludeCommonHeaders, language }: HttpRequest): Promise<any>;
}
export {};
