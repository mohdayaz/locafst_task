import { faArrowLeft, faArrowRight, faExclamation, faExclamationCircle, faEye, faPaperclip } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react";
import DropDown from "./DropDown"
import React from "react"

const MaterialDetails = props => {

    const [step, setStep] = useState(1)
    const [factory, setFactory] = useState("")
    const [design, setDesign] = useState("")
    const [quantity, setQuantity] = useState("")
    const [file, setFile] = useState("")
    const [notfilled, setNotfilled] = useState(true)
    const myRef = React.createRef();

    const selectFile = () => {
        const el = document.getElementById("file")
        el.click()
    }

    const selectedFile = (e) => {
        setFile(e.target.files[0])
    }

    const selectedValue = (type, e) => {
        if(type === "factory"){
            setFactory(e)
        }
        if(type === "design"){
            setDesign(e)
        }
        if(type === "quantity"){
            setQuantity(e)
        }
    }

    useEffect(() => {
        if(file && factory && quantity && design) {
            setNotfilled(false)
        }
    }, [file, factory, quantity, design])

    return(
        <React.Fragment>
            <div className="material-details">
                <div className="image-container">
                    <img src={props.data.image}/>
                </div>
                <div className="assign-factory-conatiner">
                    <h4 className="title">
                        {<FontAwesomeIcon icon={faArrowLeft}/>} Assign to Factory
                    </h4>
                    {step == 1 && <div className="form">
                        <label>Factory<span className="starx">*</span></label>
                        <DropDown dropDownPayload={(e) => selectedValue("factory",e)} title="Select Factory" data={props.data.factoryOptions}/>
                        <label>Assign for Design<span className="starx">*</span></label>
                        <DropDown dropDownPayload={(e) => selectedValue("design",e)} search={true} placeholder="Search by Name or Design ID" data={props.data.designOptions}/>
                        <div className="quantity-inventory">
                            <div className="quantity">
                                <label>Assign Quantity<span className="starx">*</span></label>
                                <input onChange={(e) => selectedValue("quantity",e.target.value) }placeholder="Enter quantity"/>
                            </div>
                            <div className="inventory">
                                <label>Available Inventory</label>
                                <p>{props.data.inventory}</p>
                            </div>
                        </div>
                        <div className="select-file">
                            <label>Attach Challan<span className="starx">*</span></label>
                            <button onClick={() => selectFile()}>Select File <FontAwesomeIcon icon={faPaperclip}/></button>
                            <input onChange={(e) => selectedFile(e)} id="file" ref={myRef} type="file" className="custom-file-input"/>
                        </div>
                    </div>}
                    {step == 2 && <div className="preview-conatiner">
                        <div className="disclaimer"><FontAwesomeIcon icon={faExclamation}/>You won’t be able to change the details later.</div>
                        <div className="preview">
                            <p className="title">Factory</p>
                            <p className="subtitle">{factory}</p>
                        </div>
                        <div className="preview">
                            <p className="title">Assign to Design</p>
                            <p className="subtitle">{design}</p>
                        </div>
                        <div className="preview">
                            <p className="title">Assign Quantity</p>
                            <p className="subtitle">{quantity}</p>
                        </div>
                        <div className="preview">
                            <p className="title">Challan</p>
                            <p className="subtitle file">{file.name} <FontAwesomeIcon icon={faEye}/></p>
                        </div>
                    </div>}
                </div>
                <div className="material-bottom-section">
                    <button >BACK</button>
                    {step == 1 && <button className={notfilled && "disabled"} onClick={() => setStep(2)}>NEXT</button>}
                    {step == 2 && <button className={notfilled && "disabled"} onClick={() => setStep(2)}>ASSIGN TO FACTORY</button>}
                </div>
            </div>
    </React.Fragment>
    );

}

export default MaterialDetails