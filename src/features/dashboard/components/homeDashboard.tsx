"use client";

import { useEffect } from "react";
import { useValideteToken } from "@/features/auth/hooks/ValideToken.hooks";
import { Greeting } from "./greeeting";
import { useRouter } from "next/navigation";

/* COMPONETS */
import { SliderBar } from "./sliderBar";

export function HomeDashboard() {

    const { data, isLoading, isError, error } = useValideteToken();
    const router = useRouter();

    useEffect(() => {
        if (isError) {
            const timer = setTimeout(()=>{
                router.push("/login");
                localStorage.removeItem("token");
            },2000)
            return () => clearTimeout(timer);
        }
    }, [isError]);

    if (isLoading) {
        return <p className="min-h-screen flex items-center justify-center bg-gray-100">Verificando tu sesion</p>
    }

    if (isError) {
        return (<p className="min-h-screen flex items-center justify-center bg-gray-100">El token es invalido o esta expirado. Redirigiendo ...</p>)
    }

    return (
        <div className="min-h-screen flex">
            <aside className="w-50 bg-gray-900 mr-1 hidden sm:flex flex-col items-center justify-center">
                <SliderBar/>
            </aside>
            <div className="flex-1 flex flex-col bg-gray-50 text-gray-800">
                <header className="">
                    <Greeting data={data} />
                </header>
                <main className="h-full px-6 py-8 shadow-lg shadow-black m-3 rounded-lg">
                    <p className="text-lg font-medium">Ola</p>
                </main>
                <footer className="bg-gray-900 text-gray-200 text-center py-4 mt-auto h-15 rounded-tl-lg">
                    <p className="text-sm">App © {new Date().getFullYear()} || Johan</p>
                </footer>
            </div>
        </div>
    )
}