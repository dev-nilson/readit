import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../../firebase";

function Login() {
  const googleAuth = new GoogleAuthProvider();

  const login = async () => {
    const result = await signInWithPopup(auth, googleAuth);
    console.log(result);
  };

  return (
    <div>
      <div>Login</div>
      <button onClick={login}>Log In</button>
    </div>
  );
}

export default Login;
