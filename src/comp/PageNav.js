import { Link } from "react-router-dom";

export default function PageNav({ page }) {
    console.log(page);
    const prev = page > 1 ? page - 1 : 1;

    return <>
        <Link to={`/post?page=${prev}`} className="text-gray-500">
            Previous
        </Link>
        <Link to={`/post?page=${page + 1}`} className="text-gray-500 ml-4">
            Next
        </Link>
    </>
}