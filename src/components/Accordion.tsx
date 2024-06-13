import * as React from "react";

import { cn } from "../lib/utils"

import { Button, ButtonProps } from "./Button";


export interface AccordionItemProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content'> {
    isOpen: boolean;
    content: string | React.ReactElement;
}

export interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, ButtonProps {
    onOpen: () => void,
    isOpen: boolean,
    title: string,
    iconColor?: string
}

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(({ isOpen, className, content, ...props }, ref) => {
    return (
        <div {...props} ref={ref}
            className={
                cn(`grid overflow-hidden p-3 transition-all duration-300 ease-in-out text-slate-600 text-sm ${isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                    }`, className)}

        >
            {typeof content === "string" ? <div className="overflow-hidden">{content}</div> : <div className="overflow-hidden">{content}</div>}

        </div>
    )
})

const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(({ title, className, iconColor = "black", onOpen, isOpen, ...props }, ref) => {

    return (
        <Button
            {...props}
            ref={ref}
            onClick={onOpen}
            className={cn("flex justify-between items-center w-full rounded-t-lg", className)}
        >
            <span>{title}</span>
            <div className="">
                <svg
                    style={{
                        fill: iconColor
                    }}
                    className="shrink-0 ml-8"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className={`transform origin-center transition duration-200 ease-out ${isOpen && "!rotate-180"
                            }`}
                    />
                    <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className={`transform origin-center rotate-90 transition duration-200 ease-out ${isOpen && "!rotate-180"
                            }`}
                    />
                </svg>
            </div>
        </Button>
    );
});

const Accordion = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
    return (
        <div {...props} className={cn("border-[1px] border-gray-300 rounded-t-lg", className)} ref={ref} />
    )
})

Accordion.displayName = "Accordion"
AccordionItem.displayName = "AccordionItem",
    AccordionTrigger.displayName = "AccordionTrigger"

export { AccordionItem, AccordionTrigger, Accordion };