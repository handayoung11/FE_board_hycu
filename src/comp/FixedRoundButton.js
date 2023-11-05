
export default function FixedRoundButton({ children, onClick }) {
    return <button onClick={onClick}
        className="fixed right-2 bottom-2.5 bg-amber-500 text-white rounded-full w-12 h-12 text-xl">
        {children}
    </button>
}