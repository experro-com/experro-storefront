interface GetPageDataRequest {
    pageSlug: string;
    versionId?: string;
    lang?: string;
    callForceFully?: boolean;
}
interface GetSingleTypeContentRequest {
    versionId: string;
    modelName: string;
    componentId: string;
    ssrKey: string;
    enableSSR: boolean;
    callForceFully?: boolean;
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
interface getLocationsByPlaceName {
    radius: any;
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
    fieldType?: 'parent' | 'child';
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
    fieldType?: 'parent' | 'child';
    callForceFully?: boolean;
}
interface searchContentModelRecordsByFieldKeyValue {
    modelInternalName: string;
    fieldKey: string;
    fieldValue: string;
    fieldsToQuery: string;
    sortBy?: string;
    orderBy?: string;
    limit?: string;
    skip?: string;
    relationField?: string;
    relationFieldDataToQuery?: string;
    filter?: any;
    ssrKey?: string;
    enableSSR?: any;
    fieldType?: 'parent' | 'child';
    callForceFully?: boolean;
}
interface searchMultipleContentModelRecordsByFieldKeyValue {
    modelInternalNames: string;
    fieldKey?: string;
    fieldsToQuery?: string;
    sortBy?: string;
    orderBy?: string;
    limit?: string;
    skip?: string;
    enableSSR?: boolean;
    ssrKey?: string;
    fieldType?: 'parent' | 'child';
    searchText: string;
}
interface fetchContentModelRecordsByFieldKeyValue {
    modelInternalName: string;
    fieldKey: string;
    fieldValue: string;
    fieldsToQuery: string;
    sortBy?: string;
    orderBy?: string;
    contentDataSortBy?: string;
    limit?: string;
    skip?: string;
    relationField?: string;
    relationFieldDataToQuery?: string;
    filter?: any;
    enableSSR?: any;
    fieldType?: 'parent' | 'child';
}
export declare class ContentService {
    private static __pageData__;
    static getPageDataBySlug({ pageSlug, versionId, lang, }: GetPageDataRequest): Promise<any>;
    static getCollectionRecordsByCollectionInternalName({ modelInternalName, }: GetCollectionRecordsByInternalName): Promise<any>;
    static getCollectionTypeContentById({ id, versionId, modelName, componentId, ssrKey, enableSSR, }: GetCollectionContentByIdRequest): Promise<any>;
    static getRecordById({ id, versionId, modelName, componentId, ssrKey, enableSSR, }: GetCollectionContentByIdRequest): Promise<any>;
    static getLocationsByPlaceName({ radius, modelInternalName, fieldKey, fieldValue, fieldsToQuery, sortBy, sortType, limit, skip, relationField, relationFieldDataToQuery, filter, contentDataSortBy, enableSSR, fieldType, }: getLocationsByPlaceName): Promise<any>;
    static getSingleTypeContent({ versionId, modelName, componentId, ssrKey, enableSSR, callForceFully, }: GetSingleTypeContentRequest): Promise<any>;
    static getMenuById(menuId: any): Promise<any>;
    static searchMultipleContentModelRecordsByFieldKeyValuePOST({ modelInternalNames, fieldKey, fieldsToQuery, sortBy, orderBy, limit, skip, enableSSR, ssrKey, searchText }: searchMultipleContentModelRecordsByFieldKeyValue): Promise<any>;
    static searchContentModelRecordsByFieldKeyValuePOST({ modelInternalName, fieldKey, fieldValue, fieldsToQuery, sortBy, orderBy, limit, skip, relationField, relationFieldDataToQuery, filter, enableSSR, ssrKey, fieldType, }: searchContentModelRecordsByFieldKeyValue): Promise<any>;
    static searchContentModelRecordsByFieldKeyValueGET({ modelInternalName, fieldKey, fieldValue, fieldsToQuery, sortBy, orderBy, limit, skip, relationField, relationFieldDataToQuery, filter, ssrKey, enableSSR, fieldType, callForceFully }: searchContentModelRecordsByFieldKeyValue): Promise<any>;
    static getContentModelRecordsByFieldKeyValue({ modelInternalName, fieldKey, fieldValue, fieldsToQuery, sortBy, sortType, limit, skip, relationField, relationFieldDataToQuery, filter, contentDataSortBy, enableSSR, fieldType, callForceFully, }: GetContentModelRecordsByFieldKeyValue): Promise<any>;
    static fetchContentModelRecordsByFieldKeyValue({ modelInternalName, fieldKey, fieldValue, fieldsToQuery, sortBy, orderBy, limit, skip, relationField, relationFieldDataToQuery, filter, contentDataSortBy, enableSSR, fieldType }: fetchContentModelRecordsByFieldKeyValue): Promise<any>;
    static getFormFieldsByFormId({ formId }: {
        formId: string;
    }): Promise<any>;
    static getForms(): Promise<any>;
    static getPageData(): any;
    static setPageData(pageData: any): void;
    static parseVariableSafeValue(variableName: any): any;
    static parseVariableValue(variableName: any): any;
    static prepareImageUrl({ imagePath, fileType }: {
        imagePath: any;
        fileType: any;
    }): string;
    static getMediaHostName(): string;
    static parseImageURL(image: any): any;
}
export {};
