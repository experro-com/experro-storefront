import React from 'react';
interface ExpDataSourceDropDownProps {
    value: string;
    field: string;
    disableSource?: boolean;
    changeHandler(field: string, event: React.FormEvent<HTMLInputElement>): void;
}
declare const ExpDataSourceDropDown: React.FC<ExpDataSourceDropDownProps>;
export default ExpDataSourceDropDown;
