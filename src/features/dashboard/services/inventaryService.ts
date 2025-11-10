import { InventaryPorts } from "@/lib/auth.services";
import { AxiosError } from "axios";
import { ProductsTypes } from "../types/inventary";

export const ProductsList = async (): Promise<ProductsTypes[]> => {
    try {

        const token = localStorage.getItem("token")

        const res = await InventaryPorts.get<{ productos: ProductsTypes[] }>('/productos');
        return res.data.productos;
    } catch (err) {
        const error = err as AxiosError<{ error?: string }>;
        console.error("Error en AuthLogin:", error.response?.data || error.message);
        throw err;
    }
}