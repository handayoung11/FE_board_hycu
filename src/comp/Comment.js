import { faCheck, faPen, faSortUp, faTrashCan, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import { format } from "timeago.js";
import { deleteReply, updateReply } from "../api/ReplyApi";
import Button from "./Button";
import Textarea from "./Textarea";

export default function Comment({ id, creator, time_ago, content, level, mine, fetchPost }) {

    const [isUpdateMode, setUpdateMode] = useState(false);
    const contentsRef = useRef(null);
    const vButtonRef = useRef(null);

    useEffect(() => {
        contentsRef.current.focus();
    }, [isUpdateMode])

    async function onDelete() {
        const res = await Swal.fire({
            icon: "question",
            text: "댓글을 삭제하시겠습니까?",
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonText: "네",
            cancelButtonText: "아니오",
        })

        if (res.isConfirmed) {
            const res = await deleteReply(id);
            if (res) {
                await Swal.fire("삭제 완료", "댓글이 삭제되었습니다.", "success");
                fetchPost();
            }
        }
    }

    async function onUpdate() {
        const res = await updateReply(id, { contents: contentsRef.current.value });
        if (res) {
            fetchPost();
        }
        setUpdateMode(false);
    }

    const handleTabKeyDown = (event) => {
        if (event.key === 'Tab') {
            if (event.shiftKey) {
                return;
            }
            event.preventDefault();
            vButtonRef.current.focus();
            console.log('tab')
        }
    };

    const visible = isUpdateMode ? "visible" : "hidden";

    return <div style={{ paddingLeft: `${level * 40}px` }} className="mt-4">
        <div className="text-gray-300 flex gap-2">
            <FontAwesomeIcon icon={faSortUp} />
            <span className="mr-2">
                <strong>{creator.nickname}</strong> {format(time_ago, 'ko')}
            </span>
            <Button ref={vButtonRef} onClick={onUpdate} className={`basis-8 py-1 h-5 text-xxs ${visible}`} theme="green">
                <FontAwesomeIcon icon={faCheck} />
            </Button>
            <Button onClick={() => setUpdateMode(false)} className={`basis-8 py-1 h-5 text-xxs ${visible}`}><FontAwesomeIcon icon={faX} /></Button>
            {
                !isUpdateMode && mine && <>
                    <Button onClick={() => setUpdateMode(true)} className="basis-8 py-1 h-5 text-xxs" theme="yellow"><FontAwesomeIcon icon={faPen} /></Button>
                    <Button onClick={onDelete} className="basis-8 py-1 h-5 text-xxs"><FontAwesomeIcon icon={faTrashCan} /></Button>
                </>
            }
        </div>
        <p className="text-gray-100 whitespace-pre-wrap">
            <Textarea ref={contentsRef} onKeyDown={handleTabKeyDown} defaultValue={content} className={`${visible}`} />
            {!isUpdateMode && content}
        </p>
    </div>
}