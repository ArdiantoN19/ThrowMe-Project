import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const NewArticleLoading = () => {
  return (
    <SkeletonTheme baseColor="#f5f5f5" className="bg-white">
      <div className="col">
        <div className="card shadow-sm">
          <div className="card-zoom">
            <Skeleton height={200} />
          </div>
          <div className="card-body p-2">
            <Skeleton height={36} />
            <small className="text-white" style={{ fontSize: ".7em" }}>
              <Skeleton width={55} height={21} />
            </small>
            <div>
              <Skeleton height={21} />
            </div>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default NewArticleLoading;
