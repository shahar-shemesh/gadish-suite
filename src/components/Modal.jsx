import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

function Modal({ open, children, onClose }) {
    const dialog = useRef();

    const element = document.getElementById("modal");
    element.addEventListener("click", () => document.getElementById("closeDialog").click());

    useEffect(() => {
        if (open) {
            dialog.current.showModal();
        } else {
            dialog.current.close();
        }
    }, [open]);

    return createPortal(
        <dialog className="modal" ref={dialog} onClose={onClose}>
            {open ? children : null}
            <form method='dialog'>
                <button id='closeDialog' style={{display: "none"}}></button>
            </form>
        </dialog>,
        document.getElementById('modal')
    );
}

export default Modal;