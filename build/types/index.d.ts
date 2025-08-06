export type { expFilter, expFilterRule, contentModelRecordSearch, GetPageDataRequest, GetSingleTypeContentRequest, GetCollectionContentByIdRequest, GetCollectionRecordsByInternalName, getLocationsByPlaceName, GetContentModelRecordsByFieldKeyValue, multiModelContentSearch, fetchContentModelRecordsByFieldKeyValue } from '../services/content-service';
export type { widgetSearchWidgetData, widgetSearchObject, autoSuggestLimits, expAutoSuggest, searchBody, search, widgetSearchBody, widgetSearch, ExpImageSearchProps, facetsArr, getFacetsData } from '../services/ecommerce-service';
export type { getCustomersDetailsType } from '../store/bigcommerce/e-comm';
export type { AppInit } from '../interfaces/app-init';
export type { TraitInterface } from '../interfaces/trait.interface';
export type { HttpRequestConfig, HttpRequest, ExpHttpRequest } from '../utilities/http';
export interface CommonUtilityMethods {
    getLanguage(): string;
    getDefaultLanguage(): string;
    getTenantId(): string;
    getStoreURL(): string;
    getWorkspaceId(): string;
    getEnvironmentId(): string;
    getCustomDomain(): string;
    getChannelsInfo(): any;
    getCurrentChannelInfo(): any;
    getHostname(): string;
    getEnvironmentType(): string;
    isEcommStoreExist(): boolean;
    getCacheDomain(): string;
    getStoreHash(): string;
    isRenderingOnServer(): boolean;
}
export interface CreateCartRequest {
    customerId?: any;
    line_items?: any;
    gift_certificates?: any;
    currency?: {
        code: string;
    };
}
export interface UpdateCartRequest {
    itemId?: any;
    line_item?: any;
}
export interface AddToCartRequest {
    line_items?: any;
    gift_certificates?: any;
    currency?: {
        code: string;
    };
}
export interface CreateWishlistRequest {
    body?: any;
}
export interface AddItemToWishlistRequest {
    wishlistId?: any;
    body: any;
}
export interface DeleteItemFromWishlistRequest {
    wishlistId?: any;
    itemId: any;
}
export interface GetProductReviewsRequest {
    productId?: any;
    skip?: any;
    limit?: any;
}
export interface AddProductReviewRequest {
    productId?: any;
    body?: any;
}
export interface UpdateProductReviewRequest {
    productId?: any;
    reviewId?: any;
}
export interface AddCouponCodeRequest {
    body?: any;
}
export interface RemoveCouponCodeRequest {
    couponId?: any;
}
export interface UIBuilderConstantsType {
    DRAGGABLE_CLASSES: string;
    BASIC_COMPONENTS_RENDERING_SEQUENCE: string[];
}
export interface AnalyticsConfig {
    app_key: string;
    url: string;
    use_session_cookie: boolean;
    debug: boolean;
    require_consent: boolean;
    offline_mode: boolean;
    enable_orientation_tracking: boolean;
    headers: {
        'x-tenant-id': string;
        'x-workspace-id': string;
        'x-env-id': string;
        'x-channel-id': string;
        'x-channel-locale': string;
    };
    force_post: boolean;
}
export interface GetLocationsByPlaceName {
    radius: any;
    modelInternalName: string;
    fieldKey: string;
    fieldValue: string;
    fieldsToQuery: string;
    sortBy?: string;
    sortType?: string;
    contentDataSortBy?: string;
    limit?: string;
    skip?: string;
    relationField?: string;
    relationFieldDataToQuery?: string;
    filter?: any;
    enableSSR?: any;
    fieldType?: 'parent' | 'child';
}
