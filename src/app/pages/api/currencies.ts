import { NextApiRequest, NextApiResponse } from 'next'
import { getCurrencies } from "../../lib/api"

interface Currency {
    // Ajusta los campos de la moneda según los datos que devuelvas desde `getCurrencies`
    id: string;
    name: string;
    symbol: string;
    // ... otros campos que puedas tener
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        try {
            // Obtenemos las monedas disponibles, con el tipo adecuado
            const currencies: Currency[] = await getCurrencies()

            // Respondemos con los datos de las monedas y el código 200 (OK)
            res.status(200).json(currencies)
        } catch (error: any) {
            // En caso de error, respondemos con el código 500 (Internal Server Error) y el mensaje de error
            res.status(500).json({ error: error.message })
        }
    } else {
        // Si el método no es GET, respondemos con un código 405 (Method Not Allowed)
        res.setHeader("Allow", ["GET"])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}