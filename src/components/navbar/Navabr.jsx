import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-20 w-full colored_bg text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-5 xl:px-28">
        <NavLink
          to="/"
          className="text-2xl font-medium font-heading text-white heading"
        >
          نخستین جشنواره استعدادهای برتر فرهنگی، هنری و ادبی.
        </NavLink>

        <ul className="md:flex gap-8 text-base font-medium font-heading">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:link__hover ${isActive ? "active" : ""}`
            }
          >
            درباره من
          </NavLink>

          <NavLink
            to="/photographies"
            className={({ isActive }) =>
              `hover:link__hover ${isActive ? "active" : ""}`
            }
          >
            عکس های برگزیده
          </NavLink>

          <NavLink
            to="/poems"
            className={({ isActive }) =>
              `hover:link__hover ${isActive ? "active" : ""}`
            }
          >
            اشعار برگزیده
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}
