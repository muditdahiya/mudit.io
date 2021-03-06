import { Link } from "react-router-dom";
import logo from "./Web.png";
import menu from "./HamburgerMenu.png";
import cross from "./Cross.png";

function Header() {
  return (
    <div className="Header">
      <div className="stage">
        <div className="left">
          <Link className="Link" to={"/"}>
            <img className="logo" src={logo} alt="Home"></img>
          </Link>
        </div>
        <nav className="right">
          <div className="Links">
            <Link className="Link" to={"/about"}>
              About
            </Link>
            <Link className="Link" to={"/projects"}>
              Projects
            </Link>
            <Link className="Link" to={"/hobbies"}>
              Hobbies
            </Link>
            <Link className="Link" to={"/contact"}>
              Contact
            </Link>
          </div>
          <img className="menu" src={menu} alt="menu"></img>
          <img className="cross" src={cross} alt="cross"></img>
        </nav>
      </div>
    </div>
  );
}

export default Header;
