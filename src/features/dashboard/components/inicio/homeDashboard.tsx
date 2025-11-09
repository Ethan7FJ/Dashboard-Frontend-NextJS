"use client";

import { useEffect } from "react";
import { Greeting } from "../greeeting";
import dynamic from "next/dynamic";

export function HomeDashboard() {

    /* Components */
    const Sidebar = dynamic(() => import("../sliderBar").then(mod => mod.SliderBar), {
        ssr: false,
        loading: () => <p>Cargando el menu</p>
    })

    return (
        <div className="min-h-screen flex">
            <aside className="w-50 bg-gray-900 mr-1 hidden sm:flex flex-col items-center justify-center">
                <Sidebar />
            </aside>
            <div className="flex-1 flex flex-col bg-gray-50 text-gray-800">
                <header className="">
                    <Greeting />
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