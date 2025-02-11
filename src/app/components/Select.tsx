import { useEffect, useState } from "react";
import { CgSearch } from "react-icons/cg";
import { IoIosArrowDown, IoIosArrowForward, IoMdClose } from "react-icons/io";
import { IoCheckmarkCircle } from "react-icons/io5";
import { CurrencyDTO } from "../types";



interface SelectProps {
    onCurrencySelect: (currency: CurrencyDTO) => void
}
export const Select = ({ onCurrencySelect }: SelectProps) => {
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