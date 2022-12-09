import React from "react";
import PropTypes from "prop-types";

const StatusInput = ({ status, onStatusChange }) => {
  return (
    <>
      <label className="form-label required-field">Status</label>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="status"
          id="open"
          value="open"
          checked={status === "open"}
          onChange={onStatusChange}
        />
        <label
          className="form-check-label"
          htmlFor="flexRadioDefault1"
          style={{ fontSize: ".8em" }}
        >
          Open
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="status"
          id="close"
          value="close"
          checked={status === "close"}
          onChange={onStatusChange}
        />
        <label
          className="form-check-label"
          htmlFor="flexRadioDefault2"
          style={{ fontSize: ".8em" }}
        >
          Close
        </label>
      </div>
    </>
  );
};

StatusInput.propTypes = {
  status: PropTypes.string.isRequired,
  onStatusChange: PropTypes.func.isRequired,
};

export default StatusInput;
