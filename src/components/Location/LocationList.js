import React from "react";
import PropTypes, { object } from "prop-types";
import LocationItem from "./LocationItem";

const LocationList = ({ dataPlaces, onDelete }) => {
  if (!dataPlaces.length) {
    return (
      <div className="fs-4 text-center text-black-50">
        You don't have any place
      </div>
    );
  }
  return (
    <div>
      {dataPlaces.map((dataPlace) => (
        <LocationItem
          key={dataPlace.id}
          id={dataPlace.id}
          imageUrl={dataPlace.attributes.url}
          {...dataPlace.attributes}
          onDelete={onDelete}
          address={dataPlace.attributes.features.address}
        />
      ))}
    </div>
  );
};

LocationList.propTypes = {
  dataPlaces: PropTypes.arrayOf(object).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default LocationList;
