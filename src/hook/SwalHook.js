import { useState } from "react";

export function useSwal2Hook() {
    
    const [swalProps, setSwalProps] = useState({
        showConfirmButton: false,
        showCloseButton: true,
        allowOutsideClick: false,
    });

    const openSwal = () => setSwalProps({
        ...swalProps,
        show: true,
    });

    const closeSwal = () => setSwalProps({
        ...swalProps,
        show: false,
    });

    return [swalProps, openSwal, closeSwal]
}