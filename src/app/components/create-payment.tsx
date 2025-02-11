'use client'

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CgSearch } from "react-icons/cg";
import { IoIosArrowDown, IoIosArrowForward, IoMdClose } from "react-icons/io";
import { IoCheckmarkCircle } from "react-icons/io5";
import { SlArrowRight } from "react-icons/sl";
import { PaymentSummary } from "./payment-summary";


interface DataDTO {
    importe: number;
    criptodivisa: string;
    concepto: string
}
export const PaymentForm = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm<DataDTO>({ mode: 'onChange' });
    const [isEnabled, setIsEnabled] = useState<boolean>(false)
    const onSubmit = (data: DataDTO) => {
        alert('Enviando datos' + JSON.stringify(data))
        setSecondTemplate(true)
    }
    const [secondTemplate, setSecondTemplate] = useState<boolean>(false)
    const [selectedCurrency, setSelectedCurrency] = useState<CurrencyDTO>()

    const [minAmount, setMinAmount] = useState<number>(0)
    const [maxAmount, setMaxAmount] = useState<number>(0)

    const importe = watch('importe')
    const concepto = watch('concepto')

    useEffect(() => {
        console.log(importe, concepto)
        if (importe && concepto) {
            setIsEnabled(true)
            return
        }
    }, [importe, , concepto])

    useEffect(() => {
        console.log(selectedCurrency)
        if (selectedCurrency === undefined) return
        // Verificar si el importe está dentro del rango permitido
        setMinAmount(parseFloat(selectedCurrency.min_amount));
        setMaxAmount(parseFloat(selectedCurrency.max_amount));
    }, [selectedCurrency])

    return (
        <div className="min-h-screen  shadow-2xl text-black flex items-center justify-center p-4">
            {!secondTemplate ? (
                <div className="w-full max-w-md bg-white rounded-lg shadow-sm p-8">
                    <h1 className="text-xl text-center font-semibold text-gray-900 mb-6">Crear pago</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="space-y-2">
                            <label className="block text-sm text-[#002859] font-semibold">Importe a pagar</label>
                            <input
                                {...register("importe", {
                                    required: "El importe es obligatorio",
                                    valueAsNumber: true,
                                    validate: (value) =>
                                        value >= minAmount && value <= maxAmount ||
                                        `El importe debe estar entre ${minAmount} y ${maxAmount}`,
                                })}
                                type="number"
                                placeholder="Añade importe a pagar"
                                className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            {errors.importe && <p className="text-red-500 text-xs">{errors.importe.message}</p>}
                        </div>
                        {/* Custom dropdown para seleccionar la moneda */}
                        <Select onCurrencySelect={setSelectedCurrency} />
                        <div className="space-y-2">
                            <label className="block text-sm text-[#002859] font-semibold">Concepto</label>
                            <input
                                {...register("concepto", {
                                    required: "El concepto es obligatorio",
                                    minLength: { value: 5, message: "El concepto debe tener al menos 5 caracteres" },
                                })}
                                type="text"
                                placeholder="Añade descripción del pago"
                                className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            {errors.concepto && <p className="text-red-500 text-xs">{errors.concepto.message}</p>}
                        </div>
                        <Button state={isEnabled} />
                    </form>
                </div>
            ) : (
                <PaymentSummary />
            )}
        </div>
    )
}


interface CurrencyDTO {
    symbol: string;
    name: string;
    min_amount: string;
    max_amount: string;
    image: string;
    blockchain: string;
}

interface SelectProps {
    onCurrencySelect: (currency: CurrencyDTO) => void
}
const Select = ({ onCurrencySelect }: SelectProps) => {
    const data: CurrencyDTO[] = [
        {
            "symbol": "BCH_TEST",
            "name": "Bitcoin Cash Test BCH",
            "min_amount": "0.05",
            "max_amount": "20000.00",
            "image": "https://payments.pre-bnvo.com/media/crytocurrencies/CryptoBCH_Size36_px_TT7Td9Q.png",
            "blockchain": "BCH_TEST"
        },
        {
            "symbol": "BTC_TEST",
            "name": "Bitcoin Test BTC",
            "min_amount": "0.01",
            "max_amount": "10000.00",
            "image": "https://payments.pre-bnvo.com/media/crytocurrencies/CurrencyBTC_Size36_px_StrokeON.png",
            "blockchain": "BTC_TEST"
        },
        {
            "symbol": "ETH_TEST5",
            "name": "Ethereum Sepolia ETH",
            "min_amount": "0.05",
            "max_amount": "20000.00",
            "image": "https://payments.pre-bnvo.com/media/crytocurrencies/CurrencyETH_Size36_px_StrokeON.png",
            "blockchain": "ETH_TEST5"
        },
        {
            "symbol": "AMOY_POLYGON_TEST",
            "name": "Polygon Amoi POL",
            "min_amount": "0.01",
            "max_amount": "20000.00",
            "image": "https://payments.pre-bnvo.com/media/crytocurrencies/NetworkPolygon-matic_StrokeON_Size36_px_J0ArarN.png",
            "blockchain": "AMOY_POLYGON_TEST"
        },
        {
            "symbol": "XRP_TEST",
            "name": "Ripple Test XRP",
            "min_amount": "0.01",
            "max_amount": "20000.00",
            "image": "https://payments.pre-bnvo.com/media/crytocurrencies/CurrencyXRP_Size36_px_StrokeON.png",
            "blockchain": "XRP_TEST"
        }
    ]
    const [selectedCurrency, setSelectedCurrency] = useState(data[0]); // Selecciona la primera por defecto
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

    const [searchQuery, setSearchQuery] = useState<string>("")

    const filteredData = data.filter(
        (currency) =>
            currency.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            currency.symbol.toLowerCase().includes(searchQuery.toLowerCase()),
    )

    const handleCurrencySelect = (currency: CurrencyDTO) => {
        setSelectedCurrency(currency);
        onCurrencySelect(currency);  // Pasar la moneda seleccionada al componente padre
        setIsModalOpen(false);
    }

    useEffect(() => {
        console.log(selectedCurrency)
        onCurrencySelect(selectedCurrency)
    }, [])

    return (
        <>
            <div className="space-y-2">
                <label className="block text-sm text-[#002859] font-semibold">Seleccionar moneda</label>
                <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="w-full flex items-center px-3 py-2 border border-gray-200 rounded-md text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                    <img
                        src={selectedCurrency.image || "/placeholder.svg"}
                        alt={selectedCurrency.name}
                        className="w-5 h-5 mr-2"
                    />
                    {selectedCurrency.name}
                    <IoIosArrowDown className="ml-auto" />
                </button>
            </div>


            {isModalOpen && (
                <div className="min-h-screen fixed inset-0 bg-gray-50 shadow-2xl text-[#002859] flex items-center justify-center p-4">
                    <div className="w-full max-w-md bg-white rounded-lg shadow-sm p-2">
                        <div className="p-4  border-gray-100 flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-[#002859]">Seleccionar criptomoneda</h2>
                            <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-500">
                                <IoMdClose className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="p-4  border-gray-100">
                            <div className="relative">
                                <CgSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#647184]" />
                                <input
                                    type="text"
                                    placeholder="Buscar"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-[#647184] focus:border-transparent"
                                />
                            </div>
                        </div>

                        <div className="max-h-[300px] overflow-y-auto">
                            {filteredData.map((currency) => (
                                <button
                                    key={currency.symbol}
                                    onClick={() => handleCurrencySelect(currency)}
                                    className="w-full flex items-center px-4 py-3 hover:bg-gray-50 transition-colors"
                                >
                                    <img src={currency.image || "/placeholder.svg"} alt={currency.name} className="w-6 h-6 mr-3" />
                                    <div className="flex flex-col items-start">
                                        <span className="font-medium text-sm text-gray-900">{currency.name}</span>
                                        <span className="text-xs text-gray-500">{currency.symbol}</span>
                                    </div>
                                    {selectedCurrency.symbol === currency.symbol ? (
                                        <IoCheckmarkCircle className="ml-auto text-blue-500" size={20} />
                                    ) : (
                                        <IoIosArrowForward className="ml-auto text-[#647184]" size={16} />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

interface ButtonProps {
    state: boolean
}
const Button = ({ state }: ButtonProps) => {
    return (
        <button
            type="submit"
            className={`w-full text-white transition-all duration-300   py-2.5 rounded-md text-sm font-medium   ${!state ? ' bg-[#C6DFFE] hover:bg-blue-200' : 'bg-[#035AC5]'}`}
        >
            Continuar
        </button>
    )
}

/* 
  {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg w-full max-w-md shadow-xl">
                        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-gray-900">Seleccionar criptomoneda</h2>
                            <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-500">
                                <IoMdClose className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="p-4 border-b border-gray-100">
                            <div className="relative">
                                <CgSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Buscar"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        <div className="max-h-[400px] overflow-y-auto">
                            {filteredData.map((currency) => (
                                <button
                                    key={currency.symbol}
                                    onClick={() => {
                                        setSelectedCurrency(currency)
                                        setIsModalOpen(false)
                                    }}
                                    className="w-full flex items-center px-4 py-3 hover:bg-gray-50 transition-colors"
                                >
                                    <img src={currency.image || "/placeholder.svg"} alt={currency.name} className="w-6 h-6 mr-3" />
                                    <div className="flex flex-col items-start">
                                        <span className="font-medium text-gray-900">{currency.name}</span>
                                        <span className="text-sm text-gray-500">{currency.symbol}</span>
                                    </div>
                                    {selectedCurrency.symbol === currency.symbol && (
                                        <div className="ml-auto w-2 h-2 rounded-full bg-blue-500" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )} 
              */