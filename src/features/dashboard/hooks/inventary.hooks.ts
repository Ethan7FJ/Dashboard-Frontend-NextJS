import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { DeleteProduct, ProductsList } from "../services/inventaryService";
import { ProductsTypes } from "../types/inventary";

export const showProducts = () => {
    return useQuery<ProductsTypes[], Error>({
        queryKey: ["productos"],
        queryFn: ProductsList
    })
}

export function DeleteProductID() {

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: number) => DeleteProduct(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["productos"] });
        }
    })
}
