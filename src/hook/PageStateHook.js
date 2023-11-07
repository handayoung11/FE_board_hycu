import { useLocation } from "react-router-dom";

export default function usePageStateHook() {
    let { state } = useLocation();
    if (!state) state = {page: 1};
    return state;
}