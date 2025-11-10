import { useQuery } from "@tanstack/react-query";
import { ProductsList } from "../services/inventaryService";
import { ProductsTypes } from "../types/inventary";

export const showProducts = () => {
    return useQuery<ProductsTypes[], Error>({
        queryKey: ["productos"],
        queryFn: ProductsList
    })
}