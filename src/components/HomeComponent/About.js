import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-white row justify-content-center align-items-center">
      <div className="col-12 col-md-10">
        <div className="position-relative bg-white border border-black border-2 rounded-3 p-2 px-lg-4 bg-effect-shadow">
          <h2 className="fs-2 fw-bold">About ThrowMe</h2>
          <div className="fs-5">
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
          <Link
            to="/about"
            className="btn position-absolute fw-bold btn-white text-dark border border-2 border-black px-lg-4 py-lg-2 btn-clicked"
            style={{ right: "5%", bottom: "-30px" }}
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
