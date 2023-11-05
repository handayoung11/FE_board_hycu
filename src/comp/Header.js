import { useNavigate } from "react-router-dom"

export default function Header({ headerContent }) {
    const navigate = useNavigate();
    
    return <div style={{height: "76px"}} className="shrink-0">
        <div className="bg-white text-xl fixed w-full top-0 left-0">
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
    </div>
}