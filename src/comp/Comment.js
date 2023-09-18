import { faSortUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Comment({user, time_ago, content, level}) {
    return <div style={{paddingLeft: `${level * 40}px`}} className="mt-4">
        <div className="text-gray-400">
            <FontAwesomeIcon icon={faSortUp} className="mr-2" />
            <strong>{user}</strong> {time_ago}
        </div>
        <p className="text-gray-700">{content}</p>
    </div>
}