import { API_URL, DEVICE_ID } from '../utils/const.ts'

async function fetchFromBitnovo(endpoint, options = {}) {
    const url = `${API_URL}${endpoint}`
    const headers = {
        'X-Device-Id': DEVICE_ID,
        'Content-Type': 'application/json',
        ...options.headers
    }
    const response = await fetch(url, { ...options, headers })
    if (!response.ok) {
        throw new Error(response.statusText)
    }
    return await response.json()
}


export async function getCurrencies() {
    return await fetchFromBitnovo('/api/v1/currencies')
}