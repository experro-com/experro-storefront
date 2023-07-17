import React from 'react';
interface Option {
    value: string;
    name: string;
}
interface ExpDropDownInputProps {
    inputValue: string;
    field: string;
    label: string;
    changeHandler(field: string, event: React.FormEvent<HTMLSelectElement>, type?: string): void;
    type: string;
    options: Option[];
}
declare const ExpDropDownInput: React.FC<ExpDropDownInputProps>;
export default ExpDropDownInput;
