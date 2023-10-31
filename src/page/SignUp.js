import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Layout from "../Layout/Layout";
import { checkMail, checkNickname, signUp } from "../api/UserApi";
import Button from "../comp/Button";
import CheckboxLabel from "../comp/CheckboxLabel";
import CustomLink from "../comp/CustomLink";
import ErrCheckLabelInput from "../comp/ErrLabel";
import LoginHeader from "../comp/LoginHeader";
import { useAuth } from "../comp/AuthProvider";

export default function SignUp() {
    const emailRef = useRef();
    const nickRef = useRef();
    const pwRef = useRef();
    const pwConfirmRef = useRef();
    const checkRef = useRef();
    const [pwConfrimMsg, setPwConfirmMsg] = useState("");
    const navigate = useNavigate();
    const { setShowLoginModal } = useAuth();

    const onSubmit = e => {
        e.preventDefault();
        if (emailRef.current.hasError || nickRef.current.hasError || pwRef.current.hasError || pwConfirmRef.current.hasError) {
            Swal.fire({
                text: "올바르게 입력했는지 확인해주세요.",
                icon: "error"
            })
        } else if (!checkRef.current.checked) {
            Swal.fire({
                text: "이용약관에 동의해주세요.",
                icon: "error"
            })
        } else {
            const res = signUp({ email: emailRef.current.input.value, nickname: nickRef.current.input.value, pw: pwRef.current.input.value });
            if (res) {
                setShowLoginModal(true);
                navigate("/");
            }
        }
    }

    const mailCheck = {
        blankMsg: "이메일을 입력해주세요.",
        regExps: [{ pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, msg: "이메일 형식을 확인해주세요." }],
        funcs: [{
            func: async () => await checkMail(emailRef.current.input.value),
            msg: "사용할 수 없는 메일입니다. 다른 메일을 입력해주세요."
        }]
    };

    const nicknameCheck = {
        blankMsg: "닉네임을 입력해주세요.",
        regExps: [{ pattern: /^.{2,10}$/, msg: "2글자 이상 10글자 이하로 입력해주세요." }],
        funcs: [{
            func: async () => await checkNickname(nickRef.current.input.value),
            msg: "사용할 수 없는 닉네임입니다. 다른 닉네임을 입력해주세요."
        }]
    };

    const checkPwConfirm = () => {
        const isEqual = pwRef.current.input.value === pwConfirmRef.current.input.value;
        setPwConfirmMsg(isEqual ? "" : "비밀번호와 일치하지 않습니다.");
        return isEqual;
    };

    const pwCheck = {
        blankMsg: "비밀번호를 입력해주세요.",
        regExps: [{ pattern: /^.{8,16}$/, msg: "8글자 이상 16글자 이하로 입력해주세요." }],
        parentOnBlur: checkPwConfirm
    };

    const pwConfirmCheck = {
        funcs: [{
            func: checkPwConfirm, msg: "비밀번호와 일치하지 않습니다."
        }],
        parentMsg: pwConfrimMsg
    };

    return <Layout headerContent={<LoginHeader />} className="flex flex-col">
        <div className="flex flex-col items-center grow justify-center px-6 py-8">
            <div className="w-full rounded-lg shadow border bg-gray-700 border-gray-700 sm:max-w-md">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                        회원가입
                    </h1>
                    <form onSubmit={onSubmit} className="space-y-4 md:space-y-6">
                        <ErrCheckLabelInput type="email" label="이메일" placeholder="name@company.com" autoFocus={true} autoComplete={true} {...mailCheck} ref={emailRef} />
                        <ErrCheckLabelInput type="nickname" label="닉네임" placeholder="nickname" {...nicknameCheck} ref={nickRef} />
                        <ErrCheckLabelInput type="password" label="비밀번호" placeholder="8~16자로 입력해주세요." {...pwCheck} ref={pwRef} />
                        <ErrCheckLabelInput type="password" label="비밀번호 확인" placeholder="••••••••" id="confirm-password" {...pwConfirmCheck} ref={pwConfirmRef} />
                        <CheckboxLabel id="terms" content={<><CustomLink to="#" inline={true} >이용약관</CustomLink>에 동의합니다. </>} ref={checkRef} />
                        <Button level={-2} className="w-full font-medium px-5 py-2.5">회원가입하기</Button>
                    </form>
                </div>
            </div>
        </div>
    </Layout>
}