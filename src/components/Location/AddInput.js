import React, { useMemo, useEffect, useState } from "react";
import PropTypes from "prop-types";
import MiniMaps from "./MiniMaps";
import NavigatePlaceGeocoder from "./FormAddPlace/NavigatePlaceGeocoder";
import LocaleContext from "../../context/LocaleContext";
import useInput from "../../hooks/useInput";
import {
  addPlace,
  uploadImageCloudinary,
  reverseGeocode,
} from "../../utils/api";
import { categories } from "./categories";
import SelectCategories from "./FormAddPlace/SelectCategories";
import ActionInput from "./FormAddPlace/ActionInput";
import useInputLocation from "../../hooks/useInputLocation";
import Swal from "sweetalert2";
import StatusInput from "./FormAddPlace/StatusInput";
import DescriptionInput from "./FormAddPlace/DescriptionInput";
import ImageInput from "./FormAddPlace/ImageInput";
import NameInput from "./FormAddPlace/NameInput";
import AddressInput from "./FormAddPlace/TelpInput";

const AddInput = ({ authedUser, addItem }) => {
  // Image preview input
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  const [imageValue, setImageValue] = useState("");

  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images]);

  const onImageChange = (e) => {
    if (e.target.files.length < 1) return;
    if (e.target.files[0].size > 5242880) {
      return;
    } else {
      setImages([...e.target.files]);
      setImageValue(e.target.value);
    }
  };

  const [category, setCategory, onCategoryChange] = useInput("battery");
  const [status, setStatus, onStatusChange] = useInput("open");
  const [namePlace, setNamePlace, onNamePlaceChange] = useInput("");
  const [telp, setTelp, onTelpChange] = useInput("");
  const [description, setDescription, onDescriptionChange] = useInput("");

  // to control value of specific coordinates marker in minimap
  const [coordinates, setCoordinates] = useState([]);
  const onChangeCoordinates = (e) => {
    const arrayCoordinates = Object.values(e.lngLat);
    setCoordinates(arrayCoordinates);
  };

  // to set coordinates in minimap
  const [coordinatesPlace, setCoordinatesPlace] = useState([106.8518, -6.1782]);

  const coordinatesHandler = (coordinates) => {
    setCoordinates([]);
    setCoordinatesPlace(coordinates);
  };

  const contextValue = useMemo(() => {
    return {
      coordinates,
      coordinatesPlace,
      coordinatesHandler,
    };
  }, [coordinates, coordinatesPlace]);

  const places = useInputLocation("");

  const [result, setResult] = useState({});

  const reverseGeocodePlace = async (lat, lng) => {
    const { error, message, data } = await reverseGeocode(lat, lng);
    if (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: message,
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      setResult(data[1]);
    }
  };

  useEffect(() => {
    reverseGeocodePlace(coordinates[1], coordinates[0]);
  }, [coordinates]);

  // To clear any data in form
  const onDestroyData = () => {
    setImages([]);
    setImageURLs([]);
    setImageValue("");
    setNamePlace("");
    setCategory("Battery");
    setStatus("open");
    setTelp("");
    places.setValue("");
    setDescription("");
    setCoordinates([]);
    setResult({});
    setCoordinatesPlace([106.8518, -6.1782]);
  };

  const onUploadImageHandler = async (formData) => {
    const { error, message, data } = await uploadImageCloudinary(formData);
    if (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: message,
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      return { data };
    }
  };

  const onPostPlaceHandler = async (dataPost) => {
    const { error, message } = await addPlace(dataPost);
    if (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: message,
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Success to add place",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  // to submit form
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const file = images[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "unsigned-upload");

    const { data } = await onUploadImageHandler(formData);

    const dataPost = {
      category,
      name: namePlace,
      status,
      resultPlace: result,
      url: data.url,
      owner: authedUser.username,
      telp,
      url_public_id: data.public_id,
      description,
    };

    const dataItem = {
      id: +new Date(),
      url: imageURLs[0],
      name: namePlace,
      address: result.address,
      category,
      result,
      owner: authedUser.username,
      telp,
      status,
      description,
      createdAt: new Date().toJSON(),
    };

    Swal.showLoading();
    setTimeout(() => {
      onPostPlaceHandler(dataPost);
      addItem(dataItem);
      Swal.close();
    }, 2000);

    onDestroyData();
  };

  return (
    <LocaleContext.Provider value={contextValue}>
      <div
        className="modal fade"
        id="addModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="addModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 fw-semibold" id="addModalLabel">
                Add new place
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={onDestroyData}
              ></button>
            </div>
            <div className="modal-body">
              <div>
                <h2 className="fw-semibold" style={{ fontSize: "1em" }}>
                  Place details{" "}
                </h2>
                <p className="text-black-50" style={{ fontSize: ".7em" }}>
                  Enter information about this place. When added to Maps, these
                  places appear publicly.
                </p>
              </div>
              <form onSubmit={onSubmitHandler} autoComplete="off">
                <div className="mb-3">
                  <ImageInput
                    onImageChange={onImageChange}
                    imageValue={imageValue}
                    imageURLs={imageURLs}
                  />
                </div>
                <div className="mb-3">
                  <SelectCategories
                    onCategoryChange={onCategoryChange}
                    categories={categories}
                    category={category}
                  />
                </div>
                <div className="mb-3">
                  <NameInput
                    namePlace={namePlace}
                    onNamePlaceChange={onNamePlaceChange}
                  />
                </div>
                <div className="mb-3">
                  <StatusInput
                    status={status}
                    onStatusChange={onStatusChange}
                  />
                </div>
                <div className="mb-3">
                  <AddressInput telp={telp} onTelpChange={onTelpChange} />
                </div>
                <div className="mb-3">
                  <NavigatePlaceGeocoder />
                </div>
                <div className="mb-3">
                  <MiniMaps onChangeCoordinates={onChangeCoordinates} />
                </div>
                <div className="mb-3">
                  <DescriptionInput
                    description={description}
                    onDescriptionChange={onDescriptionChange}
                  />
                </div>
                <ActionInput
                  onDestroyData={onDestroyData}
                  coordinates={coordinates}
                  images={images}
                  namePlace={namePlace}
                  telp={telp}
                  description={description}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </LocaleContext.Provider>
  );
};

AddInput.propTypes = {
  authedUser: PropTypes.object,
};

export default AddInput;
