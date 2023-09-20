export default function Label({children, htmlFor = children}) {
    return <label htmlFor={htmlFor} className="block mb-2 text-sm font-medium text-white">
        {children}
    </label>
}