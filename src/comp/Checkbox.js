export default function Checkbox({id}) {
    return <input id={id} aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-600 rounded bg-gray-700 ring-offset-gray-800 outline-none focus:ring-2 focus:ring-blue-600" required="" />;
}