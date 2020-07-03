import "./navbar.css";

import { FaHeart, FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mi-header">
      <button className="mi-header-toggler">
        <FaBars />
      </button>
      <div className="mi-header-inner">
        <div className="mi-header-image">
          <a href="/" className="">
            <img
              alt="brandimage"
              className="img-fluid"
              src="/images/mahmudul.jpeg"
            />
          </a>
        </div>
        <ul className="mi-header-menu">
          <li>
            <a aria-current="page" className="active" href="/">
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="/about.html">
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="/resume.html">
              <span>Resume</span>
            </a>
          </li>
          <li>
            <a href="/portfolio.html">
              <span>Portfolios</span>
            </a>
          </li>
          <li>
            <a href="/blog.html">
              <span>Blogs</span>
            </a>
          </li>
          <li>
            <a href="/contact.html">
              <span>Contact</span>
            </a>
          </li>
        </ul>
        <p className="mi-header-copyright">
          Made with <FaHeart style={{ color: "red" }} /> by Mahmudul
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
