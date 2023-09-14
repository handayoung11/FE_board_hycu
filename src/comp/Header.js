export default function Header({ headerContent }) {
    return <div className="bg-white text-xl">
        <div className="mx-auto px-4">
            <div className="flex justify-between items-center py-6">
                <div className="flex justify-start">
                    <h1 className="font-extrabold">Hacker News</h1>
                </div>
                <div className="items-center justify-end">
                    {headerContent}
                </div>
            </div>
        </div>
    </div>
}