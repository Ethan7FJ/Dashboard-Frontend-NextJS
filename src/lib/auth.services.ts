import axios from "axios";

export const AuthPorts = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_AUTH_PORT,
})