import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/pricing">Pricing</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/update-profile">Update Profile</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar shadow-xl px-2 md:px-10 lg:px-14">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[100] space-y-4 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          Restate
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>

      <div className="navbar-end">
        {!user && (
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
        )}
        {user && (
          <button
            className="btn btn-sm btn-secondary mr-3"
            onClick={() => {
              logOut();
            }}
          >
            Logout
          </button>
        )}
        {user && (
          <div
            className="tooltip tooltip-bottom mr-6"
            data-tip={user.displayName ? user.displayName : "No name"}
          >
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                {/* <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                /> */}
                <img
                  src={
                    user.photoURL
                      ? user.photoURL
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJgr3kFiNpz9uC3ebTkbozqIiPer2AD3AGZw&s"
                  }
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
