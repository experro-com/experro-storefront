export declare class MagentoEcomm {
    static getCartWithDiscountDetails(): Promise<any>;
    static getCart(): Promise<any>;
    static createCart({ line_items }: {
        line_items?: any;
    }): Promise<any>;
    static addToCart({ line_items }: {
        line_items?: any;
    }): Promise<any>;
    static getOrderById(orderId: string | number | null): Promise<any>;
    static updateCart({ itemId, line_item, }: {
        itemId?: any;
        line_item?: any;
    }): Promise<any>;
    static deleteItemInCart({ itemId }: {
        itemId: any;
    }): Promise<void>;
    static getUserToken(): Promise<any>;
    static initCheckout(): Promise<any>;
    static addCouponCode({ body }: {
        body: any;
    }): Promise<any>;
    static removeAllCouponCode(): Promise<any>;
    static getAllWishlists(): Promise<any>;
    static addItemToWishlist({ body }: {
        body: any;
    }): Promise<any>;
    static deleteItemFromWishlistById({ itemId }: {
        itemId: any;
    }): Promise<any>;
    static subscribeToNewsLetter(email: any): Promise<any>;
}
