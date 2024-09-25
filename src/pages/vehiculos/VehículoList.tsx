import React from "react";
import { List, Table, useTable, EditButton, DeleteButton } from "@pankod/refine-antd";

export const VehiculoList: React.FC = () => {
    const { tableProps } = useTable();

    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column title="Marca" dataIndex="marca" />
                <Table.Column title="Modelo" dataIndex="modelo" />
                <Table.Column title="Placas" dataIndex="placa" />
                <Table.Column title="Tipo de Vehículo" dataIndex="tipo_vehiculo" />
                <Table.Column title="Año" dataIndex="anio" />
                <Table.Column
                    title="Acciones"
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