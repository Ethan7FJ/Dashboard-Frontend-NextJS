import { AuthPorts } from "@/lib/auth.services";
import { useQuery } from "@tanstack/react-query";

const ValidateToken = async () =>{
    const token = localStorage.getItem("token");
    if(!token) throw new Error("no hay token")

    const res = await AuthPorts.get("/dashboard",{
        headers:{
            Authorization: `Bearer ${token}`
        },
    })

    return res.data
} 


export function useValideteToken(){
    return useQuery({
        queryKey: ["validate-token"],
        queryFn: ValidateToken,
        retry: false
    })
}