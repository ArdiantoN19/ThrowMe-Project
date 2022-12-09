import React, { useState } from "react";
import { GrMapLocation, GrArticle } from "react-icons/gr";
import { IoIosCreate } from "react-icons/io";
import PropTypes from "prop-types";

const SectionTwo = ({ embedId }) => {
  const [isOpen, setIsOpen] = useState("service");
  const toggle = (e) => {
    setIsOpen(e.target.title);
  };

  return (
    <>
      <div className="row justify-content-center align-items-center bg-secondary pt-4 pb-5">
        <div className="col-12 col-md-10 col-lg-8">
          <div className="row justify-content-center align-items-center mb-4">
            <div className="col-md-10 col-lg-8 col-xl-6">
              <div className="row text-black text-center mb-3">
                <div className="col">
                  <button
                    className={`fw-semibold fs-5 bg-transparent border-0 ${
                      isOpen === "service" ? "active-link" : null
                    }`}
                    onClick={toggle}
                    title="service"
                  >
                    Our Service
                  </button>
                </div>
                <div className="col">
                  <button
                    className={`fw-semibold fs-5 bg-transparent border-0 ${
                      isOpen === "demo" ? "active-link" : null
                    }`}
                    onClick={toggle}
                    title="demo"
                  >
                    Demo ThrowMe
                  </button>
                </div>
              </div>
            </div>
          </div>
          {isOpen === "service" ? (
            <div className="row row-cols-1 mx-auto service row-cols-md-3 justify-content-center align-items-center bg-white rounded-4 p-4">
              <div className="col p-2">
                <GrMapLocation className="fs-1 d-block mx-auto mb-3" />
                <p className="text-center text-uppercase fw-semibold">
                  Find Place
                </p>
                <p className="text-center">
                  Find the nearest place for specific waste.
                </p>
              </div>
              <div className="col p-2">
                <IoIosCreate className="fs-1 d-block mx-auto mb-3" />
                <p className="text-center text-uppercase fw-semibold">
                  Create Place
                </p>
                <p className="text-center">
                  Create your own location for specific waste.
                </p>
              </div>
              <div className="col p-2">
                <GrArticle className="fs-1 d-block mx-auto mb-3" />
                <p className="text-center text-uppercase fw-semibold">
                  Find Article
                </p>
                <p className="text-center">
                  Find articles and interesting information about waste
                </p>
              </div>
            </div>
          ) : (
            <div className="row text-center justify-content-center align-items-center p-2">
              <div className="col">
                <iframe
                  className="rounded-4 demo-application"
                  src={
                    `https://www.youtube.com/embed/${embedId}` ||
                    "https://via.placeholder.com/560x300.png?text=Oops,+something+wrong"
                  }
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Demo Application ThrowMe"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

SectionTwo.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default SectionTwo;
