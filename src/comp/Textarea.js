import { forwardRef } from "react"

const Textarea = forwardRef(function ({ className, ...rest }, ref) {
    return <textarea {...rest} ref={ref} className={`p-1 border focus:outline-none text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 text-white ${className}`} />
})

export default Textarea;