import Image from "next/image";
import logo from "@/assets/logo.png";

function Header() {
  return (
    <div>
      <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
        <Image src={logo} alt="logo" style={{ objectFit: "contain" }} />
      </div>
    </div>
  );
}

export default Header;
