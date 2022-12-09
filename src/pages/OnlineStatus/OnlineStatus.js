import React from "react";
const OnlineStatus = () => {
  return (
    <div className="container d-flex flex-column vh-100 vw-100 justify-content-center align-items-center">
      <img
        className="img-fluid"
        src="/assets/illustrations/No data-cuate.svg"
        alt="Offline"
      />
      <h1 className="text-black-50 fs-1">Oops, loss connection</h1>
    </div>
  );
};

export default OnlineStatus;
