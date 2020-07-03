import Link from "next/link";
import { useRouter } from "next/router";
import { FaHeart, FaBars } from "react-icons/fa";
import "./navbar.css";

const LinkList = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Resume",
    path: "/resume",
  },
  {
    name: "Portfolios",
    path: "/portfolios",
  },
  {
    name: "Blogs",
    path: "/blogs",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="mi-header">
      <button className="mi-header-toggler">
        <FaBars />
      </button>
      <div className="mi-header-inner">
        <div className="mi-header-image">
          <Link href="/">
            <a className="">
              <img
                alt="brandimage"
                className="img-fluid"
                src="/images/mahmudul.jpeg"
              />
            </a>
          </Link>
        </div>
        <ul className="mi-header-menu">
          {LinkList.map((item, i) => (
            <li key={i}>
              <Link href={item.path}>
                <a className={router.pathname == item.path ? "active" : ""}>
                  <span>{item.name}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mi-header-copyright">
          Made with <FaHeart style={{ color: "red" }} /> by Mahmudul
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
