import { useEffect } from "react";
import ReactDOM from 'react-dom/client';
import { MemoryRouter, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import LoginModal from "../page/modal/LoginModal";
import { useAuth } from "./AuthProvider";
import Button from "./Button";

const swal = withReactContent(Swal);
export default function LoginHeader() {
    const { isLoggedIn, login, logout, showLoginModal, setShowLoginModal } = useAuth();
    const navigate = useNavigate();
    const openSwal = () => {
        swal.fire({
            showConfirmButton: false,
            allowOutsideClick: false,
            showCloseButton: true,
            html: " ",
        })
        const root = ReactDOM.createRoot(document.getElementById('swal2-html-container'));
        root.render(
            <MemoryRouter>
                <LoginModal onSuccess={() => { swal.close(); login(); }} navigate={path => { swal.close(); navigate(path); }} />
            </MemoryRouter>
        );
    }

    useEffect(() => {
        if (showLoginModal) {
            setShowLoginModal(false);
            openSwal();
        }
        // eslint-disable-next-line
    }, [])

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