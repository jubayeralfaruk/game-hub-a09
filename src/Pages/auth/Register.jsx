import React, { useState } from "react";
import { Link, Navigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";
import useTitle from "../../hooks/useTitle";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, user, setUser, updateUser, googleSingIn } =
    useContext(AuthContext);

  const [errorName, setErrorName] = useState("");
  const [errorPhoto, setErrorPhoto] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  // const navigater = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    // Name Validation
    if (name.length < 3) {
      return setErrorName("⚠ Name must be at least 3 characters long.");
    }

    const email = form.email.value;
    // Email Validation (basic regex)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return setErrorEmail("⚠ Please enter a valid email address.");
    }

    const photo = form.photoUrl.value;
    // Photo URL Validation (must start with http:// or https://)
    if (photo && !/^https?:\/\//.test(photo)) {
      return setErrorPhoto(
        "⚠ Please provide a valid Photo URL (must start with http:// or https://)"
      );
    }

    const password = form.password.value;
    // Password Validation
    if (!/[A-Z]/.test(password)) {
      return setErrorPassword(
        "⚠ Password must include at least one uppercase letter."
      );
    }
    if (!/[a-z]/.test(password)) {
      return setErrorPassword(
        "⚠ Password must include at least one lowercase letter."
      );
    }
    if (password.length < 6) {
      return setErrorPassword("⚠ Password must be at least 6 characters long.");
    }

    createUser(email, password)
      .then((result) => {
        // const userData = result.user;
        updateUser({ displayName: name, photoURL: photo }).then(() => {
          setUser({ ...result.user, displayName: name, photoURL: photo });
          toast.success("Register SuccessFully");
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        errorMessage && toast.error(errorMessage);
      });
  };
  const handleWithGoogle = () => {
    googleSingIn()
      .then((result) => {
        setUser(result.user);
        toast.success("Register SuccessFully");
      })
      .catch((error) => {
        const errorMessage = error.message;
        errorMessage && toast.error(errorMessage);
      });
  };

  useTitle("Register");
  return (
    <>
      {user ? (
        <Navigate to={"/"}></Navigate>
      ) : (
        <div className="flex justify-center items-center">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body ">
              <h2 className="text-3xl mx-auto font-bold">Register now!</h2>
              <form onSubmit={handleRegister}>
                <fieldset className="fieldset">
                  {/* name */}
                  <label className="label">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="input"
                    placeholder="Name"
                    onChange={() => setErrorName("")}
                    required
                  />
                  <p className="text-red-400">{errorName}</p>
                  {/* Photo Url */}
                  <label className="label">Photo Url</label>
                  <input
                    type="text"
                    name="photoUrl"
                    className="input"
                    placeholder="Photo URL"
                    onChange={() => setErrorPhoto("")}
                    required
                  />
                  <p className="text-red-400">{errorPhoto}</p>
                  {/* email */}
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Email"
                    onChange={() => setErrorEmail("")}
                    required
                  />
                  <p className="text-red-400">{errorEmail}</p>
                  {/* password */}
                  <label className="label">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="input"
                    placeholder="Password"
                    onChange={() => setErrorPassword("")}
                    required
                  />
                  {errorPassword && (
                    <p className="text-red-400">{errorPassword}</p>
                  )}

                  <button type="submit" className="btn btn-neutral mt-4">
                    Register
                  </button>
                </fieldset>
              </form>
              <div className="">
                <button
                  onClick={handleWithGoogle}
                  className="btn w-full border-[#e5e5e5]"
                >
                  <svg
                    aria-label="Google logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path d="m0 0H512V512H0" fill="#fff"></path>
                      <path
                        fill="#34a853"
                        d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                      ></path>
                      <path
                        fill="#4285f4"
                        d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                      ></path>
                      <path
                        fill="#fbbc02"
                        d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                      ></path>
                      <path
                        fill="#ea4335"
                        d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                      ></path>
                    </g>
                  </svg>
                  Continue with Google
                </button>
              </div>
              <div className="">
                <p>
                  Already have an account?{" "}
                  <Link
                    to={"/auth/login"}
                    className="link link-hover text-red-400"
                  >
                    {" "}
                    Login
                  </Link>
                </p>
                {/* error box */}
                <div className=""></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
