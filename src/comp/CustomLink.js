import { Link } from "react-router-dom";

export default function CustomLink({to, text, children}) {
    return <div className="text-sm font-medium text-gray-300">
        {text} <Link to={to} className="text-sm text-blue-500 hover:underline">{children}</Link>
    </div>
}