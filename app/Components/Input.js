
import Text from "./Text";

function Input({label})
{
    return(

        <div>
            <Text label={label}></Text>
            <input type="text" className="border-2 rounded-md border-[#cfcfcf]"/>
        </div>

    );
}

export default Input; 