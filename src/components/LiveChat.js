import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, generateRandomMessage } from "../utils/helper";
const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const chatMessages = useSelector((store) => store.chat.messages);
  const dispatch = useDispatch();
  useEffect(() => {
    const interval = setInterval(() => {
      //console.log("API Calling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(20),
        })
      );
    }, 1500);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="w-full h-[600px] ml-2 border border-gray-300  bg-white rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((c,index) => (
          <ChatMessage key={index} name={c.name} message={c.message} />
        ))}
      </div>
      <form className="w-full p-2 m-2 border border-black" onSubmit={(e)=>{
        e.preventDefault();
        dispatch(addMessage({
            name: "Shubham",
            message: liveMessage
        }))
        console.log("fffff")
        setLiveMessage("");
      }}>
        <input
          className="px-2 w-80"
          type="text"
          onChange={(e) => setLiveMessage(e.target.value)}
        ></input>
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
