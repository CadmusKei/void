
function Button({label, id, className, onClick}){
    return (
        <div className="group relative w-[80%] h-[8%]">

            <div className="absolute inset-0 group-hover:opacity-100 opacity-50 transition
             bg-violet-600 blur-sm "></div>

            <button onClick={onClick} id={id} className={` relative flex items-center justify-center
            w-full font-bold text-xl h-full bg-[#202020] active:bg-[#353535] border-violet-400 border-2 
            text-primary rounded-md text-shadow-md text-shadow-[#ffffff35]`}>{label}</button>
            
        </div>
    );
}

export default Button; 