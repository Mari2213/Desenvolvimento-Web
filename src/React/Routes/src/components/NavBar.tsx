import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="nav">
      <a href="/">React Routes</a>
      <ul>
        <Link to={"/about"}>Sobre</Link>
        <Link to={"/profile"}>Perfil</Link>
      </ul>
    </nav>
  );
};

export default NavBar;
