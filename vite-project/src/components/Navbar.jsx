// ./src/components/Navbar.jsx
import logo from "../assets/discord-logo-white.png";
import menu from "../assets/menu-icon.png";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <img src={menu} alt="menu" className="menu" />
    </nav>
  );
}

export default Navbar;
