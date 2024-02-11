import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };
  return (
    <>
      <nav className="navbar bg-primary-subtle">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Reach Hub
          </a>
          <div
            className="d-flex border p-2 border border-primary"
            style={{ cursor: "pointer" }}
            onClick={handleLogout}
          >
            logout
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
