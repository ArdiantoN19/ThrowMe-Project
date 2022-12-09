/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Map, {
  NavigationControl,
  ScaleControl,
  GeolocateControl,
  Marker,
} from "react-map-gl";
import { ImLocation } from "react-icons/im";
import Markers from "./Markers";
import ChangeMap from "./ChangeMap";
import Geocoder from "./Geocoder";
import Swal from "sweetalert2";
import { getAllPlaces } from "../../utils/api";

const Maps = () => {
  const token = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

  const [placeDatas, setPlaceDatas] = useState([]);
  const [category, setCategory] = useState("");
  const [viewState, setViewState] = useState({
    longitude: 106.8518,
    latitude: -6.1782,
    zoom: 13,
  });
  const [marker, setMarker] = useState([106.8518, -6.1782]);
  const [map, setMap] = useState("streets-v11");

  // To set coordinates from navigation location permission
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

  // Change style the map
  const onChangeMapStyle = (style) => {
    setMap(style);
  };

  useEffect(() => {
    onChangeMapStyle();
  }, []);

  useEffect(() => {
    const fetchGetAllPlace = async () => {
      const { error, message, data } = await getAllPlaces();
      if (error) {
        Swal.fire({
          icon: "error",
          title: error,
          text: message,
          showConfirmButton: false,
          timer: 2000,
        });
      } else {
        setPlaceDatas(data);
      }
    };
    fetchGetAllPlace();
  }, []);

  // SetMarker after user input place location use geocoder interaction
  const createMarker = (coordinates) => {
    setMarker(coordinates);
  };

  const Pin = () => {
    return (
      <Marker longitude={marker[0]} latitude={marker[1]} anchor="bottom">
        <ImLocation className="text-success" style={{ fontSize: "45px" }} />
      </Marker>
    );
  };

  useEffect(() => {
    <Pin />;
  }, [marker]);

  const onSelectCategory = (category) => {
    setCategory(category);
  };

  const filterPlaceByCategory = placeDatas.filter((filterData) => {
    return filterData.attributes.category.toLowerCase().includes(category);
  });

  return (
    <div>
      <Map
        {...viewState}
        mapboxAccessToken={token}
        onMove={(evt) => setViewState(evt.viewState)}
        mapStyle={`mapbox://styles/mapbox/${map}`}
        style={{ width: "100%", minHeight: "90vh" }}
        className="position-relative"
      >
        <GeolocateControl position="bottom-right" />
        <NavigationControl position="bottom-right" />
        <ScaleControl />
        <Markers
          placeDatas={category === "all" ? placeDatas : filterPlaceByCategory}
        />
        <ChangeMap styleMap={onChangeMapStyle} />
        <Pin />
        <Geocoder
          selectCategory={onSelectCategory}
          markerCoordinates={createMarker}
        />
      </Map>
    </div>
  );
};

export default Maps;
