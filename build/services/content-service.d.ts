interface GetPageDataRequest {
    pageSlug: string;
    versionId?: string;
    lang?: string;
}
interface GetSingleTypeContentRequest {
    versionId: string;
    modelName: string;
    componentId: string;
    ssrKey: string;
    enableSSR: boolean;
}
interface GetCollectionContentByIdRequest {
    id: string | undefined;
    versionId: string | undefined;
    modelName: string;
    componentId: string;
    ssrKey: string;
    enableSSR: boolean;
}
interface GetCollectionRecordsByInternalName {
    modelInternalName: string;
}
interface GetContentModelRecordsByFieldKeyValue {
    modelInternalName: string;
    fieldKey: string;
    fieldValue: string;
    fieldsToQuery: string;
    sortBy?: string;
    sortType?: string;
    contentDataSortBy?: string;
    limit?: string;
    skip?: string;
    relationField?: string;
    relationFieldDataToQuery?: string;
    filter?: any;
    enableSSR?: any;
}
export declare class ContentService {
    private static __pageData__;
    static getPageDataBySlug({ pageSlug, versionId, lang, }: GetPageDataRequest): Promise<any>;
    static getCollectionRecordsByCollectionInternalName({ modelInternalName, }: GetCollectionRecordsByInternalName): Promise<any>;
    static getCollectionTypeContentById({ id, versionId, modelName, componentId, ssrKey, enableSSR, }: GetCollectionContentByIdRequest): Promise<any>;
    static getSingleTypeContent({ versionId, modelName, componentId, ssrKey, enableSSR, }: GetSingleTypeContentRequest): Promise<any>;
    static getMenuById(menuId: any): Promise<any>;
    static getContentModelRecordsByFieldKeyValue({ modelInternalName, fieldKey, fieldValue, fieldsToQuery, sortBy, sortType, limit, skip, relationField, relationFieldDataToQuery, filter, contentDataSortBy, enableSSR, }: GetContentModelRecordsByFieldKeyValue): Promise<any>;
    static getPageData(): any;
    static setPageData(pageData: any): void;
    static parseVariableSafeValue(variableName: any): any;
    static parseVariableValue(variableName: any): any;
    static prepareImageUrl({ imagePath, fileType }: {
        imagePath: any;
        fileType: any;
    }): string;
    static getMediaHostName(): any;
    static parseImageURL(image: any): any;
}
export {};