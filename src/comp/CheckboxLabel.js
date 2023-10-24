import Checkbox from "./Checkbox";
import Label from "./Label";

export default function CheckboxLabel({ id, content }) {
    return <div className="flex items-start">
        <div className="flex items-center h-5">
            <Checkbox id={id} />
        </div>
        <div className="ml-2 text-sm">
            {/* <label htmlFor={id} className="font-light text-gray-300">{content}</label> */}
            <Label htmlFor={id} children={content} isCheckboxLabel="true" />
        </div>
    </div>
}