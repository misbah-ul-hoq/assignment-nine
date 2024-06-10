import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useForm } from "react-hook-form";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const { displayName } = user;
  //   console.log(displayName, email, photoURL);
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="flex justify-center items-center py-7">
      <div className="w-full max-w-md p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Update Profile</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="input input-bordered w-full"
              id="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="input input-bordered w-full"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="photoURL"
            >
              Photo URL
            </label>
            <input
              className="input input-bordered w-full"
              id="photoURL"
              type="url"
              placeholder="Enter your photo URL"
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="btn btn-primary w-full" type="submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
