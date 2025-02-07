import { NavLink } from "react-router";

const navLinkStyle = ({ isActive }) =>
  isActive
    ? { textDecoration: "underline", color: "#008800" }
    : { textDecoration: "none", color: "#333" };

function Header() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "1rem",
        padding: "1rem",
        justifyContent: "left",
        alignItems: "center",
        backgroundColor: "#AAA",
        fontSize: "1.5rem",
        fontWeight: "bold",
        fontFamily: "Tahoma, Helvetica, sans-serif",
      }}
    >
      <NavLink style={navLinkStyle} to="/">
        Home
      </NavLink>
      <NavLink style={navLinkStyle} to="/movies">
        Movies
      </NavLink>
    </nav>
  );
}

export default Header;
