import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils"

type ButtonVariant = "default" | "danger" | "warning" | "success" | "secondary";
type ButtonVariantSize = "default" | "sm" | "lg" | "icon";


const buttonVariants = (props: {
    variant?: ButtonVariant;
    variantSize?: ButtonVariantSize;
    className?: string;
} = {}): string => {
    const { variant, variantSize, className } = props;
    return cva(
        "text-sm font-medium text-center disabled:opacity-50 cursor-pointer",
        {
            variants: {
                variant: {
                    default: "bg-blue-500 text-white hover:bg-blue-700",
                    secondary: "bg-gray-300 text-white hover:bg-gray-400",
                    danger: "bg-red-500 text-white hover:bg-red-700",
                    warning: "bg-yellow-500 text-white hover:bg-yellow-700",
                    success: "bg-green-500 text-white hover:bg-green-700",
                },
                variantSize: {
                    default: "h-10 px-4 py-2",
                    sm: "h-9 rounded-md px-3",
                    lg: "h-11 rounded-md px-8",
                    icon: "h-10 w-10",
                }
            },
            defaultVariants: {
                variant: "default",
                variantSize: "default",
            },
        }
    )({ variant, variantSize, className });
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, variantSize, asChild = false, children, ...props }, ref): JSX.Element => {

        return (
            <button
                className={cn(buttonVariants({ variant, variantSize, className }))}
                ref={ref}
                {...props}>
                {children}
            </button>
        )
    })

Button.displayName = "Button"

export { Button, buttonVariants }