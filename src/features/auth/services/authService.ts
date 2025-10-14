import { AuthPorts } from "@/lib/auth.services";
import { useMutation } from "@tanstack/react-query";

const AuthRegister = async (data: any) => {
  const res = await AuthPorts.post("/register", data);
  return res.data.mensaje
}

export function useCreateUser() {
  return useMutation({
    mutationFn: AuthRegister
  })
}
