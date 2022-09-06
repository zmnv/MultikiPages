
import {  Link } from "react-router-dom";
//get anime-list

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/main">Main page</Link> </li>
      </ul>
    </nav>
  );
}

export default Navbar;