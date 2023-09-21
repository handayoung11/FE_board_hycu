export default function Button({ children, className = "", level = 1, onClick=() => {}}) {
    
    switch(level) {
        case -2: className += " bg-rose-500/90 hover:bg-rose-500/75 focus:bg-rose-500/75 focus:ring-rose-700"
        break;
        case 2: className += " bg-rose-500/75 hover:bg-rose-500 focus:bg-rose-500 focus:ring-rose-700/75"
        break;
        case 1: 
        default: className += " bg-rose-400/75 hover:bg-rose-400 focus:bg-rose-400 focus:ring-rose-600/75"
    }

    return <button className={`rounded-xl p-2 text-sm text-white focus:ring-4 focus:outline-none ${className}`} onClick={e => {
        e.currentTarget.blur();
        onClick();
    }}>{children}</button>
}