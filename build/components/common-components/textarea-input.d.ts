import React from 'react';
interface ExpTextAreaInputProps {
    inputValue: string;
    field: string;
    label: string;
    rows: number;
    cols: number;
    changeHandler?(field: string, event: React.FormEvent<HTMLTextAreaElement>, type?: string): void;
    onBlurHandler?: any;
    textAreaRef?: any;
    type?: string;
}
declare const ExpTextAreaInput: React.FC<ExpTextAreaInputProps>;
export default ExpTextAreaInput;
