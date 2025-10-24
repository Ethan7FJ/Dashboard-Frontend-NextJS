"use client";

import { QueryClient, QueryClientProvider, useQuery, } from '@tanstack/react-query'
import { HomeDashboard } from '@/features/dashboard/components/homeDashboard';

const queryClient = new QueryClient()

export default function DashPage() {
    return (
        <QueryClientProvider client={queryClient}>
            <div>
                <HomeDashboard/>
            </div>
        </QueryClientProvider>
    )
}