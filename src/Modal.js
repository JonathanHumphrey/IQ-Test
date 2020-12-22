import React from 'react'
import Modal from 'react-bootstrap/Modal'

function ModalContainer({show, toggleShow, testOver}) {
    return (
        <div>
            <Modal
                show={show}
                onHide={toggleShow}
                dialogClassName="modal"
            >
                You are now waiting!
                 <br></br>
                <button onClick={testOver}>Close</button>
            </Modal>
        </div>
    )
}
export default ModalContainer;

