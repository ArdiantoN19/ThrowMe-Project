import React from "react";
import PropTypes from "prop-types";
import GeocoderControl from "./GeocoderControl";
import ListAction from "./ListAction";

const Geocoder = ({ markerCoordinates, selectCategory }) => {
  return (
    <div className="position-absolute top-0 end-0 me-2 mt-2 border rounded shadow-sm">
      <div className="d-flex">
        <ListAction selectCategory={selectCategory} />
        <GeocoderControl markerCoordinates={markerCoordinates} />
      </div>
    </div>
  );
};

Geocoder.propTypes = {
  markerCoordinates: PropTypes.func.isRequired,
};

export default Geocoder;
