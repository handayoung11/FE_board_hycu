import axios from "axios";
import { isValidRes, onError } from "./ApiErrorHandler";
import Swal from "sweetalert2";

export async function postToken(id, pw) {
    const credentials = btoa(id + ':' + pw);
    const config = { headers: { Authorization: `Basic ${credentials}` } }

    const res = await axios.post("/token", "", config).catch(async e => {
        const res = e.response;
        if (res) {
            await Swal.showValidationMessage(res.data);
        } else {
            onError(e);
        }
    });
    if (isValidRes(res)) {
        return true;
    }
}