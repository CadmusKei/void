
'use client'

import Text from "../Components/Text";
import Profile from "../Components/Profile";
import CircleButton from "../Components/CircleButton";
import Title from "../Components/Title";
import ChatNav from "../Components/ChatNav";
import ChatCard from "../Components/ChatCard";
import { useState, useEffect } from "react";

import { v4 as uuidv4 } from "uuid";

export default function Home() {

  const [echoes, setEchoes] = useState([]); 
  const [selectedChat, setSelectedChat] = useState(null);
  const [currentMessage, setMessage] = useState("");

  function sendMessage(text)
  {
      const newEcho = {
        id: uuidv4(),
        message: text,
        author: { name: "You", profile: "profile/You.png"},
        timeStample: Date.now()
      };

      setEchoes(prev => [...prev, newEcho]);
  }

  useEffect(() => {
  console.log(selectedChat)
},  [selectedChat]); 

  return (
    <div className="flex flex-col items-center w-full h-screen bg-[#121212]">

        { selectedChat ? (

          <>  
            <div className="fixed z-50 top-0 left-0 right-0 flex pl-4 space-x-8 
            items-center w-full h-[8vh] rounded-b-xl bg-[#111111c2]
            shadow-2xl shadow-[#090909]">
              <CircleButton designAdjustments="w-[80%] h-[80%]" image={"/svgs/Back.svg"} className="h-[4vh]" onClick={() => setSelectedChat(null)}/>
              <Profile className="h-[80%]"></Profile>
              <Title className="text-3xl mt-1">{selectedChat}</Title>
            </div>

            {/* CHAT MESSAGES - This is the scrollable area */}
            <div className="pt-[8vh] pb-[9vh] overflow-y-auto ">
            </div>

            {/* USER INPUT FIELD*/}
            <div className="fixed bottom-0 left-0 right-0 w-full p-2 z-50 bg-[#111111c2]">
              <div className="relative flex items-center w-full h-[7vh] rounded-full bg-[#282828] overflow-hidden border-2 border-neutral-600">
                <input id="input-field" type="text" className="w-[80vw] text-white h-full pl-5 outline-none text-xl" onChange={e => console.log(e.target.value)}></input>
                <CircleButton designAdjustments="h-[40%] h-[40%]" image="/svgs/Send black.svg" className="absolute h-[80%] bg-[#eeeeee] right-1" onClick={() => sendMessage()}/>
              </div>
            </div>
          </>

       
        ) : (
           <>
          <ChatNav/>
          <div className="flex flex-col items-center bg-[#232323] w-[95vw] h-[80vh] rounded-2xl mt-1 overflow-scroll">

            <ChatCard Voidling="Cadmus" 
            lastMessage="You want to play some games?" 
            onClickFunction={setSelectedChat}/>

            <ChatCard Voidling="Marcie" 
            lastMessage="Brooooo" 
            onClickFunction={setSelectedChat}/>

            <ChatCard Voidling="Grumpy Boss"
             lastMessage="Did you get the email?!" 
             onClickFunction={setSelectedChat}/>

          </div> 
        </>

        )}

    </div>
      
  );
}
