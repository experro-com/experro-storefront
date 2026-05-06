import { expFilter } from './content-service';
import { getCustomersDetailsType } from '../store/bigcommerce/e-comm';
export interface ExpImageSearchProps {
    base64Image: string;
    skip?: number;
    limit?: number;
    fieldsToQuery: string;
    domain?: string;
}
export interface facetsArr {
    field_internal_name: string;
    value?: 'string';
    min?: 'string';
    max?: 'string';
}
export interface getFacetsData {
    categoryId?: string;
    searchTerm?: string;
    facets?: facetsArr[];
    include_fields_meta?: boolean;
}
export interface widgetSearchWidgetData {
    widget_id: string;
    context_type?: string;
    context_data?: string;
    custom_filter?: any;
    requested_user_id?: any;
    product_ids?: any;
}
export interface widgetSearchObject {
    skip?: string;
    limit?: string;
    fieldsToQuery?: string;
    widgetData: widgetSearchWidgetData;
    currency?: any;
    customerGroupId?: any;
}
export declare type autoSuggestLimits = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | number;
export interface expAutoSuggest {
    autoSuggest: {
        include_fields_meta?: boolean;
        searchTerm: string;
        show_auto_suggester_term?: boolean;
        auto_suggester_term_limit?: autoSuggestLimits;
        show_category?: boolean;
        category_limit?: autoSuggestLimits;
        include_category_count?: boolean;
        show_popular_searches?: boolean;
        popular_searches_limit?: autoSuggestLimits;
        show_content_pages?: boolean;
        content_pages_limit?: autoSuggestLimits;
        content_fields?: string;
        show_recent_searches?: boolean;
        recent_searches_limit?: autoSuggestLimits;
        user_id?: string;
        show_products?: boolean;
        products_limit?: autoSuggestLimits;
        fields?: string;
        filter?: expFilter[];
        did_you_mean_limit?: autoSuggestLimits;
    };
    signal?: any;
    customerGroupId?: any;
}
export interface searchBody {
    category_id?: string;
    search_term?: string;
    collection_id?: string;
    category_name?: string;
    out_of_stock?: string;
    facets?: {
        field_internal_name: string;
        value?: string;
    }[];
    filter?: expFilter[];
}
export interface search {
    fields: string;
    skip?: number;
    limit?: number;
    sort_by?: string;
    sort_order?: string;
    currency?: string;
    include_count?: boolean;
    channel_id?: string;
    store_id?: string;
    by_pass_merchandising?: boolean;
    location_id?: string;
    body?: searchBody;
    signal?: any;
    include_fields_meta?: boolean;
}
export interface widgetSearchBody {
    context_type: string;
    context_data: string;
    products_ids?: string[];
    category_ids?: string[];
    filter?: expFilter[];
    user_id?: string;
}
export interface widgetSearch {
    widget_id: string;
    fields: string;
    skip?: number;
    limit?: number;
    currency?: string;
    channel_id?: string;
    store_id?: string;
    body: widgetSearchBody;
    include_fields_meta?: boolean;
    location_id?: string;
}
export declare class EcommerceService {
    static getCurrencies(): Promise<any>;
    static getCart(): Promise<any>;
    static getCartWithDiscountDetails(): Promise<any>;
    static getAbandonedCart(token: string | null): Promise<any>;
    static getCartRedirectUrls(): Promise<any>;
    static getOrderById(orderId: string | number): Promise<any>;
    static imageSearch({ base64Image, skip, limit, fieldsToQuery, domain, }: ExpImageSearchProps): Promise<any>;
    static search(searchConfig: search): Promise<any>;
    static getFacetData({ categoryId, searchTerm, facets, include_fields_meta, }: getFacetsData): Promise<any>;
    static getCategoriesAndSubCategories(categoryId?: string, include_fields_meta?: boolean): Promise<any>;
    static searchProductByField({ fieldName, fieldValue, fieldsToQuery, filter, }: {
        fieldName?: any;
        fieldValue?: any;
        fieldsToQuery?: any;
        filter?: string;
    }): Promise<any>;
    static searchProductByFieldV2({ fieldName, fieldValue, fieldsToQuery, filter, }: {
        fieldName?: any;
        fieldValue?: any;
        fieldsToQuery?: any;
        filter?: string;
    }): Promise<any>;
    static getContentModelName({ model }: {
        model: any;
    }): Promise<any>;
    static getEcommerceModalFields(include_fields_meta?: boolean): Promise<any>;
    static getEcommerceModalValues(fieldName: string, include_fields_meta?: boolean): Promise<any>;
    static getAutoCompleteList({ searchObj }: {
        searchObj: any;
    }): Promise<any>;
    static emailTemplateForms(formId: string, formMapping: any): Promise<any>;
    static getUserLocation(include_fields_meta?: boolean): Promise<any>;
    static getPersonalizationWidgetList(algorithmInternalName: any, fieldsToQuery?: string): Promise<any>;
    static expAutoSuggest({ autoSuggest, signal, customerGroupId, }: expAutoSuggest): Promise<any>;
    static getCategoryTree(id: string, categoryIDs: string[]): Promise<any>;
    static widgetSearch(widgetConfig: widgetSearch): Promise<any>;
    static createCart({ customerId, line_items, gift_certificates, currency, }: {
        customerId?: any;
        line_items?: any;
        gift_certificates?: any;
        currency?: {
            code: string;
        };
    }): Promise<any>;
    static updateCustomerId({ customerId, cartId, }: {
        customerId?: any;
        cartId?: any;
    }): Promise<any>;
    static initCheckout(): Promise<any>;
    static addToCart({ line_items, gift_certificates, currency, }: {
        line_items?: any;
        gift_certificates?: any;
        currency?: {
            code: string;
        };
    }): Promise<any>;
    static updateCart({ itemId, line_item, }: {
        itemId?: any;
        line_item?: any;
    }): Promise<any>;
    static deleteItemInCart({ itemId }: {
        itemId?: any;
    }): Promise<any>;
    static getProductReviewsByProductId({ productId, skip, limit, }: {
        productId?: any;
        skip?: any;
        limit?: any;
    }): Promise<any>;
    static updateProductReviewByProductIdAndReviewId({ productId, reviewId, }: {
        productId?: any;
        reviewId?: any;
    }): Promise<any>;
    static addProductReview({ productId, body, }: {
        productId?: any;
        body?: any;
    }): Promise<any>;
    static addCouponCode({ body }: {
        body?: any;
    }): Promise<any>;
    static removeCouponCodeById({ couponId }: {
        couponId?: any;
    }): Promise<any>;
    static removeAllCouponCode(): Promise<any>;
    static createWishlist({ body }: {
        body?: any;
    }): Promise<any>;
    static updateWishlist(wishlistId: any, body: any): Promise<any>;
    static getCheckoutInfo(checkoutId: string): Promise<any>;
    static deleteWishlist(wishlistId: any): Promise<any>;
    static deleteCart(): Promise<any>;
    static getAllWishlists(): Promise<any>;
    static getWishlistById(wishlistId: any): Promise<any>;
    static addItemToWishlist({ wishlistId, body, }: {
        wishlistId?: any;
        body: any;
    }): Promise<any>;
    static deleteItemFromWishlistById({ wishlistId, itemId, }: {
        wishlistId?: any;
        itemId: any;
    }): Promise<any>;
    static subscribeToNewsLetter(email: any): Promise<any>;
    static unsubscribeToNewsLetter(email: any): Promise<any>;
    static createProduct(product: any): Promise<any>;
    static getStoreLocations(): Promise<any>;
    static getGiftCertificateBalance(code: string): Promise<any>;
    static getCustomersDetails(args?: getCustomersDetailsType): Promise<any>;
    static getCustomerAttributes(): Promise<any>;
    static getParentProductRelations(productId: {
        productId?: any;
    }): Promise<any>;
}
