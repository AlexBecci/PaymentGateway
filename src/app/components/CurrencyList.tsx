'use client';

import { useEffect, useState } from "react"
import { API_URL, DEVICE_ID } from "../utils/const";
import axios from "axios";

interface Currency {
    // Ajusta los campos de la moneda según los datos que devuelvas desde `getCurrencies`
    id: string;
    name: string;
    symbol: string;
    // ... otros campos que puedas tener
}
const CurrencyList = () => {
    const [currencies, setCurrencies] = useState<Currency[] | null>(null)
    const [error, setError] = useState<string | null>(null)

    const fetchData = async () => {
        try {
            const response = await axios.get('/api/currencies');
            console.log(response.data);
            setCurrencies(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    /*     const fetchCurrencies = async () => {
            if (DEVICE_ID === undefined)
                throw new Error("Device ID is not defined")
            try {
                const response = await fetch(`${API_URL}/api/v1/currencies`, {
                    credentials: 'include' as RequestCredentials, headers: {
                        'X-Device-Id': DEVICE_ID,
                        'Access-Control-Allow-Origin': '*', // Esto es necesario para que funcione en desarrollo
                        'Content-Type': 'application/json',
                    },
                    mode: 'cors' as RequestMode
                }) // Llamamos a la API que creaste en el backend
                console.log('RESPONSEEE---->', response)
                if (!response.ok) {
                    throw new Error('Error fetching currencies')
                }
                const data: Currency[] = await response.json() // Definimos el tipo de respuesta
                setCurrencies(data)
            } catch (error) {
                console.log('ERROOOOORRR', error)
                setError(error instanceof Error ? error.message : 'Something went wrong')
            }
        } */
    /*     const axiosCurrencies = async () => {
            if (DEVICE_ID === undefined)
                throw new Error("Device ID is not defined");
    
            try {
                // Hacemos la solicitud con axios
                const response = await axios.get(`${API_URL}/api/v1/currencies`, {
                    headers: {
                        'X-Device-Id': DEVICE_ID,
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true, // Similar a 'credentials: 'include'' en fetch
    
                });
    
                console.log('RESPONSEEE---->', response);
    
                // Asumimos que la respuesta viene en 'data' (conforme al formato de Axios)
                const data: Currency[] = response.data;
    
                setCurrencies(data);
            } catch (error) {
                console.log('ERROOOOORRR', error);
                setError(error instanceof Error ? error.message : 'Something went wrong');
            }
        }
     */
    useEffect(() => {
        fetchData()
        /* fetchCurrencies() */
        /*  axiosCurrencies() */
    }, []) // Este hook solo se ejecuta una vez cuando el componente se monta

    if (error) {
        return <div>Error: {error}</div>
    }

    if (!currencies) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h2>Monedas Disponibles</h2>
            <ul>
                {currencies.map((currency) => (
                    <li key={currency.id}>
                        {currency.name} ({currency.symbol})
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CurrencyList