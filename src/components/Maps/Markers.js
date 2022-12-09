import React, { useState, useEffect, useMemo } from "react";
import { Marker } from "react-map-gl";
import Places from "./Places";
import PropTypes from "prop-types";

const Markers = ({ placeDatas }) => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const markers = useMemo(
    () =>
      placeDatas.map((placeData) => (
        <Marker
          key={placeData.id}
          longitude={placeData.attributes.features.location.lng}
          latitude={placeData.attributes.features.location.lat}
          anchor="bottom"
          onClick={(e) => {
            e.originalEvent.stopPropagation();
            setSelectedPlace(placeData);
          }}
        >
          <img
            src={`/assets/icon-trash/${placeData.attributes.category}.png`}
            alt="Skate Park Icon"
            className="border-success border border-2 bg-white p-1 rounded"
            style={{ width: "44px", height: "44px" }}
          />
        </Marker>
      )),
    [placeDatas]
  );

  const onClose = () => {
    const place = document.querySelector(".place");
    place.classList.add("d-none");
    setSelectedPlace(null);
  };

  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        setSelectedPlace(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <>
      {markers}
      {selectedPlace ? (
        <Places
          url={selectedPlace.attributes.url}
          name={selectedPlace.attributes.name}
          category={selectedPlace.attributes.category}
          address={selectedPlace.attributes.features.address}
          status={selectedPlace.attributes.status}
          telp={selectedPlace.attributes.telp}
          description={selectedPlace.attributes.description}
          onClose={onClose}
        />
      ) : null}
    </>
  );
};

Markers.propTypes = {
  placeDatas: PropTypes.array.isRequired,
};

export default Markers;
