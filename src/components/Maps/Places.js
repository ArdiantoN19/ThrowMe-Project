import React from "react";
import PropTypes from "prop-types";
import { ImLocation, ImPhone, ImClock } from "react-icons/im";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./places.css";

const Places = ({
  url,
  name,
  category,
  address,
  telp,
  status,
  description,
  onClose,
}) => {
  return (
    <div className="position-absolute bg-white shadow rounded-4 place sidebar">
      <div className="position-relative">
        <img
          src={url}
          alt={url}
          className="w-100"
          style={{
            borderTopLeftRadius: "1rem",
            borderTopRightRadius: "1rem",
            maxHeight: "300px",
          }}
        />
        <button
          className="position-absolute top-0 start-0 m-2 fs-2 text-white bg-transparent border-0 p-1 rounded-circle"
          onClick={onClose}
        >
          <AiOutlineCloseCircle />
        </button>
      </div>
      <div className="px-3 mt-2">
        <h3 className="fs-3">{name}</h3>
        <p className="text-white" style={{ fontSize: "1.1em" }}>
          <span className="px-2 py-1 bg-success text-capitalize rounded-pill me-1">
            {category}
          </span>
        </p>
        <hr />
        <div
          style={{ fontSize: "1.12em" }}
          className="row justify-content-center align-items-center mb-2"
        >
          <div className="col-1">
            <ImLocation className="fs-5 text-success" />
          </div>
          <div className="col-11 text-start">
            {address}
            <br />
          </div>
        </div>

        <div
          style={{ fontSize: "1.12em" }}
          className="row justify-content-center align-items-center mb-2"
        >
          <div className="col-1">
            <ImPhone className="fs-5 text-success" />
          </div>
          <div className="col-11 text-start">{telp}</div>
        </div>

        <div
          style={{ fontSize: "1.12em" }}
          className="row justify-content-center align-items-center"
        >
          <div className="col-1">
            <ImClock className="fs-5 text-success" />
          </div>
          <div className="col-11 text-start">{status ? "Open" : "Close"}</div>
        </div>
        <hr />

        <p style={{ fontSize: "1.2em" }}>
          <span className="fw-semibold">Description: </span>
          {description}
        </p>
      </div>
    </div>
  );
};

Places.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  telp: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Places;
