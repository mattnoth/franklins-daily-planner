import React, { InputHTMLAttributes, useMemo } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    additionalClasses?: string;
    onInputChange?: (value: string) => void;
}

const BASE_INPUT_CLASSES = "border rounded-md px-3 py-2"; // Add basic styles here

export const Input: React.FC<InputProps> = ({
    additionalClasses = '',
    onInputChange,
    ...props
}) => {

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onInputChange) {
            onInputChange(e.target.value);
        }
    };

    const computedClasses = useMemo(() => {
        return `${BASE_INPUT_CLASSES} ${additionalClasses}`;
    }, [additionalClasses]);

    return (
        <input
            className={computedClasses}
            onChange={handleInputChange}
            {...props} />
    );
};
