export declare class BigCommerceEcomm {
    static getCurrencies(): Promise<any>;
    static getCart(): Promise<any>;
    static getAbandonedCart(token: string | null): Promise<any>;
    static getCartRedirectUrls(): Promise<any>;
    static getOrderById(orderId: string | number): Promise<any>;
    static createCart({ customerId, line_items, gift_certificates, currency }: {
        customerId?: any;
        line_items?: any;
        gift_certificates?: any;
        currency?: {
            code: string;
        };
    }): Promise<any>;
    static updateCustomerId({ customerId, cartId }: {
        customerId?: any;
        cartId?: any;
    }): Promise<any>;
    static addToCart({ line_items, gift_certificates, currency }: {
        line_items?: any;
        gift_certificates?: any;
        currency?: {
            code: string;
        };
    }): Promise<any>;
    static updateCart({ itemId, line_item }: {
        itemId?: any;
        line_item?: any;
    }): Promise<any>;
    static deleteItemInCart({ itemId }: {
        itemId?: any;
    }): Promise<any>;
    static deleteCart(): Promise<any>;
    static getProductReviewsByProductId({ productId, skip, limit, status, exclude_fields, include_fields }: {
        productId: string | number;
        skip: string;
        limit: string;
        status: '0' | '1';
        exclude_fields: string;
        include_fields: string;
    }): Promise<any>;
    static updateProductReviewByProductIdAndReviewId({ productId, reviewId, }: {
        productId: any;
        reviewId: any;
    }): Promise<any>;
    static addProductReview({ productId, body }: {
        productId: any;
        body: any;
    }): Promise<void>;
    static addCouponCode({ body }: {
        body: any;
    }): Promise<any>;
    static removeCouponCodeById({ couponId }: {
        couponId: any;
    }): Promise<any>;
    static createWishlist({ body }: {
        body: any;
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
    static subscribeToNewsLetter(email: any): Promise<any>;
    static getStoreLocations(): Promise<any>;
    static getGiftCertificateBalance(code: string): Promise<any>;
}
