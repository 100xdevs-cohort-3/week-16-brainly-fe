import React, { ReactElement } from "react";

interface ButtonInterface {
    title: string;
    size: "lg" | "sm" | "md";
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    variant: "primary" | "secondary";
}

const sizeStyles = {
    "lg": "px-8 py-4 text-xl rounded-xl",
    "md": "px-4 py-2 text-md rounded-md",
    "sm": "px-2 py-1 text-sm rounded-sm",
}

const variantStyles = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-400 text-purple-600",
}

export function Button({startIcon, size, endIcon, title, variant}: ButtonInterface) {
    const StartIconWithProps = startIcon ? React.cloneElement(startIcon, { size }) : null;
    const EndIconWithProps = endIcon ? React.cloneElement(endIcon, { size }) : null;

    return <button className={sizeStyles[size] + " " + variantStyles[variant]}>
        <div className="flex items-center">
            {StartIconWithProps}
            <div className="pl-2 pr-2">
                {title}
            </div>
            {EndIconWithProps}
        </div>
    </button>
}
