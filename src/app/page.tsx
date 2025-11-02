"use client";

import "./More/globals.css";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import { Navegador } from "@/components/layout/Navbar";
import { Dash } from "@/features/home/components/dash";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <header>
          <Navegador />
        </header>
        <main className="flex justify-center items-center bg-black h-screen ">
          <Dash />
        </main>
        <footer className="w-full h-16 bg-black flex items-center justify-center p-3">
          <p className="text-white">Desarrollado por Johan Fetecua © 2025</p>
        </footer>
      </div>
    </QueryClientProvider>
  );
}