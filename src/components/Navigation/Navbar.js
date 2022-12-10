import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { BiMenuAltRight, BiUser, BiUpArrowAlt } from "react-icons/bi";
import "./navbar.css";

const ArrowUp = () => {
  const [show, setShow] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const toTop = () => {
    window.scrollTo({ top: 0, left: 0 });
  };

  window.addEventListener("scroll", handleScroll);
  return (
    <div className="container">
      {!show ? null : (
        <div className="position-fixed" style={{ right: "7%", bottom: "20px" }}>
          <button
            className="btn rounded btn-success py-2 border border-white"
            onClick={toTop}
          >
            <BiUpArrowAlt className="text-white fs-5" />
          </button>
        </div>
      )}
    </div>
  );
};

const Navbar = ({ authedUser, name, logout }) => {
  const [isOpen, setIsOpen] = useState(false);
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

  const toggle = () => {
    if (window.innerWidth < 1000) {
      setIsOpen(true);
    } else {
      return;
    }
    const offcanvasBackdrop = document.querySelector(".offcanvas-backdrop");
    const navbar = document.querySelector(".navbar");
    offcanvasBackdrop.remove();
    document.body.style.removeProperty("overflow");
    document.body.style.removeProperty("padding-right");
    navbar.style.removeProperty("padding-right");
    setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };

  const location = useLocation();
  const pathName = location.pathname;

  return (
    <nav className="navbar navbar-expand-lg bg-white fixed-top">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-2 py-0 text-dark" to="/">
          <img
            src="/assets/logo.png"
            className="rounded"
            style={{ width: "44px", height: "44px" }}
            alt="Logo ThrowMe"
          />{" "}
          ThrowMe
        </Link>
        <button
          className="navbar-toggler p-1 fs-5 border-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="fs-1">
            <BiMenuAltRight />
          </span>
        </button>
        <div
          className={`offcanvas bg-light offcanvas-end ${
            isOpen ? "d-none" : ""
          }`}
          tabIndex="1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header border border-bottom">
            <img
              src="/assets/logo.png"
              className="rounded"
              style={{ width: "44px", height: "44px" }}
              alt="Logo ThrowMe"
            />{" "}
            <h4
              className="offcanvas-title text-dark fs-2 fw-bold"
              id="offcanvasNavbarLabel"
            >
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
                <Link
                  className={`nav-link ${pathName === "/" ? "active" : null}`}
                  to="/"
                  onClick={toggle}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    pathName === "/maps" ? "active" : null
                  }`}
                  to="/maps"
                  onClick={toggle}
                >
                  Map
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    pathName === "/articles" ? "active" : null
                  }`}
                  to="/articles"
                  onClick={toggle}
                >
                  Article
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    pathName === "/about" ? "active" : null
                  }`}
                  to="/about"
                  onClick={toggle}
                >
                  About Us
                </Link>
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
                  <ul className="dropdown-menu dropdown-menu-lg-end mt-1 p-0">
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/locations"
                        onClick={toggle}
                      >
                        Location
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/profile"
                        onClick={toggle}
                      >
                        Profile
                      </Link>
                    </li>
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
                  onClick={toggle}
                  className="btn border border-success fw-semibold scale"
                >
                  Log In
                </Link>
                <Link
                  to="/register"
                  onClick={toggle}
                  className="btn btn-success fw-semibold text-white px-5 scale"
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
};

Navbar.propTypes = {
  authedUser: PropTypes.object,
  name: PropTypes.string,
  logout: PropTypes.func,
};

export { ArrowUp, Navbar };
