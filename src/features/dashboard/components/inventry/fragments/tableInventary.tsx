"use client";

import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@heroui/react";
import { showProducts } from "@/features/dashboard/hooks/inventary.hooks";

export function TableInventary() {

    const { data: productos, isLoading, isError, error } = showProducts();

    if (isLoading) return <p>Cargando productos ... </p>
    if (isError) return <p>Error: {error.message}</p>

    return (
        <Table aria-label="Example static collection table">
            <TableHeader>
                <TableColumn>CODIGO</TableColumn>
                <TableColumn>MARCA</TableColumn>
                <TableColumn>MODELO</TableColumn>
            </TableHeader>
            <TableBody items={productos ?? []}>
                {(item) => (
                    <TableRow key={item.id}>
                        <TableCell>{item.codigo}</TableCell>
                        <TableCell>{item.marca}</TableCell>
                        <TableCell>{item.modelo}</TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
}