import * as React from "react";

import { cn } from "../lib/utils"
import { ButtonProps, Button } from "./Button";


export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
    isOpen: boolean;
    onClose: () => void;
}

const ModalContent = React.forwardRef<HTMLDivElement, ModalProps>(({ isOpen, onClose, children, className }, ref) => {
    if (!isOpen) return null;
    return (
        <div ref={ref} className='flex flex-col gap-5 mt-10'>
            {isOpen && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="fixed inset-0 transition-opacity" onClick={onClose}>
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <div className={cn("bg-white rounded-lg pt-8 z-20 h-[30rem] w-[30rem] relative", className)}>
                            {children}
                            <div className="absolute right-5 top-5">
                                <div className='cursor-pointer' onClick={onClose}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
})


ModalContent.displayName = "ModalContent";

export interface ModalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, ButtonProps {
    onOpen: () => void,
}

const ModalButton = ({ onOpen, children, className, ...props }: ModalButtonProps) => {
    return (
        <Button {...props} className={className} onClick={onOpen}>{children}</Button>
    )
}


export { ModalContent, ModalButton };

