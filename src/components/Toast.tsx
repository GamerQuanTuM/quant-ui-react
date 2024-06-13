import * as React from "react";
import toast, { Toaster, ToastPosition } from "react-hot-toast";
import { cn } from "../lib/utils";
import { Button, ButtonProps } from "./Button";

type ToastProps = {
    position?: ToastPosition,
    className?: string,
    duration?: number,
    reverseOrder?: boolean,
    gutter?: number
}

const Toast = ({ position="top-center", duration = 2000, className, reverseOrder = false, gutter = 8, ...props }: ToastProps) => {
    const toastClassName = cn("", className);
    return (
        <>
            <Toaster
                gutter={gutter}
                reverseOrder={reverseOrder}
                toastOptions={{
                    duration,
                    className: toastClassName,
                    position,
                }}
                {...props}
            />
        </>
    );
}

type ToastType = "default" | "success" | "error" | "promise"

export interface ToastTriggerProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>, ButtonProps {
    cta: string,
    typeOfToast?: ToastType,
    promiseLoadingText?: string,
    promiseLoadingSuccess?: string,
    promiseLoadingError?: string,
    promiseFn?: () => Promise<any>
}

const ToastTrigger = ({
    typeOfToast = "default",
    children,
    className,
    promiseLoadingError,
    promiseLoadingSuccess,
    promiseLoadingText,
    cta,
    promiseFn,
    ...props
}: ToastTriggerProps) => {

    const notify = React.useCallback(() => {
        switch (typeOfToast) {
            case "success":
                toast.success(cta);
                break;
            case "error":
                toast.error(cta);
                break;
            case "promise":
                if (promiseFn) {
                    toast.promise(promiseFn(), {
                        loading: promiseLoadingText || 'Saving...',
                        success: <b>{promiseLoadingSuccess}</b> || <b>Saved!</b>,
                        error: <b>{promiseLoadingError}</b> || <b>Could not save.</b>,
                    });
                } else {
                    console.error("Promise function not provided for 'promise' type toast");
                }
                break;
            default:
                toast(cta);
                break;
        }
    }, [cta, typeOfToast, promiseFn, promiseLoadingText, promiseLoadingSuccess, promiseLoadingError]);

    return (
        <Button {...props} className={className} onClick={notify}>{children}</Button>
    );
}

export { Toast, ToastTrigger };
