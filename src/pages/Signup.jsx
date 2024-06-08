import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";

const Signup = () => {
  useDocumentTitle("SignUp");
  return (
    <div className="py-8 flex flex-col bg-no-repeat bg-cover bg-[url(/blob3.svg)]">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="px-6 py-5 rounded text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="fullname"
            placeholder="Full Name"
          />

          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
          />

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
          />

          <button
            type="submit"
            className="btn btn-primary w-full text-center py-3 rounded bg-green text-white  my-1"
          >
            Create Account
          </button>
        </div>

        <div className="">
          Already have an account?
          <Link className="text-info text-lg px-1" to="/login">
            Log in
          </Link>
          .
        </div>

        <div className="divider">OR</div>

        <button className="btn btn-outline w-full flex items-center justify-center space-x-2 bg-white border mb-4">
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

export default Signup;
