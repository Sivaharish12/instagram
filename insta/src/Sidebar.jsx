import { Link } from "react-router-dom";
import { FaHome, FaUser, FaCompass, FaHeart, FaSignOutAlt } from "react-icons/fa"; // Install react-icons: npm install react-icons

function Sidebar() {
  return (
    <div className="bg-light vh-100 p-3" style={{ position: "sticky", top: 0 }}>
      <h4 className="mb-4">Instagram</h4>
      <ul className="nav flex-column">
        <li className="nav-item mb-3">
          <Link to="/" className="nav-link text-dark">
            <FaHome className="me-2" /> Home
          </Link>
        </li>
        <li className="nav-item mb-3">
          <Link to="/profile" className="nav-link text-dark">
            <FaUser className="me-2" /> Profile
          </Link>
        </li>
        <li className="nav-item mb-3">
          <Link to="/explore" className="nav-link text-dark">
            <FaCompass className="me-2" /> Explore
          </Link>
        </li>
        <li className="nav-item mb-3">
          <Link to="/notifications" className="nav-link text-dark">
            <FaHeart className="me-2" /> Notifications
          </Link>
        </li>
        <li className="nav-item mb-3">
          <Link to="/login" className="nav-link text-dark">
            <FaSignOutAlt className="me-2" /> Logout
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;