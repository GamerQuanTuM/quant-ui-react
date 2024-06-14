import React from 'react';
import { cn } from '../lib/utils';

interface Option {
  value: string;
  label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[];
  label?: string;
  placeholder?: string;
  className?: string;
  labelClassName?: string;
}

const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  label,
  placeholder,
  className,
  labelClassName,
  ...props
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && <label className={cn("mb-1 text-sm font-medium", labelClassName)}>{label}</label>}
      <select
        value={value}
        onChange={onChange}
        className={cn("p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400", className)}
        {...props}
      >
        {placeholder && <option value="" disabled>{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export { Select };
