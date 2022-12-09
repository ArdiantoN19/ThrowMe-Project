import React from "react";
import PropTypes from "prop-types";

const DescriptionInput = ({ description, onDescriptionChange }) => {
  return (
    <>
      <label className="form-label required-field" htmlFor="description">
        Description
      </label>
      <textarea
        className="form-control"
        id="description"
        value={description}
        onChange={onDescriptionChange}
        rows="5"
      ></textarea>
    </>
  );
};

DescriptionInput.propTypes = {
  description: PropTypes.string.isRequired,
  onDescriptionChange: PropTypes.func.isRequired,
};

export default DescriptionInput;
