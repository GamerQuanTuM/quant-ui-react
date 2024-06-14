import React from 'react';
import { cn } from '../lib/utils';

interface ChipInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    chips: string[];
    onChipsChange: (chips: string[]) => void;
    inputClassName?: string;
    chipClassName?: string;
    chipContainerClassName?: string;
    label?: string;
    labelClassName?: string;
    isLabel?: boolean;
    iconColor?: string
}

const ChipInput: React.FC<ChipInputProps> = ({
    chips,
    onChipsChange,
    placeholder,
    inputClassName,
    chipClassName,
    chipContainerClassName,
    isLabel,
    label,
    labelClassName,
    className,
    iconColor = "#FFF",
    ...props
}) => {
    const [inputValue, setInputValue] = React.useState<string>('');
    const inputRef = React.useRef<HTMLInputElement>(null);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && inputValue.trim() !== '') {
            e.preventDefault();
            if (!chips.includes(inputValue)) {
                onChipsChange([...chips, inputValue]);
                setInputValue('');
            }
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleRemoveChip = (chipToRemove: string) => {
        onChipsChange(chips.filter(chip => chip !== chipToRemove));
    };

    return (
        <div className={cn("flex flex-col w-96", className)}>
            {isLabel && <label className={cn("mb-1 text-sm font-medium", labelClassName)}>{label}</label>}
            <div className="flex flex-wrap items-center p-2 border rounded-lg w-full">
                <div className={cn("flex flex-wrap gap-2", chipContainerClassName)}>
                    {chips.map((chip, index) => (
                        <div
                            key={index}
                            className={cn("flex items-center bg-blue-500 text-white rounded-full px-3 py-1", chipClassName)}
                        >
                            <span className="mr-2">{chip}</span>
                            <button
                                style={{
                                    color: iconColor
                                }}
                                type="button"
                                onClick={() => handleRemoveChip(chip)}
                            >
                                &times;
                            </button>
                        </div>
                    ))}
                </div>
                <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    placeholder={placeholder}
                    className={cn("flex-1 p-2 border-none outline-none", inputClassName)}
                    {...props}
                />
            </div>
        </div>
    );
};

export { ChipInput };
