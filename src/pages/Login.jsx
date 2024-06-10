import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaFacebook, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { AuthContext } from "../Providers/AuthProvider";

const Login = () => {
  useDocumentTitle("LogIn");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const { logInWithEmailAndPassword } = useContext(AuthContext);

  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    logInWithEmailAndPassword(email, password)
      .then(() => {
        navigate(navigate.location ? navigate.location : "/");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className="flex justify-center items-center py-8 bg-[url('/blob.svg')] bg-no-repeat bg-cover">
      <div className="w-full max-w-md px-8 space-y-4 rounded-lg">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="input input-bordered w-full"
              placeholder="Enter your email"
              name="email"
              required
            />
          </div>
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type={passwordVisible ? "text" : "password"}
              className="input input-bordered w-full"
              placeholder="Enter your password"
              name="password"
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 text-xl top-5 pr-3 flex items-center"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
            {errorMessage && <p className="text-error">{errorMessage}</p>}
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>
        </form>
        <p>
          Not have an account yet?{" "}
          <Link to="/signup" className="text-lg text-info">
            SignUp
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full flex items-center justify-center space-x-2 bg-white border">
          <FaGoogle></FaGoogle>
          <span className="">Login with Google</span>
        </button>
        <button className="btn btn-outline w-full bg-blue-500 flex items-center justify-center text-white hover:bg-blue-600">
          <FaFacebook />
          <span>Login with Facebook</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
