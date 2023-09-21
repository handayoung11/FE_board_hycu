import { useRef } from "react";
import { postToken } from "../../api/TokenApi";
import Button from "../../comp/Button";
import CustomLink from "../../comp/CustomLink";
import LabelInput from "../../comp/LabelInput";
import Swal from "sweetalert2";

export default function LoginModal({ onSuccess = () => {}}) {

    const loginRefs = useRef([null, null]);

    const onSubmit = async e => {
        e.preventDefault();
        const res = await postToken(loginRefs.current[0].value, loginRefs.current[1].value);
        if (res) {
            onSuccess();
        } else {
            loginRefs.current[0].focus();
        }
    }

    return <div className="px-6 pt-6 lg:px-8 text-left">
        <h3 className="mb-4 text-xl text-white">HYCU News Login</h3>
        <form className="space-y-6" onSubmit={onSubmit}>
            <LabelInput type="email" placeholder="name@company.com" autoFocus={true} onChange={Swal.resetValidationMessage} ref={el => loginRefs.current[0] = el} />
            <LabelInput type="password" placeholder="••••••••" onChange={Swal.resetValidationMessage} ref={el => loginRefs.current[1] = el} />
            <Button color="blue" level={-2} className="w-full font-medium px-5 py-2.5">내 계정으로 Login하기</Button>
            <div className="flex flex-col justify-between">
                <CustomLink to="#">비밀번호를 잊어버렸나요?</CustomLink>
                <CustomLink to="#" text="계정이 없나요?">회원가입하기</CustomLink>
            </div>
        </form>
    </div>
}