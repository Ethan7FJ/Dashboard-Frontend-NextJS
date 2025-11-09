"use client";

import { useValideteToken } from "@/features/auth/hooks/ValideToken.hooks";
import { useRouter } from "next/navigation";
import { useEffect, ReactNode, createContext, useContext } from "react";
import { Data } from "@/features/dashboard/types/dashboard";

const UserContext = createContext<Data | null>(null);

export function Protected({ children }: { children: ReactNode }) {
    const { data, isLoading, isError } = useValideteToken();
    const router = useRouter();

    useEffect(() => {
        if (isError) {
            const timer = setTimeout(() => {
                localStorage.removeItem("token");
                router.push("/login");
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [isError, router]);

    if (isLoading)
        return (
            <p className="min-h-screen flex items-center justify-center bg-gray-100">
                Verificando tu sesión...
            </p>
        );

    if (isError)
        return (
            <p className="min-h-screen flex items-center justify-center bg-gray-100">
                Token inválido o expirado. Redirigiendo...
            </p>
        );

    return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
}

export function useUser() {
    return useContext(UserContext);
}