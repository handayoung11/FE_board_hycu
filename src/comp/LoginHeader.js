import { BrowserRouter, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import LoginModal from "../page/modal/LoginModal";
import { useAuth } from "./AuthProvider";
import Button from "./Button";

const swal = withReactContent(Swal);
export default function LoginHeader() {
    const { isLoggedIn, login, logout } = useAuth();
    const navigate = useNavigate();

    const openSwal = () => {
        swal.fire({
            showConfirmButton: false,
            allowOutsideClick: false,
            showCloseButton: true,
            html: <BrowserRouter><LoginModal onSuccess={() => { swal.close(); login(); }} /></BrowserRouter>,
        })
    }

    return !isLoggedIn ?
        <>
            <Button className="mr-3" onClick={openSwal}>로그인</Button>
            <Button level={2} onClick={() => navigate("/sign-up")}>회원가입</Button>
        </> :
        <>
            "안녕하세요 회원님, 반갑습니다."
            <Button className="ml-4" level={2} onClick={() => { logout(); }}>로그아웃</Button>
        </>

}