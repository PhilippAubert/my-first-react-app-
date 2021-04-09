import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="Nav">
      <NavLink exact to="/">
        {" "}
        Home{" "}
      </NavLink>
      <NavLink to="/about"> About </NavLink>
      <NavLink to="/posts"> Posts </NavLink>
      <NavLink to="/contact"> Contact </NavLink>
    </nav>
  );
}

export default Nav;
