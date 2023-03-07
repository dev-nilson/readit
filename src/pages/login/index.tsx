import Image from "next/image";
import { useRouter } from "next/router";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase";
import logo from "@/assets/logo.png";
import google from "@/assets/google.png";

function Login() {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const googleAuth = new GoogleAuthProvider();

  const login = async () => {
    await signInWithPopup(auth, googleAuth);
  };

  if (user) router.push("/");

  return (
    <div className="bg-white h-full flex flex-col items-center gap-10 justify-start text-gray-700">
      <div className="max-w-xl text-center pt-40 px-2 flex flex-col gap-3 items-center">
        <Image
          src={logo}
          alt="logo"
          width={200}
          height={50}
          style={{ objectFit: "contain" }}
        />
        <p className="text-sm">
          Share your wisdom with the world! What&apos;s the best piece of advice
          you&apos;ve ever received or given? Post it on our platform and help
          others navigate through life&apos;s challenges
        </p>
      </div>
      <button
        className="flex items-center border-[1px] rounded-full border-gray-300 font-semibold px-5 py-2 hover:bg-slate-100 hover:border-blue-200"
        onClick={login}
      >
        <Image src={google} width={30} alt="google logo" />
        Continue with Google
      </button>
    </div>
  );
}

export default Login;
