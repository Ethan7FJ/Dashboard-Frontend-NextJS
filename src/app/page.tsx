"use client";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import "./More/globals.css";

import { Navegador } from "@/components/layout/Navbar";
import { Dash } from "@/features/home/components/dash";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col bg-black text-white">
        <header className="w-full">
          <Navegador />
        </header>
        <main className="flex-1 flex items-center justify-center px-4 py-">
          <div className="w-full">
            <Dash />
          </div>
        </main>
        <footer className="w-full h-16 bg-black flex items-center justify-center p-3">
          <p className="text-white text-sm md:text-base">Desarrollado por Johan Fetecua © 2025</p>
        </footer>
      </div>
    </QueryClientProvider>
  );
}
