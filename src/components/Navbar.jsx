import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-base-100/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3 ">
          <img
            src={"/src/assets/logo.jpg"}
            alt="TravelNow logo"
            className="h-10 w-10 rounded-xl object-cover"
          />
          <span className="text-lg font-bold tracking-tight">TravelNow</span>
        </NavLink>

        {/* Desktop links */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-2">
            <li>
              <NavLink
                to="/"
                className={
                  "px-3 py-2 rounded-lg text-sm font-medium transition hover:bg-base-200"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/destinations"
                className={
                  "px-3 py-2 rounded-lg text-sm font-medium transition hover:bg-base-200"
                }
              >
                Destinations
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={
                  "px-3 py-2 rounded-lg text-sm font-medium transition hover:bg-base-200"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={
                  "px-3 py-2 rounded-lg text-sm font-medium transition hover:bg-base-200"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
