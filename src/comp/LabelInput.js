import { forwardRef } from "react";
import Input from "./Input";
import Label from "./Label";

const LabelInput = forwardRef(function LabelInput({ type, placeholder, label = type, autoFocus, onChange }, ref) {
    return <div>
        <Label>{label}</Label>
        <Input type={type} placeholder={placeholder} autoFocus={autoFocus} ref={ref} onChange={onChange} />
    </div>
})

export default LabelInput;