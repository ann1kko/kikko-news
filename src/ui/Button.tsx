import { ButtonHTMLAttributes } from 'react';

export const Button = ({
    className,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button
            className={`rounded-md bg-sky-600 px-2 py-1 ${className}`}
            {...props}></button>
    );
};
