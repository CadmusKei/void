
'use client'

import Text from "../Components/Text";
import Profile from "../Components/Profile";
import CircleButton from "../Components/CircleButton";
import Title from "../Components/Title";
import ChatNav from "../Components/ChatNav";
import ChatCard from "../Components/ChatCard";
import { useState, useEffect } from "react";

import backImage from "../../public/svgs/Back.svg";



export default function Home() {

  const [selectedChat, setSelectedChat] = useState(null);

  useEffect(() => {
  console.log(selectedChat)
},  [selectedChat]); 

  return (
    <div className="flex flex-col items-center w-full h-screen bg-[#121212]">

        { selectedChat ? (

          <>  
            <div className="fixed z-50 top-0 left-0 right-0 flex pl-4 space-x-5 items-center w-full h-[8vh] rounded-b-xl bg-[#111111c2]">
              <CircleButton image={backImage} className="w-[10vw]" onClick={() => setSelectedChat(null)}/>
              <Profile className="w-[11vw]"></Profile>
              <Title className="text-3xl">{selectedChat}</Title>
            </div>

            {/* CHAT MESSAGES - This is the scrollable area */}
            <div className="overflow-y-auto ">
            </div>

            {/* USER INPUT FIELD*/}
            <div className="fixed bottom-0 left-0 right-0 w-full p-2 z-50 bg-[#111111c2]">
              <div className="flex items-center space-x-2 w-full h-[7vh] rounded-full bg-[#282828] overflow-hidden border-2 border-neutral-600">
                <input id="input-field" type="text" className="w-[80vw] h-full pl-5 outline-none text-xl" ></input>
                <CircleButton className="h-[90%]" onClick={() => sendMessage()}/>
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
