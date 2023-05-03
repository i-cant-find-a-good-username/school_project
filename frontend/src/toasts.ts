import type { ToastSettings } from "@skeletonlabs/skeleton";



let toast: ToastSettings
export const create_toast = (type: 'success' | 'warning' | 'error', message: string) => {
    return toast = {
        message: message,
        background: 'variant-filled-'+type,
    };
}