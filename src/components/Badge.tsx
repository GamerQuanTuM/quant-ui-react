import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../lib/utils"

type BadgeVariant = "default" | "secondary" | "destructive" | "outline"

const badgeVariants = (props: {
    variant?: BadgeVariant,
    className?: string;
} = {}) => {
    const { variant, className } = props
    return cva(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold",
        {
            variants: {
                variant: {
                    default:
                        "border-transparent bg-black text-white hover:bg-black/80",
                    secondary:
                        "border-transparent bg-slate-100 text-black hover:bg-slate-100/80",
                    destructive:
                        "border-transparent bg-red-500 text-white hover:bg-red-500/80",
                    outline: "text-black",
                },
            },
            defaultVariants: {
                variant: "default",
            },
        }
    )({ variant, className })
}


export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> { }

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
    ({ className, variant, ...props }, ref): JSX.Element => {
        return (
            <div ref={ref} className={cn(badgeVariants({ variant }), className)} {...props} />
        )
    })

export { Badge, badgeVariants }
