import { NavLink } from "react-router-dom";
import CustomIcon from "../../public/icons/CustomIcon";
import CustomIcon2 from "../../public/icons/CustomIcon2";
import CustomIcon3 from "../../public/icons/CustomIcon3";

function Navbar() {
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "#FFAE5A" : "",
    };
  };
  return (
    <header>
      <div className="logo">
        <h1>SNEAKS</h1>
      </div>
      <nav>
        <NavLink style={navLinkStyles} to="/">
          Home
        </NavLink>

        <NavLink style={navLinkStyles} to="/products">
          Products
        </NavLink>

        <NavLink style={navLinkStyles} to="/about">
          About
        </NavLink>

        <NavLink style={navLinkStyles} to="/contact-us">
          Contact Us
        </NavLink>
      </nav>
      <div className="icons">
        <NavLink>
          <CustomIcon2 />
        </NavLink>

        <NavLink>
          <CustomIcon3 />
        </NavLink>

        <NavLink to="cart">
          <CustomIcon />
        </NavLink>
      </div>
    </header>
  );
}

export default Navbar;
