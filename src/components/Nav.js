import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/signin">Home</Link>
        </li>
        <li>
          <Link to="/signin">Log Out</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;