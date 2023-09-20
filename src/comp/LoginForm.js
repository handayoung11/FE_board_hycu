import Button from "./Button";
import CustomLink from "./CustomLink";
import LabelInput from "./LabelInput";

export default function LoginForm({ onSuccess }) {

    const onSubmit = e => {
        e.preventDefault();
        onSuccess();
    }

    return <div className="px-6 py-6 lg:px-8 text-left">
        <h3 className="mb-4 text-xl text-white">HYCU News Login</h3>
        <form className="space-y-6" onSubmit={onSubmit}>
            <LabelInput type="email" placeholder="name@company.com" autoFocus={true}/>
            <LabelInput type="password" placeholder="••••••••" />
            <Button color="blue" level={-2} className="w-full font-medium px-5 py-2.5">내 계정으로 Login하기</Button>
            {/* <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">내 계정으로 Login하기</button> */}
            <div className="flex flex-col justify-between">
                <CustomLink to="#">비밀번호를 잊어버렸나요?</CustomLink>
                <CustomLink to="#" text="계정이 없나요?">회원가입하기</CustomLink>
            </div>
        </form>
    </div>
}