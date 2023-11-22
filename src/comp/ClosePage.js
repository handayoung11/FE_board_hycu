import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function ClosePage({ page, to, state }) {
    return <Link to={page ? `/post?page=${page}` : to} state={state} className="text-gray-500">
        <FontAwesomeIcon icon={faTimes} />
    </Link>
}