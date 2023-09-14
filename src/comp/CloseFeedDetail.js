import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CloseFeedDetail() {
    return <a href="#/page/{{__currentPage__}}" className="text-gray-500">
        <FontAwesomeIcon icon={faTimes}/>
    </a>
}