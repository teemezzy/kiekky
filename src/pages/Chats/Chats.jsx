import React, { useEffect, useState } from "react";
// import LoggedInHeader from "../../components/LoggedInHeader/LoggedInHeader";
// import Sidebar from "../../components/Sidebar/Sidebar";
import "./Chats.css";
// import search from "../../assets/images/chat-search.svg";
import FriendsList from "../../components/Chat/FriendsList/FriendsList";
import ChatArea from "../../components/Chat/ChatArea/ChatArea";
import RequestToken from "../../components/Chat/RequestToken/RequestToken";
// import SidebarMobile from "../../components/Sidebar/SidebarMobile";
// import dp from "../../assets/images/chat-dp.png";
import FriendsListMobile from "../../components/Chat/FriendsList/FriendListMobile";
import ChatAreaMobile from "../../components/Chat/ChatAreaMobile/ChatAreaMobile";
import { useLocation } from "react-router-dom";

const Chats = () => {
  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [selectedFriendMessages, setSelectedFriendMessages] = useState();
  const [requestToken, setRequestToken] = useState(false);
  const emittedFriend = (friend) => {
    setSelectedFriendMessages(friend);
  };
  const friendsList = [
    {
      firstName: "Elena",
      lastMessage: "When should we meet",
      time: "12:39",
    //   profileImage: dp,
      online: true,
    },
    {
      firstName: "Elena",
      lastMessage: "When should we meet",
      time: "12:39",
    //   profileImage: dp,
      online: true,
    },
    {
      firstName: "Elena",
      lastMessage: "When should we meet",
      time: "12:39",
    //   profileImage: dp,
      online: true,
    },
    {
      firstName: "Elena",
      lastMessage: "When should we meet",
      time: "12:39",
    //   profileImage: dp,
      online: true,
    },
    {
      firstName: "Elena",
      lastMessage: "When should we meet",
      time: "12:39",
    //   profileImage: dp,
      online: true,
    },
    {
      firstName: "Elena",
      lastMessage: "When should we meet",
      time: "12:39",
    //   profileImage: dp,
      online: true,
    },
    {
      firstName: "Elena",
      lastMessage: "When should we meet",
      time: "12:39",
    //   profileImage: dp,
      online: true,
    },
  ];
  return (
    <div>
      {/* <LoggedInHeader /> */}
      <div className="d-flex mr-2 ml-2 ">
        {/* <Sidebar activeLink={"chats"} /> */}
        {!requestToken ? (
          <div className="w-75">
            {/* Small Screens */}
            {!selectedFriendMessages ? (
              <FriendsListMobile
                chatList={friendsList}
                emitSelectedFriend={emittedFriend}
              />
            ) : (
              <ChatAreaMobile
                selectedFriendMessages={selectedFriendMessages}
                backToFriendList={() => setSelectedFriendMessages("")}
              />
            )}
            <div className="chat-header">
              <div className="search-holder">
                {/* <img src={search} alt="search" /> */}
                <input className="friend-search" placeholder="Search Chats" />
              </div>
              <div></div>
              <button
                className="request-token"
                onClick={() => setRequestToken(true)}
              >
                Request Token
              </button>
            </div>

            {/* Large Screens */}
            <div className="chat-wrapper">
              <FriendsList
                emitSelectedFriend={emittedFriend}
                friendsList={friendsList}
              />
              <ChatArea selectedFriendMessages={selectedFriendMessages} />
            </div>
          </div>
        ) : (
          <div className="w-75">
            <RequestToken closeRequest={() => setRequestToken(false)} />
          </div>
        )}
      </div>
      {/* <SidebarMobile /> */}
    </div>
  );
};

export default Chats;
