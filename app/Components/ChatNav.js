import Title from "./Title";



export default function ChatNav() {
  return (

    <div className="relative flex flex-col justify-center w-full h-[16%] bg-[#121212]">
    
            <Title className="pl-7 pb-2 text-3xl text-violet-400">Void.</Title>
            <div className="flex items-center bg-[#232323] h-[35%] w-[95%] mx-auto px-4 rounded-full">
              <img
                src="/svgs/Search.svg"
                alt="Search"
                className="w-6 h-6"
                />
                <input
                  type="text"
                  placeholder="Search"
                  className="text-courier pt-1 w-full h-full pl-3 text-primary outline-none"
                />
            </div>
                  
    </div>
      
  );
}