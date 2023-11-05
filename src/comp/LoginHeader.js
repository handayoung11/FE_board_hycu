import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';
import { MemoryRouter, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import LoginModal from "../page/modal/LoginModal";
import { useAuth } from "./AuthProvider";
import Button from "./Button";
import ListButton from "./ListButton";
import ListButtonContainer from "./ListButtonContainer";

const swal = withReactContent(Swal);
export default function LoginHeader({ pageNav }) {
    const { isLoggedIn, login, logout, showLoginModal, setShowLoginModal } = useAuth();
    const navigate = useNavigate();
    const [showButtons, setShowButtons] = useState(false);

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
            {pageNav}
            <button className="ml-6" onClick={e => { setShowButtons(cur => !cur); e.stopPropagation() }}>
                <FontAwesomeIcon icon={faEllipsisVertical} className="text-slate-400 text-2xl" />
            </button>
            <ListButtonContainer showButtons={showButtons} setShowButtons={setShowButtons} >
                <ListButton isFirst={true} onClick={() => { logout(); }}>로그아웃</ListButton>
            </ListButtonContainer>
        </>

}