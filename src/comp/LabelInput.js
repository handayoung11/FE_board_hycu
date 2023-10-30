import { forwardRef } from "react";
import Input from "./Input";
import Label from "./Label";

const LabelInput = forwardRef(function LabelInput({ type, placeholder, label = type, autoFocus, onChange, id = type, autoComplete, onBlur, required = true }, ref) {
    return <div>
        <Label htmlFor={id}>{label} {required && "*"}</Label>
        <Input id={id} type={type} placeholder={placeholder} autoFocus={autoFocus} ref={ref} onChange={onChange} autoComplete={autoComplete} onBlur={onBlur} required={required} />
    </div>
})

export default LabelInput;