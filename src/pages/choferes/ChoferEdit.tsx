import React from "react";
import { Edit, Form, Input, useForm } from "@pankod/refine-antd";

export const ChoferEdit: React.FC = () => {
    const { formProps, saveButtonProps } = useForm();

    return (
        <Edit saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item label="Nombre" name="nombre" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Licencia" name="licencia" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Teléfono" name="telefono" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
            </Form>
        </Edit>
    );
};