import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

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
        <motion.dialog
            key={open}
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            viewport={{ once: false }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="modal"
            ref={dialog}
            onClose={onClose}
        >
            {open ? children : null}
            <form method='dialog'>
                <button id='closeDialog' style={{ display: "none" }}></button>
            </form>
        </motion.dialog>
        ,
        document.getElementById('modal')
    );
}

export default Modal;