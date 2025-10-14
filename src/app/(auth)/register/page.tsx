"use client";

import { RegisterForm } from "@/features/auth/components/RegisterForm";
import { QueryClient, QueryClientProvider, useQuery, } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function LoginPage() {

    return (
        <QueryClientProvider client={queryClient}>
            <div className="h-screen flex items-center justify-center">
                <div className="rounded-lg p-20 shadow-lg/40 shadow-cyan-700">
                    <RegisterForm />
                </div>
            </div>
        </QueryClientProvider>
    );
}