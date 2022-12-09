import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { MdAddLocationAlt, MdLocationOn } from "react-icons/md";
import Swal from "sweetalert2";
import AddInput from "../../components/Location/AddInput";
import LocationList from "../../components/Location/LocationList";
import { getPlacesDependUser, deletePlaceDependUser } from "../../utils/api";
import LocationItemLoading from "../../components/Location/LocationItemLoading";

const LocationPage = ({ authedUser }) => {
  const [dataPlaces, setDataPlaces] = useState([]);
  const [isError, setIsError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDataPlaces = async () => {
      const { error, message, data } = await getPlacesDependUser(
        authedUser.username
      );
      if (error) {
        setIsError(`Something wrong,${message}`);
      } else {
        setDataPlaces(data);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }
    };

    fetchDataPlaces();
  }, [authedUser.username]);

  const reRenderAddListItem = useCallback(
    ({
      id,
      url,
      name,
      address,
      category,
      result,
      owner,
      telp,
      status,
      description,
      createdAt,
    }) => {
      setDataPlaces([
        ...dataPlaces,
        {
          id,
          attributes: {
            address,
            category,
            createdAt,
            description,
            features: result,
            name,
            owner,
            status,
            telp,
            url,
          },
        },
      ]);
    },
    [dataPlaces]
  );

  const reRenderDeleteListItem = useCallback((id) => {
    setDataPlaces((dataPlaces) =>
      dataPlaces.filter((dataPlace) => dataPlace.id !== id)
    );
  }, []);

  const onDeleteHandler = (id) => {
    Swal.fire({
      title: "Do you want deleted this item?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: "No",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { error, message } = await deletePlaceDependUser(id);
        if (error) {
          Swal.fire({
            icon: "error",
            title: "Cancelled",
            text: `Opps, ${message}`,
            showConfirmButton: false,
            timer: 2000,
          });
        } else {
          reRenderDeleteListItem(id);
          Swal.fire({
            icon: "success",
            title: "Deleted",
            text: "Your item has been deleted!",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      } else if (result.isDenied) {
        Swal.fire({
          icon: "error",
          title: "Cancelled",
          text: "Your item is safe",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

  if (isLoading) {
    let rowsLoading = [];

    for (let index = 1; index <= dataPlaces.length; index++) {
      rowsLoading.push(<LocationItemLoading key={index} />);
    }

    return (
      <div
        className="container-fluid fs-5 mt-5 w-100 pt-4 bg-white"
        style={{ minHeight: "100vh" }}
      >
        <div className="row justify-content-center align-items-center pt-3">
          <div className="col-11 col-md-8 col-lg-7 py-4">
            <div className="d-flex justify-content-between border-bottom pb-2">
              <h2 className="text-success fw-bold">
                <MdLocationOn /> Location
              </h2>
              <button
                type="button"
                className="btn btn-success shadow-sm text-white py-2 px-4"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <MdAddLocationAlt className="fs-5" /> New
              </button>
              <AddInput authedUser={authedUser} />
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-11 col-md-8 col-lg-7">{rowsLoading}</div>
          <div className="fs-3 text-black-50">{isError}</div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="container-fluid fs-5 mt-5 w-100 pt-4 bg-white"
      style={{ minHeight: "100vh" }}
    >
      <div className="row justify-content-center align-items-center pt-3">
        <div className="col-11 col-md-8 col-lg-7 py-4">
          <div className="d-flex justify-content-between border-bottom pb-2">
            <h2 className="text-success fw-bold">
              <MdLocationOn /> Location
            </h2>
            <button
              type="button"
              className="btn btn-success shadow-sm text-white py-2 px-4"
              data-bs-toggle="modal"
              data-bs-target="#addModal"
            >
              <MdAddLocationAlt className="fs-5" /> New
            </button>
            <AddInput authedUser={authedUser} addItem={reRenderAddListItem} />
          </div>
        </div>
      </div>
      <div className="row justify-content-center align-items-center">
        <div className="col-11 col-md-8 col-lg-7">
          <LocationList dataPlaces={dataPlaces} onDelete={onDeleteHandler} />
        </div>
        <div className="fs-3 text-black-50">{isError}</div>
      </div>
    </div>
  );
};

LocationPage.propTypes = {
  authedUser: PropTypes.object,
};

export default LocationPage;
