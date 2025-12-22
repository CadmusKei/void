
import Text from "./Text";

function Password({label, id})
{
    return(

        <div className="flex flex-col w-[80%] h-[10%]">
            <Text >{label}</Text>
            <input id={id} type="password" className="h-[90%] w-full border-2 rounded-sm border-[#cfcfcf]
            text-[#d4d4d4] pl-2"/>
        </div>

    );
}

export default Password; 