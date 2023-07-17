interface WidgetInterface {
    component: any;
    label: string;
    category: string;
    content: string;
    widgetName: string;
    widgetProperties?: any;
    blockProperties?: any;
}
export declare class Widget {
    static createWidget(widget: WidgetInterface): (editor: any) => void;
}
export {};
