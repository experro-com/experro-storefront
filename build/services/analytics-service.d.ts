export declare class AnalyticsService {
    static isAnalyticsEnabled(): any;
    static isGAEnabled(): Promise<unknown>;
    static login(email: any): Promise<void>;
    static logout(): Promise<void>;
    static updateUserDetails(userDetails: any): Promise<void>;
    static trackPageView({ pageTitle, pageUrl }: {
        pageTitle: any;
        pageUrl: any;
    }): void;
    static trackEvent({ eventName, count, sum, dur, eventData }: {
        eventName: any;
        count: any;
        sum: any;
        dur: any;
        eventData: any;
    }): Promise<void>;
    static trackProductSearched({ searchTerm, noOfResults, sku, sku_for_analytics }: {
        searchTerm: string | undefined;
        noOfResults: number | undefined;
        sku?: string[];
        sku_for_analytics?: string[] | undefined;
    }): Promise<void>;
    static trackProductViewed({ sku, mode, image, widgetId, searchTerm, category, price, name, brand, productCategories, sku_for_analytics }: {
        sku: any;
        mode: any;
        image: any;
        widgetId: any;
        searchTerm: any;
        category: any;
        price: any;
        name: any;
        brand: any;
        productCategories: any;
        sku_for_analytics: any;
    }): Promise<void>;
    static trackCategoryViewed({ categoryName, items, categoryId, provider_id_esi, sku, sku_for_analytics }: {
        categoryName: string;
        items: any;
        categoryId: string;
        provider_id_esi: string;
        sku?: string[];
        sku_for_analytics?: string[] | undefined;
    }): Promise<void>;
    static trackProductAddedToCart({ sku, sku_for_analytics, variantSku, mode, widgetId, searchTerm, category, totalValue, quantity, price, name, brand, productCategories }: {
        sku: any;
        sku_for_analytics: any;
        variantSku: any;
        mode: any;
        widgetId: any;
        searchTerm: any;
        category: any;
        totalValue: any;
        quantity: any;
        price: any;
        name: any;
        brand: any;
        productCategories: any;
    }): Promise<void>;
    static trackProductRemovedFromCart({ sku, sku_for_analytics, totalValue, quantity, productCategories, variant_sku }: {
        sku: any;
        sku_for_analytics: any;
        totalValue: any;
        quantity: any;
        productCategories: any;
        variant_sku: any;
    }): Promise<void>;
    static trackProductPurchased({ sku, product_categories, variantSku, mode, widgetId, searchTerm, category, totalValue, quantity, sku_for_analytics }: {
        sku: any;
        product_categories: any;
        variantSku: any;
        mode: any;
        widgetId: any;
        searchTerm: any;
        category: any;
        totalValue: any;
        quantity: any;
        sku_for_analytics: any;
    }): Promise<void>;
    static trackCartViewed({ totalValue, totalQuantity, items }: {
        totalValue: any;
        totalQuantity: any;
        items: any;
    }): Promise<void>;
    static trackCheckoutInitiated({ items, totalValue, totalQuantity }: {
        items: any;
        totalValue: any;
        totalQuantity: any;
    }): Promise<void>;
    static trackCheckoutCompleted({ items, totalValue, totalQuantity }: {
        items: any;
        totalValue: any;
        totalQuantity: any;
    }): Promise<void>;
    static trackWidgetLoaded({ widgetId, widgetName, type, algorithm }: {
        widgetId: any;
        widgetName: any;
        type: any;
        algorithm: any;
    }): Promise<void>;
}
