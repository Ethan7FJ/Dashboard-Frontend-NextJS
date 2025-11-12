"use client";

import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, Spinner } from "@heroui/react";
import { showProducts } from "@/features/dashboard/hooks/inventary.hooks";
import React from "react";

export function TableInventary() {

    const [page, setPage] = React.useState(1);

    const { data: productos, isLoading, isError, error } = showProducts();

    const rowsView = 2;

    const pages = React.useMemo(() => {
        return productos ? Math.ceil(productos?.length / rowsView) : 0;
    }, [productos, rowsView])

    const pageItem = React.useMemo(() => {
        if (!productos) return [];
        const start = (page - 1) * rowsView;
        const end = start + rowsView;
        return productos.slice(start, end);
    }, [productos, page, rowsView])

    const loadState = isLoading || productos?.length === 0 ? "loading" : "idle"

    if (isLoading) return <p>Cargando productos ... </p>
    if (isError) return <p>Error: {error.message}</p>

    return (
        <div className="overflow-x-auto">
            <Table
                aria-label="Example static collection table"
                className="w-80 sm:w-100 md:w-150 lg:w-200 xl:w-250 2xl:w-300 border-collapse"
                bottomContent={
                    pages > 0 ? (
                        <div className="flex w-full justify-center items-center">
                            <Pagination
                                isCompact
                                showControls
                                showShadow
                                color="secondary"
                                page={page}
                                total={pages}
                                onChange={(page) => setPage(page)}
                            />
                        </div>
                    ) : null
                }
            >
                <TableHeader>
                    <TableColumn>CODIGO</TableColumn>
                    <TableColumn>MARCA</TableColumn>
                    <TableColumn>MODELO</TableColumn>
                    <TableColumn className="hidden sm:table-cell">DESCRIPCION</TableColumn>
                    <TableColumn>CATEGORIA</TableColumn>
                    <TableColumn className="hidden sm:table-cell">UBICACION</TableColumn>
                    <TableColumn className="hidden sm:table-cell">CANTIDAD ALMACENADA</TableColumn>
                    <TableColumn className="hidden sm:table-cell">UNIDAD DE MEDIDA</TableColumn>
                    <TableColumn>PRECIO</TableColumn>
                    <TableColumn>PROVEEDOR</TableColumn>
                    <TableColumn>ESTADO</TableColumn>
                    <TableColumn className="hidden sm:table-cell">FECHA DE INGRESO</TableColumn>
                    <TableColumn className="hidden sm:table-cell">USUARIO RESPONSABLE</TableColumn>
                </TableHeader>
                <TableBody
                    items={pageItem ?? []}
                    loadingContent={<Spinner />}
                    loadingState={loadState}
                >
                    {(item) => (
                        <TableRow key={item.id}>
                            <TableCell>{item.codigo}</TableCell>
                            <TableCell>{item.marca}</TableCell>
                            <TableCell>{item.modelo}</TableCell>
                            <TableCell className="hidden sm:table-cell">{item.descripcion}</TableCell>
                            <TableCell>{item.categoria}</TableCell>
                            <TableCell className="hidden sm:table-cell">{item.ubicacion}</TableCell>
                            <TableCell className="text-center hidden sm:table-cell">{item.cantidad_almacenado}</TableCell>
                            <TableCell className="text-center hidden sm:table-cell">{item.unidad_medida}</TableCell>
                            <TableCell>{item.precio}</TableCell>
                            <TableCell>{item.proveedor}</TableCell>
                            <TableCell>{item.tipo_estado}</TableCell>
                            <TableCell className="hidden sm:table-cell">{new Date(item.fecha_ingreso).toLocaleDateString("es-CO", { year: "numeric", month: "long", day: "numeric" })}</TableCell>
                            <TableCell className="hidden sm:table-cell">{item.nombre}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}