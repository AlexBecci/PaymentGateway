import { DEVICE_ID } from '@/app/utils/const';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (!DEVICE_ID) return res.status(400).json({ message: 'Device ID is not defined' });

        const response = await fetch(`http://payments.pre-bnvo.com/api/v1/currencies`, {
            headers: {
                'X-Device-Id': DEVICE_ID,
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        });
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching data' });
    }
}