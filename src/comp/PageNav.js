export default function PageNav() {
    return <>
        <a href="#/page/{{__prev_page__}}" className="text-gray-500">
            Previous
        </a>
        <a href="#/page/{{__next_page__}}" className="text-gray-500 ml-4">
            Next
        </a>
    </>
}