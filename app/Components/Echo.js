import Profile from "./Profile";
import Text from "./Text";

export default function Echo({ echoData})
{
    return (
        <div className="flex items-center justify-start w-full p-2 space-x-2 hover:bg-neutral-800">
            <Profile profileImage={echoData.author.profile} className="self-start h-12"/>
            <div className="flex flex-col pl-2 pr-4 max-w-[80%] h-full">
                <div className="flex w-full space-x-30">
                    <Text className="font-bold ">{echoData.author.name}</Text>
                    <p className="font-courier text-[#6c6c6c] text-md">
                        {new Date(echoData.timeStamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                </div>
                <Text className="">{echoData.message}</Text>
            </div>
        </div>
    );

}