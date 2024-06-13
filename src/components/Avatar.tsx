import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

type AvatarVariantSize = "sm" | "md" | "lg" | "xl";

const avatarVariants = (props: {
    variantSize?: AvatarVariantSize;
    className?: string;
} = {}): string => {
    const { variantSize, className } = props;
    return cva(
        "aspect-square h-full w-full rounded-full",
        {
            variants: {
                variantSize: {
                    md: "h-7 w-7",
                    sm: "h-5 w-5",
                    lg: "h-10 w-10",
                    xl: "h-12 w-12",
                }
            },
            defaultVariants: {
                variantSize: "md",
            },
        }
    )({ variantSize, className });
};

export interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement>, VariantProps<typeof avatarVariants> {
    fallbackSrc?: string
}

const Avatar = React.forwardRef<HTMLImageElement, AvatarProps>(
    ({ className, variantSize, children, src, alt, fallbackSrc = "https://github.com/shadcn.png", ...props }, ref): JSX.Element => {
        const [imgSrc, setImgSrc] = React.useState(src || fallbackSrc);

        const handleError = () => {
            setImgSrc(fallbackSrc);
        };

        React.useEffect(() => {
            setImgSrc(src || fallbackSrc);
        }, [src, fallbackSrc]);

        return (
            <img
                ref={ref}
                src={imgSrc}
                alt={alt}
                className={cn(avatarVariants({ variantSize, className }))}
                onError={handleError}
                {...props}
            />
        );
    }
);

Avatar.displayName = "Avatar";

export { Avatar, avatarVariants };
