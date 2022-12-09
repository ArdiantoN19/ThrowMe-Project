import React from "react";
import PropTypes from "prop-types";

const NameInput = ({ namePlace, onNamePlaceChange }) => {
  return (
    <>
      <label className="form-label required-field" htmlFor="namePlace">
        Name Place
      </label>
      <input
        type="text"
        className="form-control"
        id="namePlace"
        value={namePlace}
        onChange={onNamePlaceChange}
      />
    </>
  );
};

NameInput.propTypes = {
  namePlace: PropTypes.string.isRequired,
  onNamePlaceChange: PropTypes.func.isRequired,
};

export default NameInput;
