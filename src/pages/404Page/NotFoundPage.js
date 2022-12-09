import React from "react";

const NotFoundPage = () => {
  return (
    <div className="container mt-5 pt-lg-3">
      <div
        className="row justify-content-center align-items-center"
        style={{ minHeight: "85vh" }}
      >
        <div className="col-10 col-md-6">
          <img
            className="img-fluid"
            src="/assets/illustrations/404 Page.svg"
            alt="404 page"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
