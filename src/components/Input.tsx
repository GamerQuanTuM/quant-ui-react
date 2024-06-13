import React, { useState } from "react";
import { cn } from "../lib/utils"
import { cva, type VariantProps } from "class-variance-authority";

type InputVariant = "outlined" | "standard";

const inputVariants = (props: {
  variant?: InputVariant;
  className?: string;
} = {}): string => {
  const { variant, className } = props;
  return cva(
      `block w-full px-4 py-2 border-gray-300 focus:outline-none`,
      {
          variants: {
              variant: {
                  outlined: "border-2",
                  standard: "border-b-2"
              }
          },
          defaultVariants: {
              variant: "outlined"
          }
      }
  )({ variant, className });
};


export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
  label: string,
  type?: "text" | "password";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({
  label, className, variant, type = "text", ...props
}, ref) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    if (!e.target.value) {
      setFocused(false);
    }
  };

  const inputId = `input_${label.replace(/\s+/g, "_").toLowerCase()}`;

  return (
    <div className="relative w-full">
      <input
        {...props}
        type={type}
        id={inputId}
        ref={ref}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={cn(
          inputVariants({ variant, className }),
          `${focused ? "border-indigo-500" : ""}`,
          className
        )}
      />
      <label
        htmlFor={inputId}
        className={`absolute left-6 transition-all duration-300 ${focused ? "-top-2 text-indigo-500 text-xs" : "top-2 left-8 text-gray-500 text-base"
          } bg-white px-1`}
      >
        {label}
      </label>
    </div>
  );
}
)


Input.displayName = "Input"

export { Input,inputVariants }
