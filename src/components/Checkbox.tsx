import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../lib/utils"

type CheckboxVariantSize = "sm" | "md" | "lg" | "xl";


const checkboxVariants = (props: {
    variantSize?: CheckboxVariantSize;
    className?: string;
} = {}): string => {
    const { variantSize, className } = props;
    return cva(
        "",
        {
            variants: {
                variantSize: {
                    sm: "h-3 w-3",
                    md: "h-4 w-4",
                    lg: "h-6 w-6",
                    xl: 'h-9 w-9'
                }
            },
            defaultVariants: {
                variantSize: "md"
            }
        }
    )({ variantSize, className });
};

export interface CheckboxProps
    extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof checkboxVariants> {
    label?: string,
    isLabel?: boolean,
    labelClassName?: string
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(({ isLabel, label, className, labelClassName, variantSize, ...props }, ref) => {
    return (
        <div className="flex items-center">
            <input
                ref={ref}
                type="checkbox"
                id="checkbox"
                className={cn(checkboxVariants({ className, variantSize }))}
                {...props}
            />

            {isLabel && <span className={cn("ml-3 text-base text-gray-700", labelClassName)}>
                {label}
            </span>}

        </div>
    )
})

Checkbox.displayName = "Checkbox"

export { Checkbox,checkboxVariants }