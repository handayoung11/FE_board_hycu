import { useEffect } from "react"

export default function ListButtonContainer({ children, showButtons, setShowButtons }) {
    useEffect(() => {
        document.querySelector('body').addEventListener('click', () => setShowButtons(false))
    });

    return <div className={`absolute right-3 top-14 flex flex-col ${showButtons || "hidden"}`} >
        {children}
    </div>
}