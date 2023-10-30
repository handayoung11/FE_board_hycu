import { forwardRef } from "react";
import Checkbox from "./Checkbox";
import Label from "./Label";

const CheckboxLabel = forwardRef(({ id, content }, ref) => {
    return <div className="flex items-start">
        <div className="flex items-center h-5">
            <Checkbox id={id} ref={ref}/>
        </div>
        <div className="ml-2 text-sm">
            <Label htmlFor={id} children={content} isCheckboxLabel="true" />
        </div>
    </div>
})

export default CheckboxLabel;