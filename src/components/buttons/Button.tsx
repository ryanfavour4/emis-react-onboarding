import React, { ButtonHTMLAttributes } from "react";
import s from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variants?: "primary" | "secondary" | "complimentary";
    size?: "sm" | "md" | "lg";
}

const Button: React.FC<ButtonProps> = ({
    className = "",
    variants = "primary",
    size = "md",
    children,
    ...props
}) => {
    return (
        <button
            className={`${className} ${s.btnStyle} ${s[variants]} ${s[size]}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
