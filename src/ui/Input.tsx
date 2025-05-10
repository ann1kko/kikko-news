import { InputHTMLAttributes } from 'react';

export function Input({
    value,
    onChange,
    className,
    ...props
}: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            value={value}
            onChange={onChange}
            className={`outline-0 ${className}`}
            {...props}
        />
    );
}
