import { Link } from "react-router-dom";

export default function CustomLink({ to, text, children, inline = false, onClick }) {
    return <div className={"text-sm font-light text-gray-300" + (inline ? " inline" : "")} onClick={onClick}>
        {text} <Link to={to} className="text-sm text-blue-500 hover:underline outline-none rounded" tabIndex={-1}>{children}</Link>
    </div>
}