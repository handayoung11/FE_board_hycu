import Input from "./Input";
import Label from "./Label";

export default function LabelInput({ type, placeholder, label = type, autoFocus }) {
    return <div>
        <Label>{label}</Label>
        <Input type={type} placeholder={placeholder} autoFocus={autoFocus} />
    </div>
}