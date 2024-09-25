import { DataProvider } from "@pankod/refine-core";
import axios from "axios";

// Configurar la URL base para la API
const API_URL = "https://www.desarrollotecnologicoar.com/api2";

export const dataProvider: DataProvider = {
    getList: async ({ resource, pagination, sort, filters }) => {
        try {
            const response = await axios.get(`${API_URL}/${resource}`);

            return {
                data: response.data,
                total: response.data.length,
            };
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new Error(`Error al obtener la lista de recursos: ${error.message}`);
            }
            throw new Error("Error desconocido al obtener la lista de recursos.");
        }
    },

    getOne: async ({ resource, id }) => {
        try {
            const response = await axios.get(`${API_URL}/${resource}/${id}`);
            return {
                data: response.data,
            };
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new Error(`Error al obtener el recurso con ID ${id}: ${error.message}`);
            }
            throw new Error("Error desconocido al obtener el recurso.");
        }
    },

    create: async ({ resource, variables }) => {
        console.log(variables);
        try {
            const response = await axios.post(`${API_URL}/${resource}`, variables);
            return {
                data: response.data,
            };
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error("Error al crear el recurso", error);
                throw new Error(`Error al crear el recurso: ${error.message}`);
            }
            throw new Error("Error desconocido al crear el recurso.");
        }
    },

    update: async ({ resource, id, variables }) => {
        try {
            const response = await axios.put(`${API_URL}/${resource}/${id}`, variables);
            return {
                data: response.data,
            };
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new Error(`Error al actualizar el recurso con ID ${id}: ${error.message}`);
            }
            throw new Error("Error desconocido al actualizar el recurso.");
        }
    },

    deleteOne: async ({ resource, id }) => {
        try {
            const response = await axios.delete(`${API_URL}/${resource}/${id}`);
            return {
                data: response.data,
            };
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new Error(`Error al eliminar el recurso con ID ${id}: ${error.message}`);
            }
            throw new Error("Error desconocido al eliminar el recurso.");
        }
    },

    getApiUrl: () => API_URL,
};