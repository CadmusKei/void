
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

    <div className="flex flex-col items-center w-full h-screen bg-[#0c0f1b]">
        <ChatNav/>
        <div className="flex flex-col items-center bg-red-500 w-[95%] h-[85%] rounded-4xl mt-3 overflow-scroll">
          <ChatCard Voidling="Cadmus"/>
          <ChatCard Voidling="Cadmus"/>
          <ChatCard Voidling="Cadmus"/>
          <ChatCard Voidling="Cadmus"/>
          <ChatCard Voidling="Cadmus"/>
          <ChatCard Voidling="Cadmus"/>
          <ChatCard Voidling="Cadmus"/>
          <ChatCard Voidling="Cadmus"/>
          <ChatCard Voidling="Cadmus"/>
          <ChatCard Voidling="Cadmus"/>
          
      
        </div>
    </div>
      
  );
}
