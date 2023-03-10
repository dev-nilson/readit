import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase";
import logo from "@/assets/logo.png";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

function Header() {
  const { pathname } = useRouter();
  const [user] = useAuthState(auth);

  return (
    <div className="sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm space-x-10 items-center justify-center">
      <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            fill={true}
            style={{ objectFit: "contain" }}
          />
        </Link>
      </div>

      <form className="flex-1 items-center space-x-2 rounded-full border border-gray-200 bg-gray-100 px-3 py-1 max-w-2xl hidden sm:flex">
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
        <input
          className="flex-1 bg-transparent outline-none"
          placeholder="Search"
        />
        <button type="submit" hidden />
      </form>

      <div className="flex items-center">
        {user && (
          <button
            className="rounded-full bg-blue-600 hover:bg-blue-500 px-5 py-1 text-white text-md font-bold"
            onClick={() => auth.signOut()}
          >
            Log Out
          </button>
        )}
        {!user && pathname !== "/login" && (
          <Link href="/login">
            <button className="rounded-full bg-blue-600 hover:bg-blue-500 px-5 py-1 text-white text-md font-bold">
              Log In
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
