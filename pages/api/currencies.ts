import { Request, Response } from "express";
import { API_URL, DEVICE_ID } from "../../src/app/utils/const";
import axios from 'axios';

export default async function handler(req: Request, res: Response) {
    try {
        const response = await axios.get(`${API_URL}/currencies`, {
            withCredentials: true, headers: {
                'X-Device-Id': DEVICE_ID,
                'Content-Type': 'application/json',
            }
        });
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener datos' });
    }
}