import Profile from "./Profile";
import Text from "./Text";

export default function ChatCard({Voidling, profileImage, lastMessage, onClickFunction}) {
  return (

    <div onClick={() => onClickFunction(Voidling)} className="flex items-center w-full min-h-[14%] bg-[#191919] border-[#191919] p-3 space-x-4 active:bg-[#292929] active:shadow-xl active:z-50 active:shadow-[#060508]">
      <Profile className="w-[14%]"/>   
      <div className="flex flex-col justify-center h-full w-full">
        <Text className="font-bold">{Voidling}</Text>
        <p className={`text-[#999999] font-courier text-lg font-bold`}>{lastMessage}</p>
      </div>

    </div>
      
  );
}