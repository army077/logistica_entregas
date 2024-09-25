import React from "react";
import { Create, Form, Input, useForm } from "@pankod/refine-antd";

export const VehiculoCreate: React.FC = () => {
    const { formProps, saveButtonProps } = useForm();

    return (
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item label="Marca" name="marca" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Modelo" name="modelo" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Placas" name="placa" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Tipo de Vehiculo" name="tipo_vehiculo" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Año" name="anio" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
            </Form>
        </Create>
    );
};