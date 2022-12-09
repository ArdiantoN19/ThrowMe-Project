import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { BiDotsVerticalRounded } from "react-icons/bi";
import DeleteLocation from "./DeleteLocation";
import "./location.css";
import { showFormattedDate } from "../../utils/showFormattedDate";
import { Dropdown } from "react-bootstrap";

const CustomToggle = forwardRef(({ children, onClick }, ref) => (
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  <a
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    <BiDotsVerticalRounded className="fs-5 text-black" />
  </a>
));

const LocationItem = ({
  id,
  imageUrl,
  name,
  address,
  category,
  status,
  createdAt,
  onDelete,
}) => {
  return (
    <div
      className="row justify-content-center justify-content-md-start align-items-center bg-white text-black rounded location-item pb-2 pb-md-0 mb-3 text-capitalize"
      key={id}
    >
      <div className="col-12 col-md-4 col-lg-3 p-2">
        <div className="position-relative">
          <img src={imageUrl} alt="place" className="img-fluid rounded w-100" />
          <p
            className="position-absolute bg-white py-2 px-3 py-md-1 px-md-2 rounded-end"
            style={{ top: "20px", left: "0", fontSize: ".7em" }}
          >
            {status === "open" ? (
              <span className="text-success ">{status}</span>
            ) : (
              <span className="text-danger">{status}</span>
            )}
          </p>
        </div>
      </div>
      <div className="col-12 col-md-8 col-lg-9">
        <div className="d-flex align-items-center justify-content-between pe-3">
          <h3 className="fs-4 fw-bold text-black text-decoration-none">
            {name}
          </h3>
          <Dropdown>
            <Dropdown.Toggle
              as={CustomToggle}
              id="dropDownToggle"
            ></Dropdown.Toggle>
            <Dropdown.Menu className="p-0 border-0 mt-1 bg-transparent">
              <Dropdown.Item eventKey="2" className="p-0">
                <DeleteLocation id={id} onDelete={onDelete} />
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div>
          <p className="text-black-50 lh-1" style={{ fontSize: ".6em" }}>
            <span>{showFormattedDate(createdAt)}</span>
          </p>
          <p className="text-white " style={{ fontSize: ".7em" }}>
            <span className="bg-success py-1 px-2 rounded-pill">
              {category}
            </span>
          </p>
        </div>

        <p className="address" style={{ fontSize: ".8em" }}>
          {address}
        </p>
      </div>
    </div>
  );
};

LocationItem.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default LocationItem;
