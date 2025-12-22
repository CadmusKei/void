
function Button({label, id, className}){
    return (
        <div className="w-[80%] h-[8%]">
            <button id={id} className={`flex items-center justify-center hover:bg-violet-700 active:bg-violet-900
            w-full font-bold text-xl h-full bg-violet-800  text-primary rounded-md`}>{label}</button>
        </div>
    );
}

export default Button; 