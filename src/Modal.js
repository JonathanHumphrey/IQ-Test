import React from 'react'
import Modal from 'react-bootstrap/Modal'
//passes in the slices of state to allow the button to change the state
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

