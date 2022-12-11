import React from "react";
import { Link } from "react-router-dom";

function Jumbotron() {
  return (
    <div className="row justify-content-center align-items-center">
      <div className="col-12 col-lg-6 text-black order-1 order-lg-0">
        <div className="mt-2 text-center pb-4">
          <p className="fs-1">
            <span>
              Welcome to
              <span className="fs-1 fw-bold text-success"> ThrowMe</span>
            </span>
            , the easy solution for
            <span className="fw-semibold ms-1 px-2 py-1 rounded-3 fs-1 text-white bg-success">
              Trash
            </span>
          </p>
          <p className="fs-5">Let's show your contribution</p>
        </div>
        <Link
          to="/login"
          className="d-block mt-5 w-50 m-auto fw-bold btn btn-success text-uppercase btn-lg border border-2 border-black text-dark btn-clicked"
        >
          Login
        </Link>
      </div>
      <div className="col-12 col-lg-6 order-0 order-lg-1">
        <img src="/assets/recycleBin.webp" className="img-fluid" />
      </div>
    </div>
  );
}

export default Jumbotron;
