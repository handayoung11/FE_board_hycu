import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import LabelInput from "./LabelInput";

const ErrCheckLabelInput = forwardRef(({ blankMsg, regExps = [], funcs = [], parentMsg = "", parentOnBlur = () => {}, ...rest }, ref) => {
    const [msg, setMsg] = useState();
    const [focused, setFocused] = useState(false);
    const input = useRef();
    
    useImperativeHandle(ref, () => ({input: input.current, hasError: msg !== "" || parentMsg !== ""}));

    const onBlur = async () => {
        setFocused(true);
        parentOnBlur();
        const value = input.current.value;
        if (input.current.value === "" && blankMsg) {
            setMsg(blankMsg);
        } else {
            for (const regExp of regExps) {
                if (!regExp.pattern.test(value)) {
                    setMsg(regExp.msg);
                    return;
                }
            }

            for (const func of funcs) {
                if (! await func.func()) {
                    setMsg(func.msg);
                    return;
                }
            }
        }
        setMsg("");
    }

    return <>
        <LabelInput {...rest} onBlur={onBlur} ref={input} />
        <span className="text-red-600 text-xs">
            {focused && (msg || parentMsg)}
        </span>
    </>
})

export default ErrCheckLabelInput;