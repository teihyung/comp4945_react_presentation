import { Link, useNavigate} from "react-router-dom";
import "../styles/Navbar.css";
export function Navbar() {
  return (
      <nav className="Navbar">
          <ul>
              <li>
                  <Link to="/">Landing</Link>
              </li>
              <li>
                  <Link to="/main">Main</Link>
              </li>
          </ul>
      </nav>
  );
}