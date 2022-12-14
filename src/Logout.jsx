import axios from "axios";
import "./Logout.css";

export function LogoutLink() {
  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };

  return (
    <a className="nav-link" href="#" onClick={handleClick}>
      Logout
    </a>
  );
}