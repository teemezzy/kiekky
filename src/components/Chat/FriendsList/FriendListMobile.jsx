import React, { useState } from "react";
import "./FriendListMobile.css";
// import search from "../../../assets/images/chat-search.svg";

const FriendsListMobile = ({chatList, emitSelectedFriend}) => {
    const [selectedFriendKey, setSelectedFriendKey] = useState('');
    return (
        <div className="friend-list-mobile-wrapper">
            <div>
                <div className="search-holder">
                    {/* <img src={search} alt="search" /> */}
                    <input className="friend-search" placeholder="Search Chats" />
                </div>
                {chatList.map((friend, key) =>
                    <div key={key} onClick={() => setSelectedFriendKey(key) & emitSelectedFriend(friend)} className={`item-wrapper-mobile ${selectedFriendKey === key ? 'selected-friend-mobile' : ''}`}>
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
        </div>
    )
}

export default FriendsListMobile;