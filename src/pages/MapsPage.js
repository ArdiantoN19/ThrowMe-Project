import React from "react";
import mapboxgl from "mapbox-gl";

function MapsPage() {
  mapboxgl.accessToken =
    "pk.eyJ1IjoibWljaGVsYXJ0ZXRhIiwiYSI6ImNsOXU0MWExcDIwejQzcG5zdzVtcWUxdjUifQ.rNGEp8vP6AKoQKx3LtiNAQ";
  // let map = new mapboxgl.Map({
  //   container: "mapboxContainer",
  //   style: "mapbox://styles/mapbox/streets-v11",
  // });
  return (
    <div>
      <h1 className="display-2 text-center">MapsPage</h1>
      <div id="mapboxContainer"></div>
    </div>
  );
}

export default MapsPage;
