import React from "react";
import "./ChatArea.css";
// import send_message from "../../../assets/images/send_message.svg";
// import emoji from "../../../assets/images/emoji.svg";

const ChatArea = ({ selectedFriendMessages }) => {
    if (selectedFriendMessages) {
        selectedFriendMessages['chats'] =
            [
                { text: 'hello lkdfvn;okref onwefefl kwef lepfiepwe pe23o2pwekfcsdc wkpcwe dpwe', owner: 'friend' },
                { text: 'How are you', owner: 'me' }
            ];
    }

    return (
        <div className="chat-area">
            {
                !selectedFriendMessages ?
                    <div className="no-selected-friend"><b>Select a friend from list to begin chat!</b></div> :
                    <div>
                        <img src={selectedFriendMessages.profileImage} alt="friend" className="profile" />
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
            }
        </div>
    )
}

export default ChatArea;