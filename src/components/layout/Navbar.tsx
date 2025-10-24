"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

/* Imagenes menu mobil */
import open from '@/features/home/img/principal.png'
import close from '@/features/home/img/secundaria.png'


export function Navegador() {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className="relative flex w-full h-19 shadow-md border-b-1 border-gray-500 bg-black items-center justify-center">
            <div className="hidden sm:flex justify-center">
                <div className="mr-5">
                    <Link href="/login" className="text-white text-lg rounder-lg p-3 duration-250 hover:rounded-lg hover:border-1 hover:bg-white hover:text-black active:p-2">Sign In</Link>
                </div>
                <div>
                    <Link href="/register" className="text-white text-lg rounder-lg p-3 duration-250 hover:rounded-lg hover:border-1 hover:bg-white hover:text-black active:p-2">Sign Up</Link>
                </div>
            </div>

            <div className="flex items-center text-white sm:hidden">
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? (
                        <Image src={close} alt="menu" width={40} height={40} className="object-contain" />
                    ) : (
                        <Image src={open} alt="menu" width={40} height={40} className="object-contain" />
                    )}
                </button>
            </div>

            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-black/95 p-4 flex flex-col items-center gap-3 sm:hidden shadow-md shadow-gray-700 z-40">
                    <Link href="/login" className="text-red-600 text-xl">Sign In</Link>
                    <Link href="/register" className="text-blue-600 text-xl">Sign Up</Link>
                </div>
            )}

        </nav>
    );
}