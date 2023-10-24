import { useNavigate } from "react-router-dom"

export default function Header({ headerContent }) {
    const navigate = useNavigate();

    return <div className="bg-white text-xl">
        <div className="mx-auto px-4">
            <div className="flex justify-between items-center py-6">
                <div className="flex justify-start">
                    <h1 className="font-extrabold cursor-pointer" onClick={() => navigate("/")}>HYCU News</h1>
                </div>
                <div className="items-center justify-end">
                    {headerContent}
                </div>
            </div>
        </div>
    </div>
}