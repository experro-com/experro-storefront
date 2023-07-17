interface DraggableAreaInterface {
    style?: any;
    cssClass?: string;
    id: string;
    pageData: any;
    components: any;
    modelField?: any;
}
declare const DraggableArea: ({ style, cssClass, id, pageData, components, modelField }: DraggableAreaInterface) => JSX.Element;
export { DraggableArea };
