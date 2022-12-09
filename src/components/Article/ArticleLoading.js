import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ArticleLoading = () => {
  return (
    <SkeletonTheme baseColor="#f5f5f5" className="bg-white">
      <div className="col mb-3 mb-md-4">
        <div className="card rounded">
          <div className="card-zoom">
            <Skeleton height={280} />
          </div>
          <div className="card-body">
            <div
              className="d-flex justify-content-between align-items-center"
              style={{ fontSize: ".8em" }}
            >
              <small className="px-2 py-1 text-white text-capitalize">
                <Skeleton width={73} height={25} />
              </small>
              <small className="text-black-50">
                <Skeleton width={120} height={25} />
              </small>
            </div>

            <h4 className="article_title fw-semibold fs-5 mb-3 text-start mt-3">
              <Skeleton height={50} />
            </h4>
            <p className="article_head">
              <Skeleton height={90} />
            </p>
            <div className="d-flex mt-auto">
              <Skeleton width={50} height={50} circle />
              <div className="mx-3 my-auto">
                <p className="fw-bold p-0 m-0">
                  <Skeleton width={90} height={25} />
                </p>
                <small>
                  <Skeleton width={130} height={15} />
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default ArticleLoading;
