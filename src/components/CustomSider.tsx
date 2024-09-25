import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { useRouterContext } from "@pankod/refine-core";
import {
    DashboardOutlined,
    UserOutlined,
    ToolOutlined,
    ShopOutlined,
    BranchesOutlined,
    SettingOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

export const CustomSider: React.FC = () => {
    const { Link } = useRouterContext();
    const [collapsed, setCollapsed] = useState(false); // Controlar si está colapsado

    return (
        <Sider
            collapsible
            collapsed={collapsed}
            breakpoint="md" // Colapsar automáticamente en pantallas medianas y pequeñas
            collapsedWidth={80} // Ajusta el ancho cuando está colapsado
            onBreakpoint={(broken) => setCollapsed(broken)} // Se activa cuando la pantalla es menor que 'md'
        >
            <div style={{ padding: "16px", textAlign: "center", color: "#fff" }}>
                <img
                    src="/AR LOGO.png"
                    alt="Logo"
                    style={{ width: collapsed ? "40px" : "100%", marginBottom: "16px" }} // Ajusta el tamaño del logo según el estado del colapso
                />
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<DashboardOutlined />}>
                    <Link to="/">Dashboard</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<UserOutlined />}>
                    <Link to="/entregas">Entregas</Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<ToolOutlined />}>
                    <Link to="/vehiculos">Vehiculos</Link>
                </Menu.Item>
                <Menu.Item key="4" icon={<ToolOutlined />}>
                    <Link to="/choferes">Choferes</Link>
                </Menu.Item>
            </Menu>
        </Sider>
    );
};