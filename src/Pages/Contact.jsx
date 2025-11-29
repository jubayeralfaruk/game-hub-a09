import React from "react";
import useTitle from "../hooks/useTitle";

const Contact = () => {
  useTitle("Contact Us");
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="max-w-xl w-full bg-gray-800 shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>

        <p className="text-center text-gray-400 mb-6">
          Have questions, feedback, or suggestions? We'd love to hear from you!
          Fill out the form below and we'll get back to you as soon as possible.
        </p>

        <form className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="textarea textarea-bordered w-full"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full"
          >
            Send Message
          </button>
        </form>

        {/* Footer Info */}
        <p className="text-sm text-center text-gray-500 mt-6">
          You can also email us at: <span className="font-medium">support@gamehub.com</span>
        </p>
      </div>
    </div>
  );
};

export default Contact;
