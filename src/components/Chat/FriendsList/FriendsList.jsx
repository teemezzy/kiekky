import React, { useState } from "react";
import "./FriendsList.css";

const FriendsList = ({emitSelectedFriend, friendsList}) => {
    const [selectedFriendKey, setSelectedFriendKey] = useState('');

    
    return (
        <div className="friend-list">
            {friendsList.map((friend, key) =>
                <div key={key} onClick={() => setSelectedFriendKey(key)&emitSelectedFriend(friend)} className={`item-wrapper ${selectedFriendKey === key ? 'selected-friend' : ''}`}>
                    <time className="time">{friend.time}</time>
                    <div className="item">
                        <img src={friend.profileImage} alt="dp" />
                        <div>
                            <p><b>{friend.firstName}</b></p>
                            <p className="message">{friend.lastMessage}</p>
                        </div>
                    </div>
                </div>)}
        </div>
    )
}

export default FriendsList;