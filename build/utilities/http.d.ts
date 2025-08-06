export interface HttpRequestConfig {
    body?: any;
    headers?: any;
    credentials?: string;
    redirect?: string;
    cache?: string;
    mode?: string;
    method?: string;
}
export interface HttpRequest {
    key: string;
    url: string;
    config?: HttpRequestConfig;
    enableSSR?: boolean;
    componentId?: string;
    excludeCommonHeaders?: boolean;
    language?: string;
    callForceFully?: boolean;
    signal?: any;
    appendLanguageFromQueryParams?: boolean;
    customerGroupId?: any;
}
export interface ExpHttpRequest {
    key?: string;
    url: string;
    enableSSR?: boolean;
    headers?: any;
    body?: any;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
}
export declare class Http {
    private static request;
    static get({ key, url, config, enableSSR, componentId, excludeCommonHeaders, language, signal, callForceFully, appendLanguageFromQueryParams }: HttpRequest): Promise<any>;
    static post({ key, url, config, enableSSR, componentId, excludeCommonHeaders, language, signal, customerGroupId }: HttpRequest): Promise<any>;
    static put({ key, url, config, enableSSR, componentId, excludeCommonHeaders, language }: HttpRequest): Promise<any>;
    static patch({ key, url, config, enableSSR, componentId, excludeCommonHeaders, language }: HttpRequest): Promise<any>;
    static delete({ key, url, config, enableSSR, componentId, excludeCommonHeaders, language }: HttpRequest): Promise<any>;
    static expFetch({ key, url, enableSSR, headers, body, method }: ExpHttpRequest): Promise<any>;
}
