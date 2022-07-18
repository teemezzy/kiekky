import React, { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
// import SendTokenModal from "../../SendTokenModal/SendTokenModal";
// import SuccessModal from "../../SuccessModal/SuccessModal";
import "./RequestToken.css";

const RequestToken = ({closeRequest}) => {
    const [sendModal, setSendModal] = useState(false);
    const [successModal, setSuccessModal] = useState(false);
    return (
        <div className="request-token-wrapper">
            <div><BsArrowLeft className='back-arrow' onClick={closeRequest} /></div>
            <div className="request-container">
                <div className="title">
                    Request Token
                    <p className="subtitle">Kindly state the number of token you want to request from user</p>
                </div>
                <div>
                    <p className="label">Username</p>
                    <input type="text" placeholder="Enter the Username" />
                </div>
                <div>
                    <p className="label">Number of Token</p>
                    <input type="number" placeholder="Enter the Username" />
                </div>
                <div className="send-container"><button className="send" onClick={()=>setSendModal(true)}>Send Token</button></div>
                {/* {sendModal? <SendTokenModal closeModal={()=> setSendModal(false)} executeSend={()=> setSendModal(false)&setSuccessModal(true)} /> : null}
                {successModal? <SuccessModal closeModal={()=> setSuccessModal(false)} /> : null} */}
            </div>
        </div>
    )
}

export default RequestToken;