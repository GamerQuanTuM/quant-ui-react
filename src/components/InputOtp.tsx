import * as React from "react";
import { cn } from "../lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

type OtpVariant = "xs" | "sm" | "md" | "lg" | "xl";

const otpVariants = (props: {
    variant?: OtpVariant;
    className?: string;
} = {}): string => {
    const { variant, className } = props;
    return cva(
        `text-center border border-gray-300 rounded`,
        {
            variants: {
                variant: {
                    xs: "w-4 h-4",
                    sm: "w-7 h-7",
                    md: "w-10 h-10",
                    lg: "w-12 h-12",
                    xl: "w-16 h-16"
                }
            },
            defaultVariants: {
                variant: "md"
            }
        }
    )({ variant, className });
};

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof otpVariants> {
    elements?: number;
    onOtpChange?: (values: string) => void;
}

const Otp = React.forwardRef<(HTMLInputElement | null)[], InputProps>(({
    className, variant, type = "number", onOtpChange, elements = 6, ...props
}, ref) => {
    const inputs = React.useRef<(HTMLInputElement | null)[]>([]);

    React.useImperativeHandle(ref, () => inputs.current, [inputs]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const value = e.target.value;
        if (value.length > 0 && index < elements - 1) {
            inputs.current[index + 1]?.focus();
        }

        if (onOtpChange) {
            const otpValues = inputs.current.map(input => input?.value || "").join("");
            onOtpChange(otpValues);
        }
    };


    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace' && index > 0 && e.currentTarget.value === '') {
            inputs.current[index - 1]?.focus();
        }
    };

    return (
        <div className="relative w-full flex space-x-2">
            {Array(elements).fill(0).map((_, i) => (
                <input
                    {...props}
                    key={i}
                    type="text"
                    maxLength={1}
                    className={cn(otpVariants({ variant, className }))}
                    onChange={(e) => handleChange(e, i)}
                    onKeyDown={(e) => handleKeyDown(e, i)}
                    ref={(el) => (inputs.current[i] = el)}
                />
            ))}
        </div>
    );
});

Otp.displayName = "Otp";

export { Otp, otpVariants };
