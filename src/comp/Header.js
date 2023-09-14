export default function Header({ headerContent }) {
    return <div class="bg-white text-xl">
        <div class="mx-auto px-4">
            <div class="flex justify-between items-center py-6">
                <div class="flex justify-start">
                    <h1 class="font-extrabold">Hacker News</h1>
                </div>
                <div class="items-center justify-end">
                    {headerContent}
                </div>
            </div>
        </div>
    </div>
}