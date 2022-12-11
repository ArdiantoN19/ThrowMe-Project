import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold fs-3 py-0 text-dark" to="/">
          ThrowMe
        </Link>
        <button
          className="navbar-toggler p-1 fs-5 border-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas bg-light offcanvas-start"
          tabIndex="1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-header border border-bottom">
            <h4
              className="offcanvas-title text-dark fs-2 fw-bold"
              id="offcanvasExampleLabel"
            >
              ThrowMe
            </h4>
            <button
              type="button"
              className="btn-close bg-success"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav ms-md-auto mb-2 mb-lg-0 me-3">
              <li className="nav-item" style={{ fontFamily: "Ubuntu" }}>
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/maps">
                  Map
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
            </ul>
            <div className="d-flex gap-2">
              <Link
                to="/login"
                className="btn btn-success text-uppercase fw-bold border border-black text-dark"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
