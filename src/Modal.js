import React from 'react'


function Modal({toggleShow}) {
    return (
        <Modal onHide={toggleShow}>
            You are now waiting!
        </Modal>
    )
}
export default Modal;

