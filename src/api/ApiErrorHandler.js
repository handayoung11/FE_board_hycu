export function onError(e) {
    console.log(e);
    const res = e.response;
    if (!res)
        alert('서버 점검 중입니다. 잠시 후 다시 시도해주세요.');
    else {
        alert(res.data);
    }
}

export function isValidRes(res) {
    return res && (res.status === 200 || res.status === 201)
}
