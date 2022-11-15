import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { BiMenuAltRight, BiUser } from "react-icons/bi";

function Navbar({ authedUser, name, logout }) {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        document.querySelector(".navbar").classList.add("shadow-sm");
      } else {
        document.querySelector(".navbar").classList.remove("shadow-sm");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-white fixed-top">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-2 py-0 text-dark" to="/">
          <img
            src="/assets/logo.png"
            className="rounded"
            style={{ width: "45px", height: "45px" }}
            alt="Logo ThrowMe"
          />{" "}
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
          <span className="fs-1">
            <BiMenuAltRight />
          </span>
        </button>
        <div
          className="offcanvas bg-light offcanvas-end"
          tabIndex="1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-header border border-bottom">
            <h4
              className="offcanvas-title text-dark fs-2 fw-bold"
              id="offcanvasExampleLabel"
            >
              <img
                src="/assets/logo.png"
                className="rounded"
                style={{ width: "45px", height: "45px" }}
                alt="Logo ThrowMe"
              />{" "}
              ThrowMe
            </h4>
            <button
              type="button"
              className="btn-close "
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul
              className="navbar-nav ms-md-auto mb-2 mb-lg-0 me-3"
              style={{ fontFamily: "Ubuntu" }}
            >
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/maps">
                  Map
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/articles">
                  Article
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About Us
                </NavLink>
              </li>
            </ul>
            {authedUser !== null ? (
              <div className="d-flex align-items-center">
                <div className="dropdown">
                  <button
                    className="btn btn-secondary fs-5 dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <BiUser className="fs-4 text-success" /> {name}
                  </button>
                  <ul className="dropdown-menu mt-2">
                    <li>
                      <button className="dropdown-item" onClick={logout}>
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="d-flex gap-2">
                <Link
                  to="/login"
                  className="btn border border-success fw-semibold"
                >
                  Log In
                </Link>
                <Link
                  to="/register"
                  className="btn btn-success fw-semibold text-white px-5"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  authedUser: PropTypes.object,
  name: PropTypes.string,
  logout: PropTypes.func,
};

export default Navbar;
