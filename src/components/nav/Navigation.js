import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";

export const Navigation = () => {
  return (
    <ul className="navbar">
      {
          <>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">
              Register
            </Link>
          </li>   
        </>
      }
    </ul>
  );
};