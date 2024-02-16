export declare class ShopifyEcomm {
    static getCart(): Promise<any>;
    static createCart({ line_items }: {
        line_items?: any;
    }): Promise<any>;
    static addToCart({ line_items }: {
        line_items?: any;
    }): Promise<any>;
    static updateCart({ itemId, line_item }: {
        itemId?: any;
        line_item?: any;
    }): Promise<any>;
    static deleteItemInCart({ itemId }: {
        itemId: any;
    }): Promise<void>;
}
