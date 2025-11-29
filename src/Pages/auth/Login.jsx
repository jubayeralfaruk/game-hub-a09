import React, { use } from "react";
import { Link, Navigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";
import useTitle from "../../hooks/useTitle";
import { useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const { user, signIn, setEmail, setUser, googleSingIn } = use(AuthContext);

  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  // const navigater = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    setEmail(email);
    // Email Validation (basic regex)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return setErrorEmail("⚠ Please enter a valid email address.");
    }

    const password = form.password.value;
    // Password Validation
    if (password.length < 6) {
      return setErrorPassword("⚠ Password must be at least 6 characters long.");
    }

    signIn(email, password)
      .then((result) => {
        const userData = result.user;
        setUser(userData);
        toast.success("Login Successfully");
      })
      .catch((error) => {
        const errorMessage = error.message
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

  useTitle("Login");
  return (
    <>
      {user ? (
        <Navigate to={"/"}></Navigate>
      ) : (
        <div className="flex justify-center items-center ">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body ">
              <h2 className="text-3xl mx-auto font-bold">Login now!</h2>
              <form onSubmit={handleLogin}>
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Email"
                    onChange={(e) => {
                      setErrorEmail("");
                      setEmail(e.target.value);
                    }}
                    required
                  />
                  <p className="text-red-400">{errorEmail}</p>
                  <label className="label">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="input"
                    placeholder="Password"
                    onChange={() => setErrorPassword("")}
                    required
                  />
                  <p className="text-red-400">{errorPassword}</p>
                  <div>
                    <Link
                      to={`/auth/forgotPassword`}
                      className="link link-hover"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <button type="submit" className="btn btn-neutral mt-4">
                    Login
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
                  Don’t have an account?{" "}
                  <Link
                    to={"/auth/register"}
                    className="link link-hover text-red-400"
                  >
                    {" "}
                    Register
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

export default Login;
