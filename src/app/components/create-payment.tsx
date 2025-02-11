'use client'

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CgSearch } from "react-icons/cg";
import { IoIosArrowDown, IoIosArrowForward, IoMdClose } from "react-icons/io";
import { IoCheckmarkCircle } from "react-icons/io5";
import { SlArrowRight } from "react-icons/sl";
import { PaymentSummary } from "./payment-summary";
import { Button } from './Button'
import { Select } from "./Select";
import { CurrencyDTO } from "../types";

interface DataDTO {
    importe: number;
    criptodivisa: string;
    concepto: string
}
export const CreatePayment = () => {
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
        <div className=" w-full max-w-6xl text-black flex  items-center justify-center p-4">
            {!secondTemplate ? (
                <div className="w-full max-w-6xl bg-white shadow-lg  rounded-lg  p-8">
                    <h1 className="text-xl text-center font-semibold text-gray-900 mb-6">Crear pago</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-full">
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