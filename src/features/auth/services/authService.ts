import { AuthPorts } from "@/lib/auth.services";
import { useMutation } from "@tanstack/react-query";

const AuthLogin = async (data: any) => {
  try {
    const res = await AuthPorts.post("/login", data);
    return res.data;
  } catch (err: any) {
    console.error("Error en AuthLogin:", err.response?.data || err.message);
    throw err;
  }
}

export function useLoginUser() {
  return useMutation({
    mutationFn: AuthLogin,
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
    },
    onError: (err: any) => {
      alert(err.response?.data?.error || "Error al iniciar session")
    }
  })
}


/* REGISTER */
const AuthRegister = async (data: any) => {
  const res = await AuthPorts.post("/register", data);
  return res.data.mensaje
}

export function useCreateUser() {
  return useMutation({
    mutationFn: AuthRegister
  })
}
