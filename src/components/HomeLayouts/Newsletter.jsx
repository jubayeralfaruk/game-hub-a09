import { MdEmail } from "react-icons/md";

const Newsletter = () => {
  return (
    <div className="bg-base-200 py-16 px-4 text-center">
      <h2 className="text-3xl font-bold flex justify-center items-center gap-2 text-center"><MdEmail></MdEmail> <span>Subscribe to Our Newsletter</span></h2>
      <p className="text-gray-600 mt-2 max-w-md mx-auto">
        Get the latest updates on popular games, new releases, exclusive offers,
        and more—directly to your inbox.
      </p>

      <div className="mt-6 flex max-w-md gap-x-4 mx-auto">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Subscribe
              </button>
            </div>

      <p className="text-xs text-gray-500 mt-3">
        We respect your privacy. Unsubscribe anytime.
      </p>
    </div>
  );
};

export default Newsletter;
