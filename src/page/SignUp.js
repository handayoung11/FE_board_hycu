import Layout from "../Layout/Layout";
import Button from "../comp/Button";
import CheckboxLabel from "../comp/CheckboxLabel";
import CustomLink from "../comp/CustomLink";
import LabelInput from "../comp/LabelInput";
import LoginHeader from "../comp/LoginHeader";

export default function SignUp() {
    return <Layout headerContent={<LoginHeader />} className="flex flex-col">
        <div className="flex flex-col items-center grow justify-center px-6 py-8">
            <div className="w-full rounded-lg shadow border bg-gray-700 border-gray-700 sm:max-w-md">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                        회원가입
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#">
                        <LabelInput type="email" label="이메일" placeholder="name@company.com" autoFocus={true} />
                        <LabelInput type="nickname" label="닉네임" placeholder="nickname" />
                        <LabelInput type="password" label="비밀번호" placeholder="••••••••" />
                        <LabelInput type="password" label="비밀번호 확인" placeholder="••••••••" id="confirm-password" />
                        <CheckboxLabel id="terms" content={<><CustomLink to="#" inline={true} >이용약관</CustomLink>에 동의합니다. </>} />
                        <Button level={-2} className="w-full font-medium px-5 py-2.5">회원가입하기</Button>
                    </form>
                </div>
            </div>
        </div>
    </Layout>
}