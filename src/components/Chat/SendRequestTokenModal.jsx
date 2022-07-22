import React, {useState} from "react";
import { MdClose } from "react-icons/md";
import SendTokenModal from "./SendTokenModal";
import RequestTokenModal from "./RequestTokenModal";

const SendRequestTokenModal = ({ visible, onClose }) => {
  const [sendTokenModalVisible, setSendTokenModalVisible] = useState(false);
  const [requestTokenModalVisible, setRequestTokenModalVisible] = useState(false)

  const handleSendTokenModal = () => setSendTokenModalVisible(true)
  const handleCloseSendTokenModal = () => setSendTokenModalVisible(false)

  const handleCloseRequestTokenModal = () => {setRequestTokenModalVisible(false)}
  const handleRequestTokenModal = () => setRequestTokenModalVisible(true)
  
  
  if (!visible) return null;


  return (
    <div className=" bg-opacity-60 inset-0 fixed m-auto">
      <div className="w-[251px] border-2 h-[200px] right-[25%] bottom-[25%] m-auto bg-white flex flex-col justify-center items-center absolute">
        <div className="bg-white">
          <div
            onClick={onClose}
            className="absolute m-auto bottom-[78%] left-[85%] p-2 text-[#BDBDBD]"
          >
            <MdClose />
          </div>

          <div className=" w-[130px] m-auto  ">
            <button onClick={handleSendTokenModal} className="text-[#6A52FD] border-2 border-[#6A52FD] py-[14px] px-[30px] text-[12px] rounded-lg">
              Send Token
            </button>
            <button onClick={handleRequestTokenModal} className="bg-[#6A52FD] text-white py-[14px] px-[20px] rounded-lg text-[12px] mt-[26px]">
              Request Token
            </button>
          </div>
        </div>
      </div>
      <SendTokenModal onClose={handleCloseSendTokenModal} visible={sendTokenModalVisible}/>
      <RequestTokenModal onClose={handleCloseRequestTokenModal} visible={requestTokenModalVisible}/>
    </div>

  );
};

export default SendRequestTokenModal;
