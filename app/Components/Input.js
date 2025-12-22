
import Text from "./Text";

function Input({label, id})
{
    return(

        <div className="flex flex-col w-[80%] h-[10%]">
            <Text >{label}</Text>
            <input id={id} type="text" className="h-[90%] w-full border-2 rounded-sm border-[#cfcfcf]
            text-primary pl-2"/>
        </div>

    );
}

export default Input; 