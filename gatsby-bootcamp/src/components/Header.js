import React from "react";
import { Link } from "gatsby";

const Header = () => {
  return (
    <header>
      <div>
        <h1 style={{ margin: 0 }}>
          <Link to="/" className="text-white">
            GatsbyJS Bootcamp
          </Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
