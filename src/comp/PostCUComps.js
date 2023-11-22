import { forwardRef } from "react";
import Layout from "../Layout/Layout";
import Button from "./Button";
import ClosePage from "./ClosePage";
import Input from "./Input";
import Textarea from "./Textarea";

export function PostLayout({ children, onSubmit, ...rest }) {
    return <Layout headerContent={<ClosePage {...rest} />} className={"flex flex-col max-h-screen p-5"}>
        <form className="flex flex-auto flex-col gap-5" onSubmit={onSubmit}>
            {children}
        </form>
    </Layout>
}

export const PostTitle = forwardRef(function ({ defaultValue }, ref) {
    return <div className="flex items-center gap-4 flex-none text-white">
        <span className="whitespace-nowrap">제목:</span>
        <Input id="title" ref={ref} defaultValue={defaultValue} required />
    </div>
})

export const PostContentsAndButton = forwardRef(function ({ defaultValue, buttonText }, ref) {
    return <div className="flex-auto text-gray-500 flex flex-col gap-3">
        <Textarea id="content" className="flex-auto" ref={ref} defaultValue={defaultValue} required />
        <div className="text-right">
            <Button type="submit" className="w-20">{buttonText}</Button>
        </div>
    </div>
})
