import { AuthPorts } from "@/lib/auth.services";
import { AxiosError } from "axios";
import { AuthResponse, LoginData } from "../types/data";

/* LOGIN */
export const AuthLogin = async (data: LoginData): Promise<AuthResponse> => {
  try {
    const res = await AuthPorts.post("/login", data);
    return res.data;
  } catch (err) {
    const error = err as AxiosError<{ error?: string }>;
    console.error("Error en AuthLogin:", error.response?.data || error.message);
    throw err;
  }
}

/* REGISTER */
export const AuthRegister = async (data: object) => {
  const res = await AuthPorts.post("/register", data);
  return res.data.mensaje
}

/* VALIDE TOKEN */
export const ValidateToken = async () => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("no hay token");

  const res = await AuthPorts.get("/dashboard", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};
