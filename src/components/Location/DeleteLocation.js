import React from "react";
import PropTypes from "prop-types";
import { MdDeleteForever } from "react-icons/md";

const DeleteLocation = ({ id, onDelete }) => {
  return (
    <button
      type="button"
      className="btn btn-danger btn-sm text-white"
      id={id}
      onClick={() => onDelete(id)}
      title="delete location"
    >
      <MdDeleteForever />
    </button>
  );
};

DeleteLocation.propTypes = {
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteLocation;
