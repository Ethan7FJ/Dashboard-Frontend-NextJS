"use client";
import React, { useState } from "react";
import { Form, Input, Button } from "@heroui/react";
import { useCreateUser } from "../hooks/useLoginuser.hooks";
import Link from "next/link";
import { RegisterData } from "../types/data";

export function RegisterForm() {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const mutation = useCreateUser();

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const data: RegisterData = {
            nombre: formData.get("nombre") as string,
            email: formData.get("email") as string,
            password: formData.get("password") as string,
        }
        mutation.mutate(data)
    }

    if (mutation.isSuccess) {
        alert("Usuario registrado correctamente");
        window.location.href = "/login";
    }

    return (
        <Form
            onSubmit={handleSubmit} className="flex flex-col items-center"
        >
            <div className="p-3 flex flex-col">
                <label className=" pb-2">
                    Nombre de usuario
                </label>
                <Input
                    isRequired
                    label="Nombre"
                    type="text"
                    name="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
            </div>

            <div className="p-3 flex flex-col">
                <label className=" pb-2">
                    Correo Electronico
                </label>
                <Input
                    isRequired
                    label="Email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="p-3 flex flex-col">
                <label className=" pb-2">
                    Contraseña
                </label>
                <Input
                    isRequired
                    label="Password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            {mutation.isPending && <p>Enviando registro...</p>}
            {mutation.isError && <p className="text-red-500">Error al registrar: {(mutation.error as Error).message}</p>}

            <Button type="submit" disabled={mutation.isPending}>{mutation.isPending ? "Registrando..." : "Registrar"}</Button>
            <Link href="/">Regresar</Link>
        </Form>
    );
}