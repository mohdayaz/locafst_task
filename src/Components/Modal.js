import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import React, {Component} from "react"

const Modal = props =>  {

    return(<div className="modal-container">
        <div className="modal-overlay"></div>
        <div className="modal-inner">
            {props.title && <div className="modal-title">
                {props.title}<span onClick={() => props.closeModal()}><FontAwesomeIcon icon={faTimes}/></span>
            </div>}
            <div className="modal-component">
                {props.component}
            </div>
        </div>
    </div>);
}

export default Modal