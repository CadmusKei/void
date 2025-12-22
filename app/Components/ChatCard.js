import Text from "./Text";

export default function ChatCard({Voidling}) {
  return (

    <div className="flex items-center w-full min-h-[17%] bg-[#22283e] border
    border-b-[#d3d3d33e] p-3 ">
            <Text>{Voidling}</Text>
    </div>
      
  );
}