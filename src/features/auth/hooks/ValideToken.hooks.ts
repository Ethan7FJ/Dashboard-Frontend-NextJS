import { AuthPorts } from "@/lib/auth.services";
import { useQuery } from "@tanstack/react-query";
import { ValidateToken } from "../services/authService";

export function useValideteToken() {
  return useQuery({
    queryKey: ["validate-token"],
    queryFn: ValidateToken,
    retry: false,
  });
}
