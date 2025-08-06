export interface GetPageDataRequest {
    pageSlug: string;
    versionId?: string;
    lang?: string;
    callForceFully?: boolean;
    include_fields_meta?: boolean;
}
export interface GetSingleTypeContentRequest {
    versionId: string;
    modelName: string;
    componentId: string;
    ssrKey: string;
    enableSSR: boolean;
    callForceFully?: boolean;
    include_fields_meta?: boolean;
}
export interface GetCollectionContentByIdRequest {
    id: string | undefined;
    versionId: string | undefined;
    modelName: string;
    componentId: string;
    ssrKey: string;
    enableSSR: boolean;
    include_fields_meta?: boolean;
}
export interface GetCollectionRecordsByInternalName {
    modelInternalName: string;
    include_fields_meta?: boolean;
    limit?: number;
    skip?: number;
}
export interface getLocationsByPlaceName {
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
export interface GetContentModelRecordsByFieldKeyValue {
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
export interface expFilterRule {
    action: 'contains' | 'does_not_contains' | 'equal_to' | 'not_equal_to' | 'greater_than' | 'less_than' | 'greater_than_or_equal_to' | 'less_than_or_equal_to';
    field_name: string;
    value: string | number | string[];
}
export interface expFilter {
    group: {
        operator: 'AND' | 'OR';
        rules: expFilterRule[];
    };
}
export interface contentModelRecordSearch {
    modelInternalName: string;
    fields: string;
    sortBy?: string;
    sortOrder?: string;
    limit?: string;
    skip?: string;
    relationField?: string;
    relationFieldDataToQuery?: string;
    parent_filter?: expFilter[];
    child_filter?: expFilter[];
    parent_child_filter_operator?: 'AND' | 'OR';
    ssrKey?: string;
    enableSSR?: any;
    fieldType?: 'parent' | 'child';
    callForceFully?: boolean;
    include_fields_meta?: boolean;
}
export interface multiModelContentSearch {
    modelInternalNames: string;
    fieldsToQuery?: string;
    sortBy?: string;
    sortOrder?: string;
    limit?: string;
    skip?: string;
    enableSSR?: boolean;
    ssrKey?: string;
    fieldType?: 'parent' | 'child';
    searchText: string;
    include_fields_meta?: boolean;
}
export interface fetchContentModelRecordsByFieldKeyValue {
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
    static getPageDataBySlug({ pageSlug, versionId, lang, include_fields_meta, }: GetPageDataRequest): Promise<any>;
    static getCollectionRecordsByCollectionInternalName({ modelInternalName, include_fields_meta, limit, skip }: GetCollectionRecordsByInternalName): Promise<any>;
    static getCollectionTypeContentById({ id, versionId, modelName, componentId, ssrKey, enableSSR, include_fields_meta, }: GetCollectionContentByIdRequest): Promise<any>;
    static getRecordById({ id, versionId, modelName, componentId, ssrKey, enableSSR, include_fields_meta, }: GetCollectionContentByIdRequest): Promise<any>;
    static getLocationsByPlaceName({ radius, modelInternalName, fieldKey, fieldValue, fieldsToQuery, sortBy, sortType, limit, skip, relationField, relationFieldDataToQuery, filter, contentDataSortBy, enableSSR, fieldType, }: getLocationsByPlaceName): Promise<any>;
    static getSingleTypeContent({ versionId, modelName, componentId, ssrKey, enableSSR, callForceFully, include_fields_meta, }: GetSingleTypeContentRequest): Promise<any>;
    static getMenuById(menuId: any, include_fields_meta?: boolean): Promise<any>;
    /**
     * This API is used to search records across multiple content models.
     */
    static multiModelContentSearch({ modelInternalNames, fieldsToQuery, sortBy, sortOrder, limit, skip, enableSSR, ssrKey, searchText, include_fields_meta, }: multiModelContentSearch): Promise<any>;
    /**
     * This API is used to search records within a single content model.
     * Supports two modes: filter-based search (POST) or simple retrieval (GET).
     */
    static contentModelRecordSearch({ modelInternalName, fields, sortBy, sortOrder, limit, skip, relationField, relationFieldDataToQuery, parent_filter, child_filter, parent_child_filter_operator, enableSSR, ssrKey, fieldType, callForceFully, include_fields_meta, }: contentModelRecordSearch): Promise<any>;
    static getContentModelRecordsByFieldKeyValue({ modelInternalName, fieldKey, fieldValue, fieldsToQuery, sortBy, sortType, limit, skip, relationField, relationFieldDataToQuery, filter, contentDataSortBy, enableSSR, fieldType, callForceFully, }: GetContentModelRecordsByFieldKeyValue): Promise<any>;
    static fetchContentModelRecordsByFieldKeyValue({ modelInternalName, fieldKey, fieldValue, fieldsToQuery, sortBy, orderBy, limit, skip, relationField, relationFieldDataToQuery, filter, contentDataSortBy, enableSSR, fieldType, }: fetchContentModelRecordsByFieldKeyValue): Promise<any>;
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
