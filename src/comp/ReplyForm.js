import { forwardRef } from "react"
import Textarea from "./Textarea";
import Button from "./Button";

const ReplyForm = forwardRef(({onClick, buttonText}, ref) => {
    return <div className="flex gap-3 mb-7">
        <Textarea ref={ref} />
        <Button className="flex-none h-10" onClick={onClick}>{buttonText}</Button>
    </div>
})

export default ReplyForm;