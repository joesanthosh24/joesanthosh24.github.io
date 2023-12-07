import { NavLink } from "react-router-dom";

import "./navbar-component.styles.css";

const Navbar = () => {
  return (
    <div className="navbarContainer" role="banner">
      <NavLink to="/" title="Empower Ability Labs Logo">
        <img
          className="page-logo"
          src="./images/empowerabilitylabslogo.png"
          alt="Empower Ability Labs Logo"
        />
      </NavLink>
      <nav aria-label="Empower Ability Labs">
        <div>
          <ul
            className="aNavbarList"
            role="menubar"
            aria-label="Empower Ability Labs"
          >
            <li role="none">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending itemLink"
                    : isActive
                    ? "activeItemLink itemLink"
                    : "itemLink"
                }
                role="menuitem"
                title="Home Page"
              >
                Home
              </NavLink>
            </li>
            <li role="none">
              <NavLink
                to="/services"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending itemLink"
                    : isActive
                    ? "activeItemLink itemLink"
                    : "itemLink"
                }
                role="menuitem"
                title="Services Page"
              >
                Services
              </NavLink>
            </li>
            <li role="none">
              <NavLink
                to="/schedule-call"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending itemLink"
                    : isActive
                    ? "activeItemLink itemLink"
                    : "itemLink"
                }
                role="menuitem"
                title="Schedule a Call Page"
              >
                Schedule a Call
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
