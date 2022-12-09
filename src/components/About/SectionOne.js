import React from "react";

const SectionOne = () => {
  return (
    <>
      <div className="row row-cols-1 row-cols-lg-2 justify-content-center align-items-center bg-about">
        <div className="col mb-3">
          <div className="d-flex justify-content-center">
            <img
              src="/assets/about/Volunteering-amico.svg"
              alt="aboout us"
              className="img-fluid"
              style={{ width: "400px", height: "400px" }}
            />
          </div>
        </div>
        <div className="col mb-3">
          <h1 className="fs-1 fw-bold">
            About
            <span className="p-2 border border-white bg-success text-white rounded ms-2">
              ThrowMe
            </span>
          </h1>
          <div className="mt-3 mt-md-4" style={{ textAlign: "justify" }}>
            <p>
              The culture of littering and overconsumption has become a global
              problem. Although some waste can be recycled, while others are
              waste that is not profitable to recycle. This is what causes
              garbage to accumulate and pollute our environment.
            </p>
            <p>
              At ThrowMe, our mission is to eliminate problems caused by
              garbage. Therefore, through innovation and collaboration we have
              developed a solution that can give you the location of the trash
              can around you and the proper and correct way to manage your
              waste. Learn more about how ThrowMe eliminates the garbage
              problem.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionOne;
