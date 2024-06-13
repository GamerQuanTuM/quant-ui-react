import *  as React from "react";
import { cn } from "../lib/utils"

export interface SeekbarProps extends React.InputHTMLAttributes<HTMLInputElement> {
    accentColor?: string,
    progressColor?: string,
    seekbarColor?: string,
    value: number;
    max?: number | string
    min?: number | string
}

const Seekbar = React.forwardRef<HTMLInputElement, SeekbarProps>(({ accentColor = "#3B82F6", progressColor = "#3B82F6", seekbarColor = "#D1D5DB", className, value, max = 100, min = 0, ...props }, ref) => {

    const numericMax = typeof max === 'string' ? parseFloat(max) : max;
    const normalizedValue = (value / numericMax) * 100;
    return (
        <input
            {...props}
            max={max}
            min={min}
            ref={ref}
            type="range"
            value={value}
            className={cn(`w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer`, className)}
            style={{
                accentColor: `${accentColor}`,
                background: `linear-gradient(to right, ${progressColor} ${normalizedValue}%, ${seekbarColor} ${normalizedValue}%)`
            }}
        />
    )
})

Seekbar.displayName = "Seekbar"

export { Seekbar }

