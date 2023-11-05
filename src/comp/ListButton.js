export default function ListButton({ isFirst = false, children, ...rest }) {
    const className = isFirst ? "" : `border-t-2 border-t-orange-200`;
    return <button {...rest}
        className={`font-semibold bg-orange-400 hover:bg-orange-500 active:bg-orange-600 first:rounded-t-xl last:rounded-b-xl w-20 h-8 text-xs text-white ${className}`}>
        {children}
    </button>
}