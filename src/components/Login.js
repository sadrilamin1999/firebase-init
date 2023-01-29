import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import app from "../firebase/firebase.init";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((data) => {
        console.log(data);
        navigate("/profile");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="login container mx-auto py-10">
      <h2 className="section-title text-center text-4xl font-medium text-gray-500">
        Login
      </h2>
      <div className="login-platform flex flex-col gap-5 items-center mt-10">
        <button
          onClick={handleGoogleSignIn}
          className="google-sign-in bg-gray-700 text-white h-14 w-96 rounded-md font-medium hover:bg-orange-500 duration-300"
        >
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
