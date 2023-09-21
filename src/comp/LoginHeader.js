import { BrowserRouter } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import LoginModal from "../page/modal/LoginModal";
import Button from "./Button";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const swal = withReactContent(Swal);
export default function LoginHeader() {
    const [isUser, setUser] = useState(false);
    const openSwal = () => {
        swal.fire({
            showConfirmButton: false,
            allowOutsideClick: false,
            showCloseButton: true,
            html: <BrowserRouter><LoginModal onSuccess={() => { swal.close(); setUser(true) }} /></BrowserRouter>,
        })
    }

    useEffect(() => {
        if (Cookies.get("token")) {
            setUser(true);
        }
    }, [])

    return <>
        {!isUser ?
            <>
                <Button className="mr-3" onClick={openSwal}>로그인</Button>
                <Button level={2}>회원가입</Button>
            </>
            : <>"안녕하세요 회원님, 반갑습니다."<Button className="ml-4" level={2} onClick={() => setUser(false)}>로그아웃</Button></>
        }
    </>
}