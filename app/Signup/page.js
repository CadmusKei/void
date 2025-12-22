
import Title from "../Components/Title";
import Text from "../Components/Text";
import Input from "../Components/Input";
import Password from "../Components/Password";
import Button from "../Components/Button";
import Link from "../Components/Link";

export default function Home() {
  return (

    <div className="flex flex-col items-center justify-center w-full h-screen space-y-5 bg-[#121212]">
      <Title className="mb-12 text-3xl font-bold">Welcome to the Void.</Title>
      <Input id="username" label="Username:"/>
      <Password id="password" label="Password:"/>
      <Password id="confirm" label="Confirm Password:"/>
      <Button id="signup" label="Join The Void"/>
      <Link label="Start messaging" link="/" classname="mt-20"/>
    </div>
      
  );
}
