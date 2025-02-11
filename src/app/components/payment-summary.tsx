import { useState } from "react";

export const PaymentSummary = ({ }) => {

    /* return (
        <div className="min-h-screen p-8 text-[#002859]">
            <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-4 ">
                    <div className="p-2 h-full">
                        <h2 className="text-base font-semibold ">Resumen del pedido</h2>
                        <div className="space-y-4 p-8 bg-[#F9FAFC] rounded-lg shadow-sm ">
                            <div className="flex justify-between  ">
                                <span className="">Importe:</span>
                                <span className="font-medium ">56,06 EUR</span>
                            </div>
                            <Line />
                            <div className="flex justify-between  ">
                                <span className="">Moneda seleccionada:</span>
                                <div className="flex items-center">
                                    <div className="w-5 h-5  rounded-full mr-2">
                                        <img alt="IMAGE" src="https://payments.pre-bnvo.com/media/crytocurrencies/CryptoBCH_Size36_px_TT7Td9Q.png" />
                                    </div>
                                    <span>XRP</span>
                                </div>
                            </div>
                            <Line />
                            <div className="flex justify-between  ">
                                <span className="">Comercio:</span>
                                <div className="flex items-center">
                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.4" d="M11.2499 2.45009C11.9399 1.86009 13.0699 1.86009 13.7699 2.45009L15.3499 3.81009C15.6499 4.07009 16.2099 4.28009 16.6099 4.28009H18.3099C19.3699 4.28009 20.2399 5.15009 20.2399 6.21009V7.91009C20.2399 8.30009 20.4499 8.87009 20.7099 9.17009L22.0699 10.7501C22.6599 11.4401 22.6599 12.5701 22.0699 13.2701L20.7099 14.8501C20.4499 15.1501 20.2399 15.7101 20.2399 16.1101V17.8101C20.2399 18.8701 19.3699 19.7401 18.3099 19.7401H16.6099C16.2199 19.7401 15.6499 19.9501 15.3499 20.2101L13.7699 21.5701C13.0799 22.1601 11.9499 22.1601 11.2499 21.5701L9.66988 20.2101C9.36988 19.9501 8.80988 19.7401 8.40988 19.7401H6.67988C5.61988 19.7401 4.74988 18.8701 4.74988 17.8101V16.1001C4.74988 15.7101 4.53988 15.1501 4.28988 14.8501L2.93988 13.2601C2.35988 12.5701 2.35988 11.4501 2.93988 10.7601L4.28988 9.17009C4.53988 8.87009 4.74988 8.31009 4.74988 7.92009V6.20009C4.74988 5.14009 5.61988 4.27009 6.67988 4.27009H8.40988C8.79988 4.27009 9.36988 4.06009 9.66988 3.80009L11.2499 2.45009Z" fill="#15BBE0" />
                                        <path d="M11.2901 15.1701C11.0901 15.1701 10.9001 15.0901 10.7601 14.9501L8.34006 12.5301C8.05006 12.2401 8.05006 11.7601 8.34006 11.4701C8.63006 11.1801 9.11006 11.1801 9.40006 11.4701L11.2901 13.3601L15.5901 9.06009C15.8801 8.77009 16.3601 8.77009 16.6501 9.06009C16.9401 9.35009 16.9401 9.83009 16.6501 10.1201L11.8201 14.9501C11.6801 15.0901 11.4901 15.1701 11.2901 15.1701Z" fill="#15BBE0" />
                                    </svg>

                                    <span className="text-sm">Comercio de pruebas de Semega</span>
                                </div>
                            </div>
                            <div className="flex justify-between  ">
                                <span className="">Fecha:</span>
                                <span>21/01/2022 08:52</span>
                            </div>
                            <Line />
                            <div className="flex justify-between  ">
                                <span className="">Concepto:</span>
                                <span>Viajes & Ocio</span>
                            </div>
                        </div>
                    </div>
                    <div className=" h-full">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-base font-semibold ">Realiza el pago</h2>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-xl mb-6">
                            <div className="flex justify-center mb-8 items-center text-gray-500">
                                <svg className="w-5 h-5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                                    <path strokeWidth="2" d="M12 6v6l4 2" />
                                </svg>
                                <span>05:08</span>
                            </div>
                            <div className="flex justify-center gap-4 mb-8">
                                <button className="px-3 py-1 bg-[#035AC5] text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
                                    Smart QR
                                </button>
                                <button className="px-3 py-1 bg-[#F9FAFC] text-[#647184] border border-gray-200 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
                                    Web3
                                </button>
                            </div>
                  
                            <div className="w-32 h-32 mx-auto mb-8 p-4 rounded-xl shadow-xl bg-white">
                                <svg viewBox="0 0 100 100" className="w-full h-full">
                                    <path d="M0,0 h100v100h-100z" fill="white" />
                                    <path d="M10,10 h35v35h-35z M15,15 h25v25h-25z" fill="black" />
                                    <path d="M55,10 h35v35h-35z M60,15 h25v25h-25z" fill="black" />
                                    <path d="M10,55 h35v35h-35z M15,60 h25v25h-25z" fill="black" />
                                    <path d="M55,55 h35v35h-35z" fill="black" />
                                    <path d="M60,60 h25v25h-25z" fill="white" />
                                </svg>
                            </div>

                            <div className="space-y-4 ">
                                <div className="flex justify-center items-center ">
                                    <span className=" text-sm">Enviar : <span className="font-semibold">108,02 XRP</span></span>
                                    <button className=" ml-2 text-blue-600 hover:text-blue-700">
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path
                                                strokeWidth="2"
                                                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <div className="flex justify-center items-center   space-x-2">
                                    <span className=" text-sm break-words">
                                        {code}
                                    </span>
                                    <button className="text-blue-600 hover:text-blue-700">
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path
                                                strokeWidth="2"
                                                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </button>
                                </div>

                                <div className="flex justify-center items-center  ">
                                    <svg className="w-5 h-5 mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.4" d="M21.08 8.58003V15.42C21.08 16.54 20.4799 17.58 19.5099 18.15L13.5699 21.58C12.5999 22.14 11.3999 22.14 10.4199 21.58L4.47992 18.15C3.50992 17.59 2.90991 16.55 2.90991 15.42V8.58003C2.90991 7.46003 3.50992 6.41999 4.47992 5.84999L10.4199 2.42C11.3899 1.86 12.5899 1.86 13.5699 2.42L19.5099 5.84999C20.4799 6.41999 21.08 7.45003 21.08 8.58003Z" fill="#EAB308" />
                                        <path d="M12 10.5C12.41 10.5 12.75 10.84 12.75 11.25L12.75 16.5C12.75 16.91 12.41 17.25 12 17.25C11.59 17.25 11.25 16.91 11.25 16.5L11.25 11.25C11.25 10.84 11.59 10.5 12 10.5Z" fill="#002859" />
                                        <path d="M12 7.00014C12.13 7.00014 12.26 7.03016 12.38 7.08016C12.51 7.13016 12.61 7.20012 12.71 7.29012C12.8 7.39012 12.87 7.50014 12.93 7.62014C12.98 7.74014 13 7.87014 13 8.00014C13 8.26014 12.9 8.52016 12.71 8.71016C12.61 8.80016 12.51 8.87012 12.38 8.92012C12.01 9.08012 11.57 8.99016 11.29 8.71016C11.2 8.61016 11.13 8.51015 11.08 8.38015C11.03 8.26015 11 8.13014 11 8.00014C11 7.87014 11.03 7.74014 11.08 7.62014C11.13 7.50014 11.2 7.39012 11.29 7.29012C11.48 7.10012 11.73 7.00014 12 7.00014Z" fill="#002859" />
                                    </svg>

                                    <span className=" text-sm">Etiqueta de destino: 255716461</span>
                                    <button className=" ml-2 text-blue-600 hover:text-blue-700">
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path
                                                strokeWidth="2"
                                                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) */
    return (
        <div className="min-h-screen text-[#002859]  p-8 flex items-center justify-center">
            <div className="max-w-5xl w-full mx-auto">
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Left Column - Order Summary */}
                    <div className="grid grid-cols-2 col-span-2 gap-6">
                        <h2 className="text-lg font-semibold mb-4">Resumen del pedido</h2>
                        <h2 className="text-lg font-semibold mb-4">Realiza el pago</h2>
                    </div>
                    <OrderSummary />
                    {/* Right Column - Payment Details */}
                    <PaymentDetails />
                </div>
            </div>
        </div>
    );

}

const OrderSummary = () => {
    return (
        <div className="p-4 bg-[#F9FAFC] rounded-lg shadow-md">
            <div className="space-y-4">
                <div className="flex justify-between">
                    <span>Importe:</span>
                    <span className="font-medium">56,06 EUR</span>
                </div>
                <Line />
                <div className="flex justify-between">
                    <span>Moneda seleccionada:</span>
                    <div className="flex items-center">
                        <div className="w-5 h-5 rounded-full mr-2">
                            <img
                                alt="IMAGE"
                                src="https://payments.pre-bnvo.com/media/crytocurrencies/CryptoBCH_Size36_px_TT7Td9Q.png"
                            />
                        </div>
                        <span>XRP</span>
                    </div>
                </div>
                <Line />
                <div className="flex justify-between">
                    <span>Comercio:</span>
                    <div className="flex items-center text-sm">
                        <svg
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                opacity="0.4"
                                d="M11.2499 2.45009C11.9399 1.86009 13.0699 1.86009 13.7699 2.45009L15.3499 3.81009C15.6499 4.07009 16.2099 4.28009 16.6099 4.28009H18.3099C19.3699 4.28009 20.2399 5.15009 20.2399 6.21009V7.91009C20.2399 8.30009 20.4499 8.87009 20.7099 9.17009L22.0699 10.7501C22.6599 11.4401 22.6599 12.5701 22.0699 13.2701L20.7099 14.8501C20.4499 15.1501 20.2399 15.7101 20.2399 16.1101V17.8101C20.2399 18.8701 19.3699 19.7401 18.3099 19.7401H16.6099C16.2199 19.7401 15.6499 19.9501 15.3499 20.2101L13.7699 21.5701C13.0799 22.1601 11.9499 22.1601 11.2499 21.5701L9.66988 20.2101C9.36988 19.9501 8.80988 19.7401 8.40988 19.7401H6.67988C5.61988 19.7401 4.74988 18.8701 4.74988 17.8101V16.1001C4.74988 15.7101 4.53988 15.1501 4.28988 14.8501L2.93988 13.2601C2.35988 12.5701 2.35988 11.4501 2.93988 10.7601L4.28988 9.17009C4.53988 8.87009 4.74988 8.31009 4.74988 7.92009V6.20009C4.74988 5.14009 5.61988 4.27009 6.67988 4.27009H8.40988C8.79988 4.27009 9.36988 4.06009 9.66988 3.80009L11.2499 2.45009Z"
                                fill="#15BBE0"
                            />
                            <path
                                d="M11.2901 15.1701C11.0901 15.1701 10.9001 15.0901 10.7601 14.9501L8.34006 12.5301C8.05006 12.2401 8.05006 11.7601 8.34006 11.4701C8.63006 11.1801 9.11006 11.1801 9.40006 11.4701L11.2901 13.3601L15.5901 9.06009C15.8801 8.77009 16.3601 8.77009 16.6501 9.06009C16.9401 9.35009 16.9401 9.83009 16.6501 10.1201L11.8201 14.9501C11.6801 15.0901 11.4901 15.1701 11.2901 15.1701Z"
                                fill="#15BBE0"
                            />
                        </svg>
                        <span className="text-sm">Comercio de pruebas de Semega</span>
                    </div>
                </div>
                <div className="flex justify-between">
                    <span>Fecha:</span>
                    <span>21/01/2022 08:52</span>
                </div>
                <Line />
                <div className="flex justify-between">
                    <span>Concepto:</span>
                    <span>Viajes & Ocio</span>
                </div>
            </div>
        </div>
    )
}
const PaymentDetails = () => {
    const code = 'Xp4Lw3PhQg87RfmqrTbk143LrXp4kw3PhQgB7RmedEV73';
    const [web3, setWeb3] = useState<boolean>(false);
    return (
        <div className="p-4 bg-white rounded-lg  shadow-md">
            <div className="flex justify-center mb-6 items-center text-gray-500">
                <svg className="w-5 h-5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <path strokeWidth="2" d="M12 6v6l4 2" />
                </svg>
                <span>05:08</span>
            </div>
            <div className="flex justify-center gap-4 mb-8">
                <button onClick={() => setWeb3(false)} className={`px-4 py-2 ${!web3 ? 'bg-[#035AC5] text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors' : 'bg-[#F9FAFC] text-[#647184] border border-gray-200 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors'} `}>
                    Smart QR
                </button>
                <button onClick={() => setWeb3(true)} className={`px-4 py-2 ${web3 ? 'bg-[#035AC5] text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors' : 'bg-[#F9FAFC] text-[#647184] border border-gray-200 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors'}`}>
                    Web3
                </button>
            </div>
            {/* QR Code SVG Example */}
            {!web3 ? (

                <div className="w-32 h-32 mx-auto mb-6 p-4 rounded-xl shadow-lg bg-white">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <path d="M0,0 h100v100h-100z" fill="white" />
                        <path d="M10,10 h35v35h-35z M15,15 h25v25h-25z" fill="black" />
                        <path d="M55,10 h35v35h-35z M60,15 h25v25h-25z" fill="black" />
                        <path d="M10,55 h35v35h-35z M15,60 h25v25h-25z" fill="black" />
                        <path d="M55,55 h35v35h-35z" fill="black" />
                        <path d="M60,60 h25v25h-25z" fill="white" />
                    </svg>
                </div >
            ) : (
                <div className="w-32 h-32 mx-auto mb-6 p-4 rounded-xl shadow-lg bg-white">
                    <svg width="137" height="44" viewBox="0 0 137 44" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <rect y="0.333344" width="137" height="43" fill="url(#pattern0_1511_39822)" />
                        <defs>
                            <pattern id="pattern0_1511_39822" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlinkHref="#image0_1511_39822" transform="matrix(0.00337493 0 0 0.0107527 -0.0062397 0)" />
                            </pattern>
                            <image id="image0_1511_39822" width="300" height="93" xlinkHref="data:image/png;base64,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" />
                        </defs>
                    </svg>

                </div>
            )}
            <div className="space-y-4 ">
                <div className="flex justify-center items-center ">
                    <span className=" text-sm">Enviar : <span className="font-semibold">108,02 XRP</span></span>
                    <button className=" ml-2 text-blue-600 hover:text-blue-700">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path
                                strokeWidth="2"
                                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                        </svg>
                    </button>
                </div>
                <div className="flex justify-center items-center   space-x-2">
                    <span className=" text-sm break-words">
                        {code}
                    </span>
                    <button className="text-blue-600 hover:text-blue-700">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path
                                strokeWidth="2"
                                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                        </svg>
                    </button>
                </div>

                <div className="flex justify-center items-center  ">
                    <svg className="w-5 h-5 mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" d="M21.08 8.58003V15.42C21.08 16.54 20.4799 17.58 19.5099 18.15L13.5699 21.58C12.5999 22.14 11.3999 22.14 10.4199 21.58L4.47992 18.15C3.50992 17.59 2.90991 16.55 2.90991 15.42V8.58003C2.90991 7.46003 3.50992 6.41999 4.47992 5.84999L10.4199 2.42C11.3899 1.86 12.5899 1.86 13.5699 2.42L19.5099 5.84999C20.4799 6.41999 21.08 7.45003 21.08 8.58003Z" fill="#EAB308" />
                        <path d="M12 10.5C12.41 10.5 12.75 10.84 12.75 11.25L12.75 16.5C12.75 16.91 12.41 17.25 12 17.25C11.59 17.25 11.25 16.91 11.25 16.5L11.25 11.25C11.25 10.84 11.59 10.5 12 10.5Z" fill="#002859" />
                        <path d="M12 7.00014C12.13 7.00014 12.26 7.03016 12.38 7.08016C12.51 7.13016 12.61 7.20012 12.71 7.29012C12.8 7.39012 12.87 7.50014 12.93 7.62014C12.98 7.74014 13 7.87014 13 8.00014C13 8.26014 12.9 8.52016 12.71 8.71016C12.61 8.80016 12.51 8.87012 12.38 8.92012C12.01 9.08012 11.57 8.99016 11.29 8.71016C11.2 8.61016 11.13 8.51015 11.08 8.38015C11.03 8.26015 11 8.13014 11 8.00014C11 7.87014 11.03 7.74014 11.08 7.62014C11.13 7.50014 11.2 7.39012 11.29 7.29012C11.48 7.10012 11.73 7.00014 12 7.00014Z" fill="#002859" />
                    </svg>

                    <span className=" text-sm">Etiqueta de destino: 255716461</span>
                    <button className=" ml-2 text-blue-600 hover:text-blue-700">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path
                                strokeWidth="2"
                                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div >
    )
}
const Line = () => {
    return (
        <h1 className="h-[0.2px]  bg-[#C0CCDA] w-full"></h1>
    )
}