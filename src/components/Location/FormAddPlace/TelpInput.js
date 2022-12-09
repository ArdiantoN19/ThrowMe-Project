import React from "react";
import PropTypes from "prop-types";

const TelpInput = ({ telp, onTelpChange }) => {
  return (
    <>
      <label className="form-label required-field" htmlFor="telp">
        Telp
      </label>
      <input
        type="text"
        className="form-control"
        id="telp"
        value={telp}
        onChange={onTelpChange}
      />
    </>
  );
};

TelpInput.propTypes = {
  telp: PropTypes.string.isRequired,
  onTelpChange: PropTypes.func.isRequired,
};

export default TelpInput;
