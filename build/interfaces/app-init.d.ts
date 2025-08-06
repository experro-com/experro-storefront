/// <reference types="react" />
export interface AppInit {
    templates: any;
    widgets: any;
    components: any;
    customTraits?: Record<string, React.ComponentType<any>>;
    singleDataModelsToPrefetch: any;
    routes: any;
    headerComponent: any;
    footerComponent: any;
    pencilBannerComponent?: any;
    handleI18?: any;
    toastComponent?: any;
}
