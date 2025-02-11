import axios from "axios"
import { API_URL, DEVICE_ID } from "./const"

export const fetchAvailableCurrencies = async () => {

    try {
        if (!DEVICE_ID) {
            throw new Error("Device ID is not defined");
        }
        const response = await fetch(`${API_URL}/api/v1/currencies`, {
            method: 'GET',
            headers: {
                'X-Device-Id': DEVICE_ID
            }
        });

        // Verificar si la respuesta es exitosa (código 200)
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error al obtener las monedas disponibles:", error);
        throw error;
    }
}

export const createDevice = async (name: string) => {
    try {
        const response = await axios.post(`${API_URL}/api/v1/payment`, {
            name
        }, {
            headers: {
                'X-Device-Id': DEVICE_ID
            },
            method: 'POST'
        })
        console.log(response.data)
        return response.data
    } catch (error) {
        console.error("Error al crear el pago:", error);
        throw error;
    }
}

/*    try {
       const response = await axios.get(`${API_URL}/api/v1/currencies`, {
           headers: {
               'X-Device-Id': DEVICE_ID
           },
           method: 'GET'
 
       })
       console.log(response.data)
       return response.data
   } catch (error) {
       console.error("Error al obtener las monedas disponibles:", error);
       throw error;
   } */