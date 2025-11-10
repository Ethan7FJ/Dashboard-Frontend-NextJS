import { AuthLogin, AuthRegister } from "../services/authService";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

export function useLoginUser() {
  return useMutation({
    mutationFn: AuthLogin,
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
    },
    onError: (err) => {
      const error = err as AxiosError<{ error?: string }>;
      alert(error.response?.data?.error || "Error al iniciar session")
    }
  })
}

export function useCreateUser() {
  return useMutation({
    mutationFn: AuthRegister
  })
}