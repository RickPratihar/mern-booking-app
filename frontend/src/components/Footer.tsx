const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-600 py-12 px-6 md:px-12 w-full transition-all duration-300">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-10">
          <a
            href="#!"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-slate-200 hover:bg-blue-600 hover:border-blue-500 hover:text-white transition-all duration-300 shadow-sm"
            aria-label="Facebook"
          >
            <i className="fa-brands fa-facebook-f text-sm"></i>
          </a>
          <a
            href="#!"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-slate-200 hover:bg-cyan-500 hover:border-cyan-400 hover:text-white transition-all duration-300 shadow-sm"
            aria-label="Twitter"
          >
            <i className="fa-brands fa-x-twitter text-sm"></i>
          </a>
          <a
            href="#!"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-slate-200 hover:bg-red-500 hover:border-red-400 hover:text-white transition-all duration-300 shadow-sm"
            aria-label="Google"
          >
            <i className="fa-brands fa-google text-sm"></i>
          </a>
          <a
            href="#!"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-slate-200 hover:bg-pink-600 hover:border-pink-500 hover:text-white transition-all duration-300 shadow-sm"
            aria-label="Instagram"
          >
            <i className="fa-brands fa-instagram text-sm"></i>
          </a>
          <a
            href="#!"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-slate-200 hover:bg-blue-700 hover:border-blue-600 hover:text-white transition-all duration-300 shadow-sm"
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin-in text-sm"></i>
          </a>
          <a
            href="#!"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-slate-200 hover:bg-slate-700 hover:border-slate-600 hover:text-white transition-all duration-300 shadow-sm"
            aria-label="GitHub"
          >
            <i className="fa-brands fa-github text-sm"></i>
          </a>
        </div>

        {/* Newsletter Signup */}
        <div className="w-full max-w-3xl mb-12 bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-left flex-1 md:pr-4">
              <h4 className="text-slate-800 font-bold text-base md:text-lg tracking-tight">
                Sign up for our newsletter
              </h4>
              <p className="text-xs text-slate-500 mt-1">Get the latest travel deals, updates, and stays sent to your inbox.</p>
            </div>
            <div className="flex w-full md:w-auto items-stretch gap-2.5 flex-1 max-w-md">
              <input
                type="email"
                required
                className="flex-1 rounded border border-slate-300 focus:border-blue-500 px-4 py-2 text-sm text-slate-800 placeholder-slate-400 outline-none transition-colors duration-200 bg-slate-50"
                placeholder="Email address"
              />
              <button
                type="submit"
                className="px-6 py-2.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded transition-all duration-300 shadow-md"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>

        {/* Brand Description */}
        <div className="max-w-2xl text-center mb-12 px-4">
          <p className="text-sm text-slate-600 leading-relaxed">
            Unlock your dream getaway with our curated selection of hotels worldwide. Book now for unbeatable rates, seamless reservations, and unforgettable experiences. Your journey begins with us.
          </p>
        </div>

        {/* Grid Footer Links */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 text-left border-t border-slate-200 pt-12">
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-4">Customer Support</h5>
            <ul className="flex flex-col gap-2.5 text-xs text-slate-600">
              <li><a href="#!" className="hover:text-blue-600 transition-colors duration-200">About Us</a></li>
              <li><a href="#!" className="hover:text-blue-600 transition-colors duration-200">Contact Us</a></li>
              <li><a href="#!" className="hover:text-blue-600 transition-colors duration-200">Our Services</a></li>
              <li><a href="#!" className="hover:text-blue-600 transition-colors duration-200">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-4">Legal & Resource</h5>
            <ul className="flex flex-col gap-2.5 text-xs text-slate-600">
              <li><a href="#!" className="hover:text-blue-600 transition-colors duration-200">Terms of Service</a></li>
              <li><a href="#!" className="hover:text-blue-600 transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#!" className="hover:text-blue-600 transition-colors duration-200">Blog</a></li>
              <li><a href="#!" className="hover:text-blue-600 transition-colors duration-200">Careers</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-4">Partner Programs</h5>
            <ul className="flex flex-col gap-2.5 text-xs text-slate-600">
              <li><a href="#!" className="hover:text-blue-600 transition-colors duration-200">Deals & Offers</a></li>
              <li><a href="#!" className="hover:text-blue-600 transition-colors duration-200">Customer Reviews</a></li>
              <li><a href="#!" className="hover:text-blue-600 transition-colors duration-200">Destinations</a></li>
              <li><a href="#!" className="hover:text-blue-600 transition-colors duration-200">Loyalty Program</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-4">Business Solutions</h5>
            <ul className="flex flex-col gap-2.5 text-xs text-slate-600">
              <li><a href="#!" className="hover:text-blue-600 transition-colors duration-200">Gift Cards</a></li>
              <li><a href="#!" className="hover:text-blue-600 transition-colors duration-200">Travel Tips</a></li>
              <li><a href="#!" className="hover:text-blue-600 transition-colors duration-200">Partner With Us</a></li>
              <li><a href="#!" className="hover:text-blue-600 transition-colors duration-200">Site Map</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="w-full border-t border-slate-200 mt-8 pt-6 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a
          className="font-bold text-slate-600 hover:text-blue-600 transition-colors duration-200"
          href="https://rickpratihar-portfolio.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rick Pratihar
        </a>
      </div>
    </footer>
  );
};

export default Footer;
