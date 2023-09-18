import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function CloseFeedDetail() {
    return <Link to="/post?page={{__currentPage__}}" className="text-gray-500">
        <FontAwesomeIcon icon={faTimes}/>
    </Link>
}