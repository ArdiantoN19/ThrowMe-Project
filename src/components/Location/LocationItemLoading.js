import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LocationItemLoading = () => {
  return (
    <SkeletonTheme baseColor="#f5f5f5" className="bg-white">
      <div className="row justify-content-center justify-content-md-start align-items-center bg-white text-black rounded location-item pb-2 pb-md-0 mb-3 text-capitalize">
        <div className="col-12 col-md-4 col-lg-3 p-2">
          <Skeleton height={160} />
        </div>
        <div className="col-12 col-md-8 col-lg-9">
          <div className="d-flex align-items-center justify-content-between">
            <h3 className="fs-4 fw-bold text-black text-decoration-none">
              <Skeleton width={180} height={25} />
            </h3>
            <div className="dropdown">
              <button
                className="btn btn-secondary"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <Skeleton className="fs-5" width={30} height={30} />
              </button>
            </div>
          </div>
          <div>
            <p className="text-black-50 lh-1" style={{ fontSize: ".6em" }}>
              <span>
                <Skeleton width={135} height={13} />
              </span>
            </p>
            <p className="text-white " style={{ fontSize: ".7em" }}>
              <span>
                <Skeleton width={64} height={24} />
              </span>
            </p>
          </div>

          <p className="fs-5">
            <Skeleton width={335} height={55} />
          </p>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default LocationItemLoading;
