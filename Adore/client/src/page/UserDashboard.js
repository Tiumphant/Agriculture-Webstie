import { useEffect, useState, useMemo } from "react";
import "./dash.css";
import { useLocation, useNavigate, Link } from "react-router-dom";

export default function UserDashboard() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const location = useLocation();
  const navigate = useNavigate();

  const publicRoutes = useMemo(
    () => [
      "/",
      "/registration",
      "/login",
      "/service",
      "/contact",
      "/footer",
      "/product",
      "/productlist",
    ],
    []
  );

  useEffect(() => {
    if (!token && !publicRoutes.includes(location.pathname)) {
      navigate("/login");
    }
  }, [token, navigate, location, publicRoutes]);

  const handleLogout = () => {
    console.log("Logging out...");
    localStorage.clear();
    setToken(null);
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="nav">
      {!token ? (
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/registration">Registration</Link>
          </li>
        </ul>
      ) : (
        <>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/service">Service</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/footer">Footer</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
            <li>
              <Link to="/productlist">Product List</Link>
            </li>
          </ul>
          <ul>
            <button onClick={handleLogout}>
              Logout {user?.firstName ? `(${user.firstName})` : ""}
            </button>
          </ul>
        </>
      )}
    </nav>
  );
}
