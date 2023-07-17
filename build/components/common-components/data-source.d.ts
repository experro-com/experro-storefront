import React from 'react';
interface ExpDataSourceDropDownProps {
    dataSource: string;
    disableSource?: boolean;
    changeHandler(field: string, event: React.FormEvent<HTMLSelectElement>, type?: string): void;
}
declare const ExpDataSourceDropDown: React.FC<ExpDataSourceDropDownProps>;
export default ExpDataSourceDropDown;
