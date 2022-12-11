import React from "react";
import { Link } from "react-router-dom";
import { DataService } from "../../utils/DataService";

function ServiceCard() {
  const datas = DataService();
  return (
    <div className="row justify-content-between align-items-center">
      {datas.map((data) => (
        <div
          className="col-12 col-md-4 col-lg-3 text-center mb-4 mb-lg-2"
          key={data.id}
        >
          <div>
            <img
              src={data.cardImage}
              className="img-fluid mb-2"
              alt={data.headline}
            />
            <p className="fs-5 mb-lg-4 text-center">{data.headline}</p>
            <Link
              to="/maps"
              className="btn fw-bold border border-black border-2 btn-clicked"
            >
              {data.btnDesc}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ServiceCard;
