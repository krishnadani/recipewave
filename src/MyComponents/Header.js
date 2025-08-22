import React from "react";
import Search from "./Search";

export default function Header({ setRecipes }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
       
        {/* Logo + Brand */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src="/applogo.png"   // ✅ replace with your logo path
            alt="Logo"
            width="70"
            height="70"
            className="d-inline-block align-text-top me-2"
          />
          Recipe Wave
        </a>

        {/* Toggle button for small screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links + Search */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Recipes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
          </ul>

          {/* Search box pushed fully to right */}
          <div className="d-flex ms-3" role="search">
            <Search setRecipes={setRecipes} />
          </div>
        </div>
      </div>
    </nav>
  );
}
