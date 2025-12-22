
import Title from "./Components/Title";
import Input from "./Components/Input";

export default function Home() {
  return (

    <div className="flex flex-col items-center justify-center w-full h-screen space-y-10 bg-[#13111e]">
      <Title>Welcome to The Void.</Title>
      <Input label="Username"/>
    </div>
      
  );
}
