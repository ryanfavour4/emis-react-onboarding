import React, { SelectHTMLAttributes } from "react";
import s from "./Select.module.css";

export default function Select({
    label,
    name,
    className,
    children,
    ...rest
}: SelectProps) {
    return (
        <select
            {...rest}
            className={`${s.select} ${className}`}
            name={name}
            id={name}
        >
            {children}
        </select>
    );
}

// ?? TYPES
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    name: string;
    className?: string;
}
