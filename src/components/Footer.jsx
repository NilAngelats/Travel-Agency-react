import { Link, NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="border-t border-base-300 mt-16">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-sm text-base-content/70">
              <li>
                <Link to={"/contact"}>Contact us</Link>
              </li>
              <li>Help center</li>
              <li>Travel insurance</li>
              <li>Accessibility support</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Hosting</h3>
            <ul className="space-y-2 text-sm text-base-content/70">
              <li>Become a host</li>
              <li>Host resources</li>
              <li>Community forum</li>
              <li>Safety for hosts</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">TravelNow</h3>
            <ul className="space-y-2 text-sm text-base-content/70">
              <li>
                {" "}
                <Link to={"/"}> Home</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to={"/destinations"}> Destinations</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to={"/about"}> About</Link>{" "}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-base-300 mt-10 pt-6 flex flex-col md:flex-row justify-between text-sm text-base-content/60">
          <span>Copyright 2026 - TravelNow</span>

          <div className="flex gap-6 mt-4 md:mt-0">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
