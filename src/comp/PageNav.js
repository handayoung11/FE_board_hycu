import { Link } from "react-router-dom";

export default function PageNav({ page, max }) {
    const prev = page > 1 ? page - 1 : 1;
    const next = page === max ? page : page + 1;

    return <>
        <Link to={`/post?page=${prev}`} className="text-white">
            &lt;
        </Link>
        <Link to={`/post?page=${next}`} className="text-white ml-4">
            &gt;
        </Link>
    </>
}