import React from "react";
import { Edit, Form, Input, useForm } from "@pankod/refine-antd";

export const VehiculoEdit: React.FC = () => {
    const { formProps, saveButtonProps } = useForm();

    return (
        <Edit saveButtonProps={saveButtonProps}>
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
                <Form.Item label="Tipo de Vehículo" name="tipo_vehiculo" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Año" name="anio" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
            </Form>
        </Edit>
    );
};