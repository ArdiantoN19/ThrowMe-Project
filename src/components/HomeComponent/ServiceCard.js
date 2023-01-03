import React from "react";
import { Link } from "react-router-dom";
import { DataService } from "../../utils/DataService";
import { getAccessToken } from "../../utils/api";

const ServiceCard = () => {
  const datas = DataService();
  const accessToken = getAccessToken();

  return (
    <>
      <h2 className="fs-2 fw-bold mb-5 pt-4">What can you do?</h2>
      <div className="row align-items-center justify-content-center">
        <div className="col-11 col-md-12">
          {datas.map((data) =>
            data.id !== 2 ? (
              <div
                className="row row-cols-1 row-cols-md-2 pb-4 mb-5 service-content__serviceCard justify-content-center align-items-center bg-white rounded-4 px-4 px-md-5"
                key={data.id}
              >
                <div className="col">
                  <div className="p-2 text-center">
                    <img
                      src={data.cardImage}
                      className="img-fluid mb-2 img-service"
                      alt={data.headline}
                    />
                  </div>
                </div>
                <div className="col">
                  <div>
                    <h3 className="fw-bold fs-2 text-black">{data.title}</h3>
                    <p
                      className="card-text mb-lg-4"
                      style={{ textAlign: "justify" }}
                    >
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
            ) : (
              <div
                className="row row-cols-1 row-cols-md-2 pb-4 mb-5 service-content__serviceCard justify-content-center align-items-center bg-white rounded-4 px-4 px-md-5"
                key={data.id}
              >
                <div className="col order-md-2">
                  <div className="p-2 text-center">
                    <img
                      src={data.cardImage}
                      className="img-fluid mb-2 img-service"
                      alt={data.headline}
                    />
                  </div>
                </div>
                <div className="col text-end">
                  <div>
                    <h3 className="fw-bold fs-2 text-black">{data.title}</h3>
                    <p className="card-text  mb-lg-4">{data.headline}</p>
                    <Link
                      to={accessToken !== "" ? "/locations" : data.linkDest}
                      className="btn fw-bold border border-black border-2 btn-clicked text-end"
                    >
                      {data.btnDesc}
                    </Link>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
