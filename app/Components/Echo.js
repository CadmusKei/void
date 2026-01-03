import Profile from "./Profile";
import Text from "./Text";

export default function Echo({ echoData})
{
    return (
        <div className="flex items-center justify-center h-20 w-full p-2 space-x-2 hover:bg-neutral-800">
            <Profile profileImage={echoData.author.profile} className="h-[80%]"/>
            <div className="flex flex-col pl-2 pr-4 w-[80%] h-full">
                <div className="flex w-full h-full justify-between">
                    <Text className="font-bold">{echoData.author.name}</Text>
                    <Text className="">
                        {new Date(echoData.timeStamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </Text>
                </div>
                <Text>{echoData.message}</Text>
            </div>
        </div>
    );

}