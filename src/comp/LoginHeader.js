import SweetAlert2 from "react-sweetalert2"
import Button from "./Button"
import LoginForm from "./LoginForm"
import { useSwal2Hook } from "../hook/SwalHook";

export default function LoginHeader() {
    const [swalProps, openSwal, closeSwal] = useSwal2Hook();

    return <>
        <Button className="mr-3" onClick={openSwal}>로그인</Button>
        <Button level={2}>회원가입</Button>
        <SweetAlert2 {...swalProps} didClose={closeSwal}>
            <LoginForm onSuccess={closeSwal} />
        </SweetAlert2>
    </>
}