export default function Label({children, htmlFor = children, isCheckboxLabel = false}) {
    const className = isCheckboxLabel ? "font-light text-gray-300" : "block mb-2 text-sm font-medium text-white";
    return <label htmlFor={htmlFor} className={className}>
        {children}
    </label>
}