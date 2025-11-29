import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center bg-gradient-to-r from-black-600 to-indigo-900  text-white p-10">
        <aside className="">
          <h2 className="text-2xl font-extrabold tracking-wide">
            GameHub Industries Ltd.
          </h2>
          <p className="text-sm opacity-80">
            Providing reliable tech since 1992
          </p>
          <p className="mt-2 text-sm opacity-70">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
