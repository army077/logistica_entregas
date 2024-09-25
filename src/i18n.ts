import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    lng: "es", // Idioma por defecto
    resources: {
        es: {
            translation: {
                resources: {
                    choferes: {
                        name: "Chofer",
                        name_plural: "Choferes",
                    },
                    vehiculos: {
                        name: "Vehículo",
                        name_plural: "Vehículos",
                    },
                },
            },
        },
    },
});

export default i18n;