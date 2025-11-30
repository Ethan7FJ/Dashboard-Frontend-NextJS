"use client";

import { DeleteProductID } from "@/features/dashboard/hooks/inventary.hooks";
import { ButtonType } from "../types/ButtonType";

export function ButtonActions({ title, id, action }: ButtonType) {

  const deleteMutation = DeleteProductID();

  async function handleClick() {
    if (action === "Eliminar") {
      const data: { id: number } = {
        id: id as number,
      }
      deleteMutation.mutate(data.id);
    }
  }

  return (
    <div className="flex gap-2" >
      <button className="bg-gray-800 transform transition duration-200 cursor-pointer hover:bg-gray-600 active:bg-gray-600 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>
        {title}
      </button>
    </div>
  )
}
