import Image from "next/image";
import logo from "@/assets/logo.png";
import {
  HomeIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import {
  HeartIcon,
  UserIcon,
  BriefcaseIcon,
  CurrencyDollarIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";

function Header() {
  return (
    <div className="sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm">
      <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
        <Image
          src={logo}
          alt="logo"
          fill={true}
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className="flex items-center mx-7 xl:min-w-[300px]">
        <HomeIcon className="h-5 w-5" />
        <p className="flex-1 ml-2 hidden md:inline">Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>

      <form className="flex flex-1 items-center space-x-2 rounded-sm border border-gray-200 bg-gray-100 px-3 py-1">
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
        <input
          className="flex-1 bg-transparent outline-none"
          placeholder="Search"
        />
        <button type="submit" hidden />
      </form>

      <div className="items-center text-gray-500 space-x-2 hidden lg:inline-flex ml-5">
        <HeartIcon className="icon" />
        <UserIcon className="icon" />
        <BriefcaseIcon className="icon" />
        <CurrencyDollarIcon className="icon" />
      </div>
      <div className="ml-5 flex items-center lg:hidden">
        <Bars3Icon className="icon" />
      </div>

      <div className="hidden text-gray-500 lg:flex items-center space-x-2 border-gray-100 cursor-pointer">
        <ArrowRightOnRectangleIcon className="icon" />
        <p>Sign In</p>
      </div>
    </div>
  );
}

export default Header;
