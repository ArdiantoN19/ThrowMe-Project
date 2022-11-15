import React from "react";
import { Link } from "react-router-dom";
import { DataService } from "../../utils/DataService";

function ServiceCard() {
  const datas = DataService();
  return (
    <>
      <h2 className="fs-2 fw-bold mb-4">What can you do?</h2>
      <div className="row gap-lg-2 justify-content-center align-items-center mb-3">
        {datas.map((data) => (
          <div
            className="col-10 col-md-4 col-lg-3 text-center mb-4 mb-lg-2"
            key={data.id}
          >
            <div className="service-content__serviceCard p-2 rounded pb-3">
              <img
                src={data.cardImage}
                className="card-img-top mb-2"
                alt={data.headline}
              />
              <div className="card-body">
                <p className="card-text fs-5 mb-lg-4 text-center">
                  {data.headline}
                </p>
                <Link
                  to={data.linkDest}
                  className="btn fw-bold border border-black border-2 btn-clicked"
                >
                  {data.btnDesc}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ServiceCard;
