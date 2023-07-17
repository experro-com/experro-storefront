import React from 'react';
interface ExpCheckboxInputProps {
    inputValue: string | undefined;
    field: string;
    label: string;
    changeHandler(field: string, event: React.FormEvent<HTMLInputElement>, type?: string): void;
    type: string;
}
declare const ExpCheckboxInput: React.FC<ExpCheckboxInputProps>;
export default ExpCheckboxInput;
