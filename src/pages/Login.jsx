import { useState } from "react";
import { FaEye, FaEyeSlash, FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className="flex justify-center items-center my-8">
      <div className="w-full max-w-md p-8 space-y-4 rounded-lg">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="input input-bordered w-full"
              placeholder="Enter your email"
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
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 text-xl top-5 pr-3 flex items-center"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
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
