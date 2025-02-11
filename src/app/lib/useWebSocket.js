'use client'
import { useState, useEffect } from "react"

export function useWebSocket(identifier) {
    const [status, setStatus] = useState(null)
    useEffect(() => {
        const socket = new WebSocket(`wss://payments.pre-bnvo.com/ws/${identifier}`)
        socket.onmessage = (event) => {
            const data = JSON.parse(event.data)
            setStatus(data.status)
        }
        return () => {
            socket.close()
        }
    }, [identifier])
}