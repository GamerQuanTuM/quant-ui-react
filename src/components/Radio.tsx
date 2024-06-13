import React from "react";
import { cn } from "../lib/utils"
import { cva, type VariantProps } from "class-variance-authority";

type RadioVariant = "sm" | "md" | "lg" | "xl"

const radioVariants = (props: {
    variantSize?: RadioVariant;
    className?: string;
} = {}): string => {
    const { variantSize, className } = props;
    return cva(
        `fill-current text-current`,
        {
            variants: {
                variantSize: {
                    sm: "h-3 w-3",
                    md: "h-5 w-5",
                    lg: "h-7 w-7",
                    xl: "h-9 w-9"
                }
            },
            defaultVariants: {
                variantSize: "md"
            }
        }
    )({ variantSize, className });
};

export interface RadioProps
    extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof radioVariants> {
    accentColor?: string;
    isLabel?: boolean,
    label?: string,
    labelClassName?: string
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(({
    className, variantSize, accentColor = "#000", isLabel = false, label, labelClassName, ...props
}, ref) => {
    return (
        <div className="flex items-center justify-center h-5 gap-4">
            <input {...props}
                ref={ref}
                style={{
                    accentColor
                }}
                className={
                    cn(
                        radioVariants(
                            { variantSize, className }))}
                type="radio" />
            {isLabel && <span className={cn("-ml-2 mt-9 text-base text-gray-700", labelClassName)}>
                {label}
            </span>}
        </div>
    )
})

Radio.displayName = "Radio"

export { Radio, radioVariants }