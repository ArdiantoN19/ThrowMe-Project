import React from "react";
import { Link } from "react-router-dom";

function Jumbotron() {
  return (
    <div className="row justify-content-center align-items-center">
      <div className="col-12 col-lg-5 text-black order-1 order-lg-0">
        <div className="mt-2 text-center pb-4">
          <p className="fs-1">
            <span>
              Welcome to
              <span className="fs-1 fw-bold text-success"> ThrowMe</span>
            </span>
            , the easy solution for
            <span className="fw-bold ms-1 px-2 py-1 rounded-3 fs-1 text-white bg-success">
              Trash
            </span>
          </p>
          <p className="fs-5">Let's try to see the maps</p>
        </div>
        <Link
          to="/maps"
          className="d-block mt-5 w-50 m-auto fw-bold btn btn-white text-uppercase btn-lg border border-2 border-black text-dark btn-clicked"
        >
          Go map's
        </Link>
      </div>
      <div className="col-12 col-lg-7 order-0 order-lg-1">
        <picture>
          <source
            className="img-fluid"
            sizes="(max-width: 600px)"
            srcSet="/assets/illustrations/recycleBin-small.jpg"
            type="image/jpeg"
          />
          <source
            className="img-fluid"
            srcSet="/assets/illustrations/recycleBin.webp"
            type="image/webp"
          />
          <img
            className="img-fluid"
            src="/assets/illustrations/recycleBin-large.jpg"
            alt="many person recyle"
          />
        </picture>
      </div>
    </div>
  );
}

export default Jumbotron;
