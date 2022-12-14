import axios from "axios";

export function LogoutLink() {
  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };

  return (
    <button className="mt-3 btn btn-primary">
      <a href="#" onClick={handleClick}></a>
      Logout
    </button>
  );
}
