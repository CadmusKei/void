
import Title from "./Components/Title";
import Text from "./Components/Text";
import Input from "./Components/Input";
import Password from "./Components/Password";
import Button from "./Components/Button";
import Link from "./Components/Link";

export default function Home() {
  return (

    <div className="flex flex-col items-center justify-center w-full h-screen space-y-5 bg-[#0c0f1b]">
      <Title className="mb-12 text-6xl">Void.</Title>
      <Input id="username" label="Username:"/>
      <Password id="password" label="Password:"/>
      <Button id="signin" label="Sign in"/>
      <Link label="Join the Void" link="/Signup" classname="mt-30"/>
    </div>
      
  );
}
