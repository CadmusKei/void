
import Title from "../Components/Title";
import Text from "../Components/Text";
import Input from "../Components/Input";
import Password from "../Components/Password";
import Button from "../Components/Button";
import Link from "../Components/Link";
import ChatNav from "../Components/ChatNav";
import ChatCard from "../Components/ChatCard";

export default function Home() {
  return (

    <div className="flex flex-col items-center w-full h-screen bg-[#121212]">
        <ChatNav/>
        <div className="flex flex-col items-center bg-[#232323] w-[95%] h-[80%] rounded-2xl mt-1 overflow-scroll">
          <ChatCard Voidling="Cadmus" lastMessage="You up?"/>
          <ChatCard Voidling="Marcie" lastMessage="Brooooo"/>
          <ChatCard Voidling="Grump Boss" lastMessage="Did you get the email?!"/>
          <ChatCard Voidling="Cadmus" lastMessage="You up?"/>
          <ChatCard Voidling="Marcie" lastMessage="Brooooo"/>
          <ChatCard Voidling="Grump Boss" lastMessage="Did you get the email?!"/>
          <ChatCard Voidling="Cadmus" lastMessage="You up?"/>
          <ChatCard Voidling="Marcie" lastMessage="Brooooo"/>
          <ChatCard Voidling="Grump Boss" lastMessage="Did you get the email?!"/>
          
      
        </div>
    </div>
      
  );
}
