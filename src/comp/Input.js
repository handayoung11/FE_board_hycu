import { forwardRef } from "react"

const Input = forwardRef(function Input({ type, name = type, id = type, placeholder, autoFocus, onChange }, ref) {
    return <input type={type} name={name} id={id} placeholder={placeholder} autoFocus={autoFocus} ref={ref} onChange={onChange}
        className="border focus:outline-none text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 text-white" required />
})

export default Input;