import React, { useState, useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Navigate } from "react-router";
import { toast } from "react-toastify";
import useTitle from "../../hooks/useTitle";

const ForgotPassword = () => {
  const { user, email, setEmail, resetPassword } = useContext(AuthContext);
  const [errorEmail, setErrorEmail] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    
    const userEmail = e.target.email.value;
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(userEmail)) {
      return setErrorEmail("⚠ Please enter a valid email address.");
    }else{
      setErrorEmail("")
    }

    resetPassword(userEmail)
      .then(() => {
        toast.success(
          `Password reset email sent! Please check your Gmail inbox: ${userEmail}`
        );

        window.open("https://mail.google.com/mail/", "_blank");
      })
      .catch((error) => {
        toast("Error: " + error.message);
      });
  };

  useTitle("Forgot Password");

  return (
    
    <>
      {user ? (
        <Navigate to="/" replace />
      ) : (
        <div className="flex flex-col items-center justify-center h-[80vh] p-4">
          <h2 className="text-3xl font-bold mb-4">Reset Password</h2>
          <form onSubmit={handleReset} className="w-full max-w-sm">
            <label className="block mb-2 font-semibold">Email</label>
            <input
              type="email"
              onChange={(e) => {
                setErrorEmail("");
                setEmail(e.target.value);
              }}
              value={email}
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full mb-4"
              required
            />
            <p className="text-red-400">{errorEmail}</p>

            <button type="submit" className="btn btn-primary w-full">
              Reset Password
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ForgotPassword;
