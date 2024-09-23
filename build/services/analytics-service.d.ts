export declare class AnalyticsService {
    static isAnalyticsEnabled(): any;
    static isGAEnabled(): Promise<unknown>;
    static themeCurrency(): string;
    static gTagCurrency(): any;
    static login(email: any): Promise<void>;
    static logout(): Promise<void>;
    static updateUserDetails(userDetails: any): Promise<boolean>;
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
    static trackProductSearched({ search_location, searchTerm, noOfResults, sku, products_detail }: {
        search_location?: string;
        searchTerm: string | undefined;
        noOfResults: number | undefined;
        sku?: string[];
        products_detail?: string[] | undefined;
    }): Promise<void>;
    static trackWidgetViewed({ noOfResults, products_detail, sku, algorithm, rule, rule_type, widget_id, context_type, context_data, category, variant, pageType, pageMetaId, pageDisplayName }: any): Promise<void>;
    static trackProductViewed({ sku, mode, searchTerm, search_location, category, price, name, brand, productCategories, is_primary_algorithm, is_secondary_algorithm, algorithm, is_merchandising, rule, rule_type, widget_id, context_type, context_data, variant, rules, mode_details, product_option }: any): Promise<void>;
    static trackProductVarientViewed({ sku, mode, searchTerm, search_location, category, price, name, brand, productCategories, is_primary_algorithm, is_secondary_algorithm, algorithm, is_merchandising, rule, rule_type, widget_id, context_type, context_data, variant, rules, mode_details, product_option }: any): Promise<void>;
    static trackCategoryViewed({ categoryName, items, categoryId, provider_id_esi, sku, products_detail }: {
        categoryName: string;
        items: any;
        categoryId: string;
        provider_id_esi: string;
        sku?: string[];
        products_detail?: string[] | undefined;
    }): Promise<void>;
    static trackProductAddedToCart({ sku, variantSku, mode, searchTerm, search_location, category, totalValue, quantity, price, name, brand, productCategories, is_primary_algorithm, is_secondary_algorithm, algorithm, is_merchandising, rule, rule_type, widget_id, context_type, context_data, variant, rules, mode_details, product_option }: any): Promise<void>;
    static trackProductRemovedFromCart({ sku, name, brand, price, totalValue, quantity, productCategories, variant_sku, searchTerm, category, search_location, is_primary_algorithm, is_secondary_algorithm, algorithm, is_merchandising, rule, rule_type, widget_id, context_type, context_data, variant, rules, mode_details, product_option, }: any): Promise<void>;
    static trackCartViewed({ totalValue, totalQuantity, cartId, baseAmount, cartAmount, discountAmount, items, products }: {
        totalValue: any;
        totalQuantity: any;
        cartId: any;
        baseAmount: any;
        cartAmount: any;
        discountAmount: any;
        items: any;
        products: any;
    }): Promise<void>;
    static trackCheckoutInitiated({ items, totalValue, cartId, totalQuantity, products }: any): Promise<void>;
    static trackCheckoutCompleted({ items, totalValue, cartId, totalQuantity, subtotal_tax, currency_code, base_handling_cost, base_shipping_cost, discount_amount, handling_cost_ex_tax, shipping_cost_ex_tax, subtotal_ex_tax, total_ex_tax, wrapping_cost_ex_tax, payment_method, shipping_method, products }: any): Promise<void>;
    static trackWidgetLoaded({ widgetId, widgetName, type, algorithm }: {
        widgetId: any;
        widgetName: any;
        type: any;
        algorithm: any;
    }): Promise<void>;
}
