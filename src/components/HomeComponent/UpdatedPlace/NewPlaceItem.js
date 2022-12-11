import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ImLocation } from "react-icons/im";
import "./newPlace.css";

const NewPlaceItem = ({ imageUrl, name, category, coordinates, address }) => {
  return (
    <>
      <div className="col">
        <div className="card rounded">
          <div className="card-zoom">
            <img
              className="img-fluid zoom rounded-top img-place"
              src={imageUrl}
              alt="place"
            />
          </div>
          <div className="p-2">
            <Link
              to="/maps"
              className="text-decoration-none fs-5 py-2 text-black fw-semibold title"
            >
              {name}
            </Link>
            <div className="text-white mt-1 mb-2" style={{ fontSize: ".7em" }}>
              <span className="rounded-pill text-capitalize bg-success py-1 px-2">
                {category}
              </span>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <small className="address w-75">{address}</small>
              <ImLocation className="text-success fs-4" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

NewPlaceItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  coordinates: PropTypes.object.isRequired,
};

export default NewPlaceItem;
