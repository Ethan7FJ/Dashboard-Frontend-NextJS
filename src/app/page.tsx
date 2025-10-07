"use client";

import "./More/globals.css";
import { QueryClient, QueryClientProvider, useQuery, } from '@tanstack/react-query'

import { Navegador } from "@/components/layout/Navbar";

const queryClient = new QueryClient()

export default function Home() {  
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <header >
          <Navegador />
        </header>
        <main className="flex-1 m-3 p-5 rounded-xl inset-shadow-sm inset-shadow-black/50 h-screen">
        </main>
        <footer className="w-full h-16 bg-cyan-950/40 shadow-inner flex items-center justify-center p-3">

        </footer>
      </div>
    </QueryClientProvider>
  );
}

/* 
const messages = async () => {
  const { data } = await api.get("/")
  return data;
}


function Exp() {

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

} */


