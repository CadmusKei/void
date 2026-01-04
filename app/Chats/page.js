
'use client'

import Text from "../Components/Text";
import Profile from "../Components/Profile";
import CircleButton from "../Components/CircleButton";
import Title from "../Components/Title";
import ChatNav from "../Components/ChatNav";
import ChatCard from "../Components/ChatCard";
import Echo from "../Components/Echo";

import { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Home() {

  const [echoes, setEchoes] = useState([]); 
  const [selectedChat, setSelectedChat] = useState(null);
  const [currentMessage, setMessage] = useState("");
  const inputRef = useRef(null);
  const messagesEndRef = useRef(null);

  function sendMessage(text)
  {

      if (!text) return;

      const newEcho = {
        id: uuidv4(),
        message: text,
        author: { name: "You", profile: "/pictures/me.jpeg"},
        timeStamp: Date.now()
      };

      setEchoes(prev => [...prev, newEcho]);

      setMessage("");
      inputRef.current.value = "";
      inputRef.current.focus();

  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [echoes]);


  return (
    <div className="flex flex-col items-center w-full h-screen bg-[#121212]">

        { selectedChat ? (
          <>  
            <div className="fixed z-50 top-0 left-0 right-0 flex pl-4 space-x-8 
            items-center w-full h-[8vh] rounded-b-xl bg-[#111111d8]
            shadow-2xl shadow-[#090909]">
              <CircleButton designAdjustments="h-[60%]" image={"/svgs/Back.svg"} className="h-[6vh] pr-1 active:bg-[#2e2e2e]" onClick={() => setSelectedChat(null)}/>
              <Profile className="h-[80%]"></Profile>
              <Title className="text-3xl mt-1">{selectedChat}</Title>
            </div>

            {/* CHAT MESSAGES - This is the scrollable area */}
            <div className=" flex flex-col h-full overflow-y-auto pt-[10vh] pb-[12vh] w-full z-30">
              {echoes.map(echo => <Echo key={echo.id} echoData={echo}/>)}
               <div ref={messagesEndRef} />
            </div>

            {/* USER INPUT FIELD*/}
            <div className="fixed bottom-0 left-0 right-0 w-full p-2 z-50">
              <div className="relative flex items-center w-full h-[7vh] rounded-full bg-linear-to-br from-[#100f1a] to-[#2a053a11] 
              overflow-hidden border-2 transition border-[#be68ff65] shadow-2xl shadow-black">
                <input ref={inputRef} id="input-field" type="text" className="w-[80vw] text-white h-full pl-5 outline-none text-xl" 
                onChange={e => setMessage(e.target.value)} onKeyDown={e => {
                  if (e.key === "Enter")
                    {
                      e.preventDefault();
                      if (currentMessage.trim() !== "") sendMessage(currentMessage)
                    }          
                }}>

                </input>
                <CircleButton designAdjustments="h-[40%] h-[40%]" image="/svgs/Send Black.svg" className="absolute h-[80%] bg-linear-to-tr
                 from-[#272b94] to-[#8f18d8] right-1" onClick={() => sendMessage(currentMessage)}/>
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
