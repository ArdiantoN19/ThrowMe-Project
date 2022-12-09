import React from "react";
import PropTypes from "prop-types";

const ActionInput = ({
  onDestroyData,
  coordinates,
  images,
  namePlace,
  telp,
  description,
}) => {
  return (
    <>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-outline-success"
          data-bs-dismiss="modal"
          onClick={onDestroyData}
        >
          Close
        </button>
        {!coordinates.length ||
        !images.length ||
        namePlace === "" ||
        telp === "" ||
        description === "" ? (
          <button type="submit" className="btn btn-success text-white" disabled>
            Send
          </button>
        ) : (
          <button
            type="submit"
            className="btn btn-success text-white"
            data-bs-dismiss="modal"
          >
            Send
          </button>
        )}
      </div>
    </>
  );
};

ActionInput.propTypes = {
  onDestroyData: PropTypes.func.isRequired,
  coordinates: PropTypes.array.isRequired,
  images: PropTypes.array.isRequired,
  namePlace: PropTypes.string.isRequired,
  telp: PropTypes.string.isRequired,
};

export default ActionInput;
