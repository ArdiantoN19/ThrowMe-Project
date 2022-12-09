import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUpdatedPlace } from "../../../utils/api";
import NewPlaceItem from "./NewPlaceItem";
import NewPlaceLoading from "./NewPlaceLoading";

const NewPlaceList = () => {
  const [newPlaces, setNewPlaces] = useState([]);
  const [isError, setIsError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNewPlaces = async () => {
      const { error, message, data } = await getUpdatedPlace();
      if (error) {
        setIsError(`Something wrong, ${message}`);
      } else {
        setNewPlaces(data);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    };
    fetchNewPlaces();
  }, []);

  if (isLoading) {
    let rowsLoading = [];

    for (let index = 1; index <= newPlaces.length; index++) {
      rowsLoading.push(<NewPlaceLoading key={index} />);
    }

    return (
      <>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div className="col-12 col-md-6 col-lg-5">
            <h2 className="fs-2 fw-bold">What's new in your area?</h2>
          </div>
          <div className="col-1 bg-black line"></div>
          <div className="col-4 mt-4 mt-md-0 col-md-4 col-lg-2 d-none d-md-block">
            <Link
              to="/maps"
              className="btn fw-bold btn-white text-dark border border-2 border-black btn-clicked px-3"
            >
              Look more
            </Link>
          </div>
        </div>
        <div className="row g-3 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 justify-content-start align-items-center mt-5">
          {rowsLoading}
          <div className="fs-3 text-black-50">{isError}</div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="col-12 col-md-6 col-lg-5">
          <h2 className="fs-2 fw-bold">What's new in your area?</h2>
        </div>
        <div className="col-1 bg-black line"></div>
        <div className="col-4 mt-4 mt-md-0 col-md-4 col-lg-2 d-none d-md-block">
          <Link
            to="/maps"
            className="btn fw-bold btn-white text-dark border border-2 border-black btn-clicked px-3"
          >
            Look more
          </Link>
        </div>
      </div>
      <div className="row g-3 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 justify-content-start align-items-center mt-5">
        {newPlaces.map((newPlace) => (
          <NewPlaceItem
            key={newPlace.id}
            imageUrl={newPlace.attributes.url}
            {...newPlace.attributes}
            coordinates={newPlace.attributes.features.location}
            address={newPlace.attributes.features.address}
          />
        ))}
        <div className="fs-3 text-black-50">{isError}</div>
      </div>
    </>
  );
};

export default NewPlaceList;
