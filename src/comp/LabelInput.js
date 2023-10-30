import { forwardRef } from "react";
import Input from "./Input";
import Label from "./Label";

const LabelInput = forwardRef(function LabelInput({ type, placeholder, label = type, autoFocus, onChange, id = type, autoComplete }, ref) {
    return <div>
        <Label htmlFor={id}>{label}</Label>
        <Input id={id} type={type} placeholder={placeholder} autoFocus={autoFocus} ref={ref} onChange={onChange} autoComplete={autoComplete} />
    </div>
})

export default LabelInput;