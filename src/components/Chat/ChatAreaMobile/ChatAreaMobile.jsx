import React, { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import RequestToken from "../RequestToken/RequestToken";
// import emoji from "../../../assets/images/emoji.svg";
// import send_message from "../../../assets/images/send_message.svg";
import "./ChatAreaMobile.css";

const ChatAreaMobile = ({ backToFriendList, selectedFriendMessages }) => {
    const [showRequestToken, setShowRequestToken] = useState(false);
    return (
        <div className="chat-area-mobile-wrapper">
            {
                !showRequestToken ?
                    <div className="header-and-messages">
                        <div className="chat-area-mobile-header">
                            <div>
                                <BsArrowLeft className='back-arrow-mobile' onClick={backToFriendList} />
                                <img src={selectedFriendMessages.profileImage} alt="dp" />
                                <span className="firstName-mobile">{selectedFriendMessages.firstName}</span>
                            </div>
                            <button className="request-token-mobile" onClick={() => setShowRequestToken(true)}>Request Token</button>
                        </div>
                        <div className="messages">
                        {
                            selectedFriendMessages.chats.map((chat, key) =>
                                <div key={key} className={`${chat.owner === 'me' ? 'my-text' : 'friend-text'}`}>
                                    <p>{chat.text}</p>
                                </div>
                            )
                        }
                        <div className="input-holder">
                            <div className="emoji-input">
                                {/* <img src={emoji} alt="emoji" className="emoji" /> */}
                                <input placeholder="Type a message" />
                            </div>
                            {/* <img src={send_message} alt="send message" /> */}
                        </div>
                        </div>
                    </div>
                    :
                    <RequestToken closeRequest={()=>setShowRequestToken(false)} />}
        </div>
    )
}

export default ChatAreaMobile;