import Logo from "./Logo";
import SwitchBtn from "./SwitchBtn";

export default function Header() {
  return (
    <header className=" bg-bg shadow-md ">
      <div className="w-full max-w-6xl h-full flex flex-row justify-between  p-lg mx-auto space-x-4">
        <Logo />
        <SwitchBtn />
      </div>
    </header>
  );
}
