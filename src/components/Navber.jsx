import { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import userImage from "../assets/user.png";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logout } = use(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {
        toast("Logout Successfully");
      })
      .catch((error) => {
        toast.error.log(error.message);
      });
  };

  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      {/* Left: Logo + Mobile Dropdown Menu */}
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>

          {/* Mobile Menu */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/all-games">All Games</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            {user ? (
              <li>
                <button onClick={handleLogout} className=" text-red-200 ">
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li>
                  <NavLink to="/auth/login">Login</NavLink>
                </li>
                <li>
                  <NavLink to="/auth/register">Register</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Logo */}
        <Link to="/" className="btn btn-ghost text-xl">
          GameHub
        </Link>
      </div>

      {/* Center: Desktop Menu */}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/all-games">All Games</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          {user ? (
            <li>
              <button onClick={handleLogout} className=" text-red-200 ">
                Logout
              </button>
            </li>
          ) : (
            <>
              <li>
                <NavLink to="/auth/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/auth/register">Register</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* Right: Profile Dropdown (Always Visible as Requested) */}
      {user && (
        <Link to={"/my-profile"} className="w-full lg:w-10 flex justify-end">
          <details className="dropdown dropdown-end">
            <summary className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src={user.photoURL ? user.photoURL : userImage}
                  alt="Profile"
                />
              </div>
            </summary>
          </details>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
