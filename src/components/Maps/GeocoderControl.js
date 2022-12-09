import React from "react";
import PropTypes from "prop-types";
import { useMap } from "react-map-gl";
import useInputLocation from "../../hooks/useInputLocation";

const GeocoderControl = ({ markerCoordinates }) => {
  const places = useInputLocation("");
  const { current: map } = useMap();

  const navigateHandler = (center) => {
    const location = {
      center,
    };
    map.flyTo(location);
  };

  const controlSearchPlace = (suggestion) => {
    places.setValue(suggestion.place_name);
    places.setSuggestions([]);
    navigateHandler(suggestion.center);
    markerCoordinates(suggestion.geometry.coordinates);
  };

  return (
    <div className="d-flex flex-column">
      <input
        type="text"
        className="form-control rounded-0 rounded-end w-100"
        value={places.value}
        onChange={places.onChangeHandler}
      />
      <button
        className="btn-close p-2 bg-white position-absolute"
        style={{ top: "5px", right: "2%" }}
        onClick={() => {
          places.setValue("");
          places.setSuggestions([]);
        }}
      ></button>

      {places.suggestions?.length > 1 ? (
        <div className="rounded-0 rounded-bottom p-1 bg-white shadow-sm">
          {places.suggestions.map((suggestion, index) => (
            <div key={index} className="p-2 bg-white">
              <p
                className="lh-1 m-0"
                style={{ cursor: "pointer", fontSize: "1.25em" }}
                onClick={() => {
                  controlSearchPlace(suggestion);
                }}
              >
                {suggestion.place_name}
              </p>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

GeocoderControl.propTypes = {
  markerCoordinates: PropTypes.func.isRequired,
};

export default GeocoderControl;
