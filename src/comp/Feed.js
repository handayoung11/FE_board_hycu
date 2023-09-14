import { faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Feed({id, title, comments_count, user, like, time_ago, read}) {

    return <div className={`p-6 ${read ? 'bg-amber-300' : 'bg-white'} mt-6 rounded-lg shadow-md transition-colors duration-500 hover:bg-green-100`}>
        <div className="flex">
            <div className="flex-auto">
                <a href={`/post/${id}`}>{title}</a>
            </div>
            <div className="text-center text-sm">
                <div className="w-10 text-white bg-green-300 rounded-lg px-0 py-2">{comments_count}</div>
            </div>
        </div>
        <div className="flex mt-3">
            <div className="grid grid-cols-3 text-sm text-gray-500">
                <div><FontAwesomeIcon icon={faUser} className="mr-1"/>{user}</div>
                <div><FontAwesomeIcon icon={faHeart} className="mr-1"/>{like}</div>
                <div><FontAwesomeIcon icon={faClock} className="mr-1"/>{time_ago}</div>
            </div>
        </div>
    </div>
}