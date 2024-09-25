import React from "react";
import { Create, Form, Input, InputNumber, DatePicker, useForm, Select, Switch } from "@pankod/refine-antd";

export const EntregaCreate: React.FC = () => {
    const { formProps } = useForm();

    return (
        <Create>
            <Form {...formProps} layout="vertical">
                <Form.Item label="Vehículo" name="vehiculo_id" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Chofer" name="chofer_id" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Proveedor Logístico" name="proveedor_logistico">
                    <Input />
                </Form.Item>
                <Form.Item label="Origen" name="origen" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Destino" name="destino" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Fecha Inicio" name="fecha_inicio" rules={[{ required: true }]}>
                    <DatePicker />
                </Form.Item>
                <Form.Item label="Fecha Fin" name="fecha_fin">
                    <DatePicker />
                </Form.Item>
                <Form.Item label="Pedido" name="pedido">
                    <Input />
                </Form.Item>
                <Form.Item label="Modelo de Máquina" name="modelo_maquina">
                    <Input />
                </Form.Item>
                <Form.Item label="Relacionado a otra entrega" name="relacionado_otra_entrega" valuePropName="checked">
                    <Switch />
                </Form.Item>
                <Form.Item label="Kilometraje Inicial" name="kilometraje_inicial" rules={[{ required: true }]}>
                    <InputNumber min={0} />
                </Form.Item>
                <Form.Item label="Kilometraje Final" name="kilometraje_final">
                    <InputNumber min={0} />
                </Form.Item>
                <Form.Item label="Combustible" name="combustible">
                    <InputNumber min={0} />
                </Form.Item>
                <Form.Item label="Casetas" name="casetas">
                    <InputNumber min={0} />
                </Form.Item>
                <Form.Item label="Hotel" name="hotel">
                    <InputNumber min={0} />
                </Form.Item>
                <Form.Item label="Comida" name="comida">
                    <InputNumber min={0} />
                </Form.Item>
                <Form.Item label="Bebidas/Frituras" name="bebidas_frituras">
                    <InputNumber min={0} />
                </Form.Item>
                <Form.Item label="Otros Gastos" name="otros_gastos">
                    <InputNumber min={0} />
                </Form.Item>
                <Form.Item label="Bonos Pagados" name="bonos_pagados">
                    <InputNumber min={0} />
                </Form.Item>
                <Form.Item label="Logísticos Pagados por Cliente" name="logisticos_pagados_cliente">
                    <InputNumber min={0} />
                </Form.Item>
            </Form>
        </Create>
    );
};