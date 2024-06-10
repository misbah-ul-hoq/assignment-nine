import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useForm } from "react-hook-form";

const UpdateProfile = () => {
  const { user, updateUserInfo } = useContext(AuthContext);
  const { displayName, email, photoURL } = user;
  const [messages, setMessages] = useState({ success: "", error: "" });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      displayName,
      email,
      photoURL,
    },
  });

  const onSubmit = (userInfo) => {
    updateUserInfo(userInfo)
      .then(() => {
        setMessages({ success: "Updated successfully", error: "" });
      })
      .catch(() => {
        setMessages({ success: "", error: "Something went wrong" });
      });
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
              {...register("displayName", {
                required: "Name is Required",
              })}
              //   onChange={(e) => setValue("displayName", e.target.value)}
            />
            <p className="text-error">{errors.displayName?.message}</p>
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
              {...register("email", {
                required: "Email is required",
              })}
            />
            <p className="text-error">{errors.email?.message}</p>
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
              {...register("photoURL")}
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="btn btn-primary w-full" type="submit">
              Update Profile
            </button>
          </div>
        </form>
        <p className={`${messages.error ? "text-error" : "text-success"}`}>
          {messages.error ? messages.error : messages.success}
        </p>
      </div>
    </div>
  );
};

export default UpdateProfile;
