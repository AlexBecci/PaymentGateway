interface ButtonProps {
    state: boolean
}
export const Button = ({ state }: ButtonProps) => {
    return (
        <button
            type="submit"
            className={`w-full text-white transition-all duration-300   py-2.5 rounded-md text-sm font-medium   ${!state ? ' bg-[#C6DFFE] hover:bg-blue-200' : 'bg-[#035AC5]'}`}
        >
            Continuar
        </button>
    )
}