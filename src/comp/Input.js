import { forwardRef } from "react"

const Input = forwardRef(function Input({ type, name = type, id = type, autoComplete, ...rest }, ref) {
    return <input type={type} name={name} id={id} ref={ref} autoComplete={autoComplete ? "on" : "off"}  {...rest}
        className="border focus:outline-none text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 text-white" />
})

export default Input;