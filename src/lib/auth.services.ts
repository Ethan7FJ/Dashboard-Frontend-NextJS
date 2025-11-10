import axios from "axios";
import { config } from "dotenv";

export const AuthPorts = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_AUTH_PORT,
})


export const InventaryPorts = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_INVENTARY_PORT,
})

InventaryPorts.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
})