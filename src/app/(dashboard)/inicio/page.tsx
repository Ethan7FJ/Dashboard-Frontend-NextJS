"use client";

import { QueryClient, QueryClientProvider, useQuery, } from '@tanstack/react-query'
import { Temporal } from '@/features/dashboard/components/temporal';

const queryClient = new QueryClient()

export default function DashPage() {
    return (
        <QueryClientProvider client={queryClient}>
            <div>
                <Temporal/>
            </div>
        </QueryClientProvider>
    )
}