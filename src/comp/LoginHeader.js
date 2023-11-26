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
export default function LoginHeader({ pageNav, orderBy, setOrderBy }) {
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
                <LoginModal onSuccess={token => { swal.close(); login(token); }} navigate={path => { swal.close(); navigate(path); }} />
            </MemoryRouter>
        );
    }

    useEffect(() => {
        if (showLoginModal) {
            setShowLoginModal(false);
            openSwal();
        }
        // eslint-disable-next-line
    }, [showLoginModal])

    const onOrder = () => {
        setOrderBy(orderBy === "P" ? "T" : "P");
    }

    return !isLoggedIn ?
        <>
            {pageNav}
            <Button className="ml-2 mr-1 text-xs sm:text-sm sm:mx-3" onClick={openSwal}>로그인</Button>
            <Button level={2} onClick={() => navigate("/sign-up")} className="text-xs sm:text-sm" >회원가입</Button>
        </> :
        <>
            {pageNav}
            <button className="ml-6" onClick={e => { setShowButtons(cur => !cur); e.stopPropagation() }}>
                <FontAwesomeIcon icon={faEllipsisVertical} className="text-slate-400 text-2xl" />
            </button>
            <ListButtonContainer showButtons={showButtons} setShowButtons={setShowButtons} >
                {orderBy && <ListButton isFirst={true} onClick={onOrder}>{orderBy==="P" ? "최신순으로" : "인기순으로"}</ListButton>}
                <ListButton isFirst={orderBy === undefined} onClick={() => { logout(); }}>로그아웃</ListButton>
            </ListButtonContainer>
        </>

}