import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const FeaturedLoading = () => {
  return (
    <SkeletonTheme baseColor="#f5f5f5" className="bg-white">
      <div className="mt-5">
        <div className="row justify-content-center align-items-start mb-3">
          <div className="col-12 col-md-6">
            <Skeleton height={350} />
          </div>
          <div className="col-12 col-md-6 mb-3">
            <div className="d-flex justify-content-between align-items-center">
              <small className="rounded-pill px-2 py-1 text-white mt-2">
                <Skeleton width={70} height={29} />
              </small>
              <small className="text-black-50">
                <Skeleton width={150} height={29} />
              </small>
            </div>

            <h3 className="card-title mb-3">
              <Skeleton height={47} />
            </h3>
            <p className="card-text article_headline">
              <Skeleton height={75} />
            </p>
            <div className="d-flex">
              <Skeleton width={50} height={50} circle />
              <div className="mx-3 my-auto">
                <p className="fw-bold p-0 m-0">
                  <Skeleton width={155} height={25} />
                </p>
                <small>
                  <Skeleton width={175} height={15} />
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default FeaturedLoading;
