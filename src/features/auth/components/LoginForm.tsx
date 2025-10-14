"use client";
import { useState } from "react";
import { Form, Input, Button } from "@heroui/react";
import Link from "next/link";
import { useLoginUser } from "../services/authService";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const mutation = useLoginUser();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.currentTarget));
    mutation.mutate(data);
  }

  if (mutation.isSuccess) {
        alert("Inicio de sesion completo");
        window.location.href = "/inicio";
    }

  return (
    <Form
      onSubmit={handleSubmit} className="flex flex-col items-center"
    >
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
      <Button type="submit">Ingresar</Button>
      <Link href="/"> Regresar</Link>
    </Form>
  );
}
