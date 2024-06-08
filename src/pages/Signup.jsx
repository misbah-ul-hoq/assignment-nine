import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { useState } from "react";

const Signup = () => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("fullname");
    const email = form.get("email");
    const password = form.get("password");
    setErrorMessage("");
    if (!password.match(regex)) {
      setErrorMessage(
        "Plese provide at least 6 characters and at least one uppercase and lowercase letter"
      );
      return;
    }
  };

  useDocumentTitle("SignUp");
  return (
    <div className="py-8 flex flex-col bg-no-repeat bg-cover bg-[url(/blob3.svg)]">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="px-6 py-5 rounded text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="fullname"
              placeholder="Full Name"
              required
            />
            <input
              type="email"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              required
              placeholder="Email"
            />
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              required
            />
            <button
              type="submit"
              className="btn btn-primary w-full text-center py-3 rounded bg-green text-white  my-1"
            >
              Create Account
            </button>

            <p className="text-error">{errorMessage && errorMessage}</p>
          </form>
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
