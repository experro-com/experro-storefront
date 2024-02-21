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
    static trackProductSearched({ search_location, searchTerm, sku_for_analytics, noOfResults, sku, products_detail }: {
        search_location?: string;
        searchTerm: string | undefined;
        noOfResults: number | undefined;
        sku?: string[];
        sku_for_analytics?: string[] | undefined;
        products_detail?: string[] | undefined;
    }): Promise<void>;
    static trackWidgetProductViewed({ sku, image, price, name, brand, productCategories, sku_for_analytics, is_primary_algorithm, is_secondary_algorithm, algorithm, is_merchandising, rule, rule_type, widget_id, context_type, context_data, variant, rules }: any): Promise<void>;
    static trackWidgetViewed({ noOfResults, products_detail, sku, sku_for_analytics, algorithm, rule, rule_type, widget_id, context_type, context_data, variant }: any): Promise<void>;
    static trackProductViewed({ sku, mode, image, searchTerm, search_location, category, price, name, brand, productCategories, sku_for_analytics, is_primary_algorithm, is_secondary_algorithm, algorithm, is_merchandising, rule, rule_type, widget_id, context_type, context_data, variant, rules }: any): Promise<void>;
    static trackCategoryViewed({ categoryName, items, categoryId, provider_id_esi, sku, sku_for_analytics, products_detail }: {
        categoryName: string;
        items: any;
        categoryId: string;
        provider_id_esi: string;
        sku?: string[];
        sku_for_analytics?: string[] | undefined;
        products_detail?: string[] | undefined;
    }): Promise<void>;
    static trackProductAddedToCart({ sku, sku_for_analytics, variantSku, mode, searchTerm, search_location, category, totalValue, quantity, price, name, brand, productCategories, is_primary_algorithm, is_secondary_algorithm, algorithm, is_merchandising, rule, rule_type, widget_id, context_type, context_data, variant, rules }: any): Promise<void>;
    static trackProductRemovedFromCart({ sku, sku_for_analytics, totalValue, quantity, productCategories, variant_sku, search_location, is_primary_algorithm, is_secondary_algorithm, algorithm, is_merchandising, rule, rule_type, widget_id, context_type, context_data, variant, rules }: any): Promise<void>;
    static trackProductPurchased({ sku, product_categories, variantSku, mode, widgetId, searchTerm, search_location, category, totalValue, quantity, sku_for_analytics, is_primary_algorithm, is_secondary_algorithm, algorithm, is_merchandising, rule, rule_type, widget_id, context_type, context_data, variant, rules }: any): Promise<void>;
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
