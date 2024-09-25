import React from "react";
import { useTable, List, Table, EditButton, DeleteButton } from "@pankod/refine-antd";

export const EntregaList: React.FC = () => {
    const { tableProps } = useTable();

    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column title="Vehículo" dataIndex="vehiculo_id" />
                <Table.Column title="Chofer" dataIndex="chofer_id" />
                <Table.Column title="Proveedor Logístico" dataIndex="proveedor_logistico" />
                <Table.Column title="Pedido" dataIndex="pedido" />
                <Table.Column title="Destino" dataIndex="destino" />
                <Table.Column title="Kilometraje Inicial" dataIndex="kilometraje_inicial" />
                <Table.Column title="Kilometraje Final" dataIndex="kilometraje_final" />
                <Table.Column title="Combustible" dataIndex="combustible" />
                <Table.Column title="Casetas" dataIndex="casetas" />
                <Table.Column title="Hotel" dataIndex="hotel" />
                <Table.Column title="Comida" dataIndex="comida" />
                <Table.Column title="Otros Gastos" dataIndex="otros_gastos" />
                <Table.Column title="Bonos Pagados" dataIndex="bonos_pagados" />
                <Table.Column title="Logísticos Pagados por Cliente" dataIndex="logisticos_pagados_cliente" />

                <Table.Column
                    title="Acciones"
                    dataIndex="actions"
                    render={(_, record) => (
                        <>
                            <EditButton recordItemId={record.id} />
                            <DeleteButton recordItemId={record.id} />
                        </>
                    )}
                />
            </Table>
        </List>
    );
};