import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-3">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          {/* LEFT: Logo + Name */}
          <div className="flex items-center gap-3">

            {/* Logo */}
            <img
              src="/images/logo.png"
              alt="Logo"
              className="w-20 h-20 object-contain"
            />

            {/* Name + Subtitle */}
            <div className="leading-tight">
              <div className="text-lg font-semibold text-white">
                Caleb Johnson
              </div>
              <div className="text-xs text-gray-400">
                Machine Learning / Data Science / Software Development
              </div>
            </div>

          </div>

          {/* RIGHT: Nav + Social */}
          <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">

            {/* Nav Tabs */}
            <div className="flex gap-4 text-sm">
              <Link to="/" className="hover:text-blue-400 transition">
                Projects
              </Link>
              <Link to="/resume" className="hover:text-blue-400 transition">
                Resume
              </Link>
              <Link to="/contact" className="hover:text-blue-400 transition">
                Contact
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 items-center">

              {/* GitHub */}
              <a
                href="https://github.com/Calebdee"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.01c-3.2.7-3.88-1.54-3.88-1.54-.52-1.31-1.27-1.66-1.27-1.66-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.27-5.23-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.02 0 0 .97-.31 3.18 1.17a11.1 11.1 0 012.9-.39c.99 0 1.99.13 2.9.39 2.21-1.48 3.18-1.17 3.18-1.17.62 1.57.23 2.73.11 3.02.73.8 1.18 1.82 1.18 3.07 0 4.4-2.68 5.37-5.24 5.66.41.35.77 1.04.77 2.1v3.12c0 .31.21.67.8.56A10.51 10.51 0 0023.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/calebdeejohnson"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.6v2.2h.05c.5-.95 1.7-2.2 3.5-2.2 3.75 0 4.45 2.45 4.45 5.65V24h-4v-8.6c0-2.05-.04-4.7-2.85-4.7-2.85 0-3.3 2.2-3.3 4.55V24h-4V8z" />
                </svg>
              </a>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}