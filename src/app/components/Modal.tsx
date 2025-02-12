interface ModalProps {
    state: boolean
}

export const Modal = ({ state }: ModalProps) => {
    return (
        <div className="fixed inset-0 bg-black/10 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-sm w-full p-6 text-center">
                {state ? (
                    <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                        {/* Success Icon */}
                        <svg className="w-12 h-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                ) : (
                    <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                        {/* Error Icon */}
                        <svg className="w-12 h-12 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                )}
                {/* Title */}
                <h2 className="text-xl font-semibold text-gray-900 mb-2">¡Pago {state ? 'completado' : 'cancelado'}!</h2>
                {/* Description */}
                <p className="text-gray-500 text-sm mb-6">
                    Lorem ipsum dolor sit amet consectetur. Laoreet blandit auctor et varius dolor elit facilisi enim. Nulla ut et
                    nunc.
                </p>
                {/* Button */}
                <button className="w-full bg-blue-600 text-white rounded-md py-2.5 text-sm font-medium hover:bg-blue-700 transition-colors">
                    Crear nuevo pago
                </button>
            </div>
        </div >
    )
}