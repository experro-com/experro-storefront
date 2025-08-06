/**
 * @param _fields_ Fields from the response from _meta_ object
 * @param _type Type for which the we want to get paths for
 * @returns Array of strings representing paths
 */
declare function getFieldPathByType(_fields_: any, _type: any): string[];
/**
 * This is a helper function for parsing the response by the given type.
 * @returns parsed reponse
 */
declare function parseContentResoponse(pathArray: string[], data: any): any;
/**
 * This function takes a content response and parses it.
 * @param data The data to be parsed. It should be of the form { Data: { items: [...], _meta_: { _fields_: {...} } } }
 * @returns The parsed data
 */
/*********/
declare const contentResoponseParser: (data: any) => any;
export { parseContentResoponse, getFieldPathByType, contentResoponseParser };
