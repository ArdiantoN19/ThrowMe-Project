import React from "react";
import { Link } from "react-router-dom";
import { ImLocation } from "react-icons/im";

function BrowserMap() {
  return (
    <>
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="col-12 col-md-6 col-lg-5">
          <h2 className="fs-2 fw-bold">What's new in your area?</h2>
        </div>
        <div className="col-1 bg-black line"></div>
        <div className="col-4 mt-4 mt-md-0 col-md-4 col-lg-2 d-none d-md-block">
          <Link
            to="/maps"
            className="btn fw-bold btn-white text-dark border border-2 border-black btn-clicked px-3"
          >
            Look more
          </Link>
        </div>
      </div>
      <div className="row g-3 row-cols-2 row-cols-md-3 row-cols-lg-4 justify-content-center align-items-center mt-5">
        <div className="col">
          <div className="card shadow-sm">
            <img
              className="img-card-top rounded-top"
              src="/assets/park.jpg"
              alt="park"
            />
            <div className="card-body p-2">
              <Link
                to="/detail/id"
                className="text-decoration-none fs-5 py-2 text-black fw-semibold"
              >
                Rose park
              </Link>
              <br />
              <small className="text-success">Plastik, Glass</small>
              <div className="d-flex justify-content-between aling-items-center">
                <small>1400 Massachusetts Ave, Cambridge </small>
                <ImLocation className="text-success fs-4" />
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
            <img
              className="img-card-top rounded-top"
              src="/assets/park.jpg"
              alt="park"
            />
            <div className="card-body p-2">
              <Link
                to="/detail/id"
                className="text-decoration-none fs-5 py-2 text-black fw-semibold"
              >
                Rose park
              </Link>
              <br />
              <small className="text-success">Plastik, Glass</small>
              <div className="d-flex justify-content-between aling-items-center">
                <small>1400 Massachusetts Ave, Cambridge </small>
                <ImLocation className="text-success fs-4" />
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
            <img
              className="img-card-top rounded-top"
              src="/assets/park.jpg"
              alt="park"
            />
            <div className="card-body p-2">
              <Link
                to="/detail/id"
                className="text-decoration-none fs-5 py-2 text-black fw-semibold"
              >
                Rose park
              </Link>
              <br />
              <small className="text-success">Plastik, Glass</small>
              <div className="d-flex justify-content-between aling-items-center">
                <small>1400 Massachusetts Ave, Cambridge </small>
                <ImLocation className="text-success fs-4" />
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
            <img
              className="img-card-top rounded-top"
              src="/assets/park.jpg"
              alt="park"
            />
            <div className="card-body p-2">
              <Link
                to="/detail/id"
                className="text-decoration-none fs-5 py-2 text-black fw-semibold"
              >
                Rose park
              </Link>
              <br />
              <small className="text-success">Plastik, Glass</small>
              <div className="d-flex justify-content-between aling-items-center">
                <small>1400 Massachusetts Ave, Cambridge </small>
                <ImLocation className="text-success fs-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BrowserMap;
