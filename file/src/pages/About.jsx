import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../css/about.css";

function About() {
  return (
    <div>
      <h1>About</h1>
      <hr style={{ marginBottom: "20px" }} />
      <div>
        <Link className="link_about" to="employee">
          Employee
        </Link>
        <Link className="link_about" to="company">
          Company
        </Link>
        <Outlet />
      </div>
    </div>
  );
}

export default About;
