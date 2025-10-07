"use client";

import api from "@/lib/api";
import {QueryClient, QueryClientProvider, useQuery, } from '@tanstack/react-query'
import { Alert } from "@heroui/react/dist";

const messages = async () => {
  const { data } = await api.get("/")
  return data;
}

export default function Exp() {

  const { isPending, error, data } = useQuery({
    queryKey: ["message"],
    queryFn: messages
  })

  if (isPending) return <p>Cargando . . .</p>

  if (error) return <p>Hubo un error {error.message}</p>


  return (
    <div className="flex items-center justify-center w-full">
      <Alert description={data.mensaje} title="mensaje api" />
    </div>

  )

} 