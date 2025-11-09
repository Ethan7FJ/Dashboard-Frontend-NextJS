"use client"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import dynamic from 'next/dynamic';
import { Protected } from '@/components/layout/protectRouter';

const queryClient = new QueryClient()

export default function DashboardPage() {

    const Home = dynamic(() => import("@/features/dashboard/components/inicio/homeDashboard").then(mod => mod.HomeDashboard), {
        ssr: false,
        loading: () => <p className="min-h-screen flex items-center justify-center bg-gray-100">Cargando el dashboard</p>
    })

    return (
        <QueryClientProvider client={queryClient}>
            <Protected>
                <Home />
            </Protected>
        </QueryClientProvider>
    )
}