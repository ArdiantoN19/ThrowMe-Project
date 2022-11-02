import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="bg-white row justify-content-center align-items-center">
      <div className="col-12 col-md-10">
        <div className="position-relative bg-white border border-black border-2 rounded-3 p-2 px-lg-4 bg-effect-shadow">
          <h2 className="fs-2">About ThrowMe</h2>
          <p>
            Position an element at the bottom of the viewport, from edge to
            edge. Be sure you understand the ramifications of fixed position in
            your project; you may need to add additional CSS.
          </p>
          <p>
            Position an element at the bottom of the viewport, from edge to
            edge. Be sure you understand the ramifications of fixed position in
            your project; you may need to add additional CSS.
          </p>
          <Link
            to="/about"
            className="btn position-absolute fw-bold btn-success text-dark border border-2 border-black px-lg-4 py-lg-2 btn-clicked"
            style={{ right: "5%", bottom: "-10%" }}
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
