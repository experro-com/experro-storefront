import React from 'react';
interface ExpTextInputProps {
    inputValue: string;
    field: string;
    label: string;
    changeHandler(field: string, event: React.FormEvent<HTMLInputElement>, type: string): void;
    handelOnBlur?: any;
    type?: string;
}
declare const ExpTextInput: React.FC<ExpTextInputProps>;
export default ExpTextInput;
