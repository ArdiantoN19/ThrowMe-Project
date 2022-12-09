import React from "react";
import PropTypes from "prop-types";
import { BsMapFill } from "react-icons/bs";

const ChangeMap = ({ styleMap }) => {
  const style = {
    bottom: "30px",
    right: "50px",
    padding: 0,
    zIndex: 2,
  };

  const onChangeMap = (e) => {
    return styleMap(e.target.id);
  };

  return (
    <div className="position-absolute shadow" style={style}>
      <div className="dropup">
        <button
          className="bg-white border py-1 rounded-1"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <BsMapFill className="fs-5" />
        </button>
        <ul className="dropdown-menu px-2">
          <li>
            <div
              className="dropdown-item"
              id="streets-v11"
              onClick={onChangeMap}
            >
              Street
            </div>
          </li>
          <li>
            <div
              className="dropdown-item"
              id="satellite-streets-v12"
              onClick={onChangeMap}
            >
              Satelite
            </div>
          </li>
          <li>
            <div className="dropdown-item" id="dark-v11" onClick={onChangeMap}>
              Dark
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

ChangeMap.propTypes = {
  styleMap: PropTypes.func.isRequired,
};

export default ChangeMap;
