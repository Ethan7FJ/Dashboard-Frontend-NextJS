"use client";

import { useEffect } from "react";
import { useValideteToken } from "@/features/auth/hooks/ValideToken.hooks";

export function Temporal() {

    const { data, isLoading, isError, error } = useValideteToken();

    useEffect(() => {
        if (isError) {
            localStorage.removeItem("token");
        }
    }, [isError]);

    if (isLoading) {
        return <p>Verificando tu sesion</p>
    }

    if (isError) {
        return <p>El token es invalido o esta expirado. Redirigiendo ...</p>
    }

    return (
        <div>
            <p>Bien venido</p>
            <p>Hola {data?.usuario?.nombre}</p>
        </div>
    )
}