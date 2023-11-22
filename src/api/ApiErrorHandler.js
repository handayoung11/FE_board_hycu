import Swal from "sweetalert2";

export function onError(e) {
    console.log(e);
    const res = e.response;
    if (!res)
        alert('서버 점검 중입니다. 잠시 후 다시 시도해주세요.');
    else {
        Swal.fire({
            text: res.data,
            icon: "error"
        })
    }
}

export function isValidRes(res) {
    if (res) {
        const status = res.status;
        return res && (status === 200 || status === 201 || status === 204)
    }
}

export const NORETRY = { noRetry: true }