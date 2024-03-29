interface ExpSearchProps {
    searchObj?: any;
    enableSSR?: boolean;
    isAuto?: boolean;
    searchTerm?: any;
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
}
export declare class EcommerceService {
    static getCurrencies(): Promise<any>;
    static getCart(): Promise<any>;
    static getAbandonedCart(token: string | null): Promise<any>;
    static getCartRedirectUrls(): Promise<any>;
    static createCart({ customerId, line_items }: {
        customerId?: any;
        line_items?: any;
    }): Promise<any>;
    static updateCustomerId({ customerId, cartId }: {
        customerId?: any;
        cartId?: any;
    }): Promise<any>;
    static addToCart({ line_items }: {
        line_items?: any;
    }): Promise<any>;
    static updateCart({ itemId, line_item }: {
        itemId?: any;
        line_item?: any;
    }): Promise<any>;
    static deleteItemInCart({ itemId }: {
        itemId?: any;
    }): Promise<any>;
    static search({ searchObj, enableSSR, isAuto, searchTerm }: ExpSearchProps): Promise<any>;
    static searchAutoSuggest({ searchObj }: {
        searchObj: any;
    }): Promise<any>;
    static getSearchCount({ searchObj, key, componentId, enableSSR }: {
        searchObj: any;
        key: any;
        componentId: any;
        enableSSR?: boolean;
    }): Promise<any>;
    static facetedSearch({ searchObj }: {
        searchObj: any;
    }): Promise<any>;
    static getFacetByCategoryName(categoryName: any): Promise<any>;
    static getAllFacet(): Promise<any>;
    static getProductReviewsByProductId({ productId }: {
        productId?: any;
    }): Promise<any>;
    static updateProductReviewByProductIdAndReviewId({ productId, reviewId, }: {
        productId?: any;
        reviewId?: any;
    }): Promise<any>;
    static addProductReview({ productId, body }: {
        productId?: any;
        body?: any;
    }): Promise<any>;
    static addCouponCode({ body }: {
        body?: any;
    }): Promise<any>;
    static removeCouponCodeById({ couponId }: {
        couponId?: any;
    }): Promise<any>;
    static createWishlist({ body }: {
        body?: any;
    }): Promise<any>;
    static updateWishlist(wishlistId: any, body: any): Promise<any>;
    static deleteWishlist(wishlistId: any): Promise<any>;
    static getAllWishlists(): Promise<any>;
    static getWishlistById(wishlistId: any): Promise<any>;
    static addItemToWishlist({ wishlistId, body }: {
        wishlistId: any;
        body: any;
    }): Promise<any>;
    static deleteItemFromWishlistById({ wishlistId, itemId }: {
        wishlistId: any;
        itemId: any;
    }): Promise<any>;
    static searchProductByField({ fieldName, fieldValue, fieldsToQuery, filter }: {
        fieldName?: any;
        fieldValue?: any;
        fieldsToQuery?: any;
        filter?: string;
    }): Promise<any>;
    static getContentModelName({ model }: {
        model: any;
    }): Promise<any>;
    static getEcommerceModalFields(): Promise<any>;
    static getEcommerceModalValues(fieldName: string): Promise<any>;
    static getAutoCompleteList({ searchObj }: {
        searchObj: any;
    }): Promise<any>;
    static emailTemplateForms(formId: string, formMapping: any): Promise<any>;
    static subscribeToNewsLetter(email: any): Promise<any>;
    static getUserLocation(): Promise<any>;
    static getPersonalizationWidgetList(algorithmInternalName: any, fieldsToQuery?: string): Promise<any>;
    static widgetSearch(searchWidgetObject?: widgetSearchObject): Promise<any>;
    static createProduct(product: any): Promise<any>;
}
export {};
