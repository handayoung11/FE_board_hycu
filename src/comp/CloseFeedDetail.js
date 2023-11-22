import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function ClosePage({ page, to }) {
    return <Link to={page ? `/post?page=${page}` : to} className="text-gray-500">
        <FontAwesomeIcon icon={faTimes} />
    </Link>
}