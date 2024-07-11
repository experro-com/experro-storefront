import React from 'react';
interface QueryBuilderModalPopupProps {
    isQueryBuilderPopupOpen: boolean;
    setIsQueryBuilderPopupOpen: any;
    setQueryBuilder: any;
    setOperator: any;
    initialQuery: any;
    initialOperator: any;
}
declare const QueryBuilderModalPopup: ({ setOperator, setQueryBuilder, isQueryBuilderPopupOpen, setIsQueryBuilderPopupOpen, initialQuery, initialOperator, }: QueryBuilderModalPopupProps) => React.JSX.Element;
export default QueryBuilderModalPopup;
