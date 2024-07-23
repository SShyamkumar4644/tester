import React from "react";
import "./Style.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Link to="/list">All Students</Link>
      <Link to="/">Add new Student</Link>
    </div>
  );
}

export default NavBar;
