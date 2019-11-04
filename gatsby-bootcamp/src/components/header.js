import React from "react";
import { Link } from "gatsby";
import headerStyles from "../styles/header.module.scss";

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <div>
        <h1 style={{ margin: 0 }}>
          <Link to="/" className={headerStyles.title}>
            GatsbyJS Bootcamp
          </Link>
        </h1>
        <nav>
          <ul className={headerStyles.navList}>
            <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to="/blog"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
