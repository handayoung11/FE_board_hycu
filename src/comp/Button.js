export default function Button({ children, className = "", level = 1, theme, onClick = () => { } }) {



    if (theme === "yellow") {
        className += " bg-amber-500/80 hover:bg-amber-500 focus:bg-amber-500 focus:ring-amber-600/75"
    } else {
        switch (level) {
            case 3: className += " bg-rose-500/90 hover:bg-rose-500/75 focus:bg-rose-500/75 focus:ring-rose-700"
                break;
            case 2: className += " bg-rose-500/75 hover:bg-rose-500 focus:bg-rose-500 focus:ring-rose-700/75"
                break;
            case 1:
            default: className += " bg-rose-400/75 hover:bg-rose-400 focus:bg-rose-400 focus:ring-rose-600/75"
                break;
            case 0: className += " bg-rose-400 hover:bg-rose-300/80 focus:bg-rose-300/80 focus:ring-rose-500/75";
        }
    }

    return <button className={`rounded-xl p-2 text-sm text-white focus:ring-4 focus:outline-none ${className}`} onClick={e => {
        e.currentTarget.blur();
        onClick();
    }}>{children}</button>
}