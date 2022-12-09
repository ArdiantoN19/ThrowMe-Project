import React, { useState, useEffect, useContext } from "react";
import Map, {
  Marker,
  NavigationControl,
  ScaleControl,
  useMap,
} from "react-map-gl";
import PropTypes from "prop-types";
import { ImLocation } from "react-icons/im";
import LocaleContext from "../../context/LocaleContext";

const NavigateHandler = () => {
  const { coordinatesPlace } = useContext(LocaleContext);
  const { current: map } = useMap();
  useEffect(() => {
    map.flyTo({ center: coordinatesPlace });
  }, [coordinatesPlace, map]);
};

const MiniMaps = ({ onChangeCoordinates }) => {
  const token = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
  const { coordinates, coordinatesPlace } = useContext(LocaleContext);

  const [viewState, setViewState] = useState({
    longitude: 106.8518,
    latitude: -6.1782,
    zoom: 12,
  });

  useEffect(() => {
    // if agree permission
    const successPosition = (position) => {
      setViewState({
        longitude: position.coords.longitude,
        latitude: position.coords.latitude,
        zoom: 12,
      });
      console.log("Agree permission");
    };

    // if denied permission
    const errorPosition = (error) => {
      console.log(error.message);
    };

    const options = {
      enableHighAccuracy: true,
      maximumAge: 30000,
      timeout: 27000,
    };

    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
    } else {
      navigator.geolocation.getCurrentPosition(
        successPosition,
        errorPosition,
        options
      );
    }
  }, []);

  // SetMarker after user input place location use geocoder interaction
  const Pin = () => {
    return (
      <Marker
        longitude={!coordinates.length ? coordinatesPlace[0] : coordinates[0]}
        latitude={!coordinates.length ? coordinatesPlace[1] : coordinates[1]}
        anchor="bottom"
        draggable="true"
        onDragEnd={onChangeCoordinates}
      >
        <ImLocation className="text-success" style={{ fontSize: "45px" }} />
      </Marker>
    );
  };

  useEffect(() => {
    <Pin />;
  }, [coordinatesPlace, coordinates]);

  return (
    <div>
      <Map
        {...viewState}
        mapboxAccessToken={token}
        onMove={(evt) => setViewState(evt.viewState)}
        mapStyle={`mapbox://styles/mapbox/streets-v9`}
        style={{ width: "100%", height: "40vh" }}
        className="position-relative"
      >
        <NavigationControl position="bottom-right" />
        <ScaleControl />
        <Pin />
        <NavigateHandler />
      </Map>
    </div>
  );
};

MiniMaps.propTypes = {
  onChangeCoordinates: PropTypes.func.isRequired,
};

export default MiniMaps;
