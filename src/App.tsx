import React from "react";
import { Refine } from "@pankod/refine-core";
import { notificationProvider, Layout } from "@pankod/refine-antd";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { dataProvider } from "./dataProvider";
import routerProvider from "@pankod/refine-react-router-v6";
import { EntregaList } from "./pages/EntregaList";
import { EntregaEdit } from "./pages/EntregaEdit";
import { EntregaCreate } from "./pages/EntregaCreate";
import { CustomSider } from "./components/CustomSider";
import { VehiculoCreate } from "./pages/vehiculos/VehículoCreate";
import { VehiculoEdit } from "./pages/vehiculos/VehículoEdit";
import { VehiculoList } from "./pages/vehiculos/VehículoList";
import { ChoferCreate } from "./pages/choferes/ChoferCreate";
import { ChoferEdit } from "./pages/choferes/ChoferEdit";
import { ChoferList } from "./pages/choferes/ChoferList";

import "./i18n"; // Importar la configuración de i18n

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/*"
                    element={
                        <Refine
                            dataProvider={dataProvider}
                            notificationProvider={notificationProvider}
                            Layout={Layout}
                            Sider={CustomSider} // Incluye el Sider personalizado
                            routerProvider={routerProvider} // Incluyendo el routerProvider aquí
                            resources={[
                                {
                                    name: "entregas",
                                    list: EntregaList,
                                    create: EntregaCreate,
                                    edit: EntregaEdit,
                                },
                                {
                                    name: "vehiculos",
                                    list: VehiculoList,
                                    create: VehiculoCreate,
                                    edit: VehiculoEdit,
                                },
                                {
                                    name: "choferes",
                                    list: ChoferList,
                                    create: ChoferCreate,
                                    edit: ChoferEdit,
                                },
                            ]}
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;