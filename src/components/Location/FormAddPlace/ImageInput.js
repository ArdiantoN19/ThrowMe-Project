import React from "react";
import PropTypes from "prop-types";

const ImageInput = ({ onImageChange, imageValue, imageURLs }) => {
  return (
    <>
      <label htmlFor="image-place" className="col-form-label required-field">
        Image
      </label>
      <input
        type="file"
        className="form-control"
        id="image-place"
        multiple
        accept="image/*"
        onChange={onImageChange}
        value={imageValue}
      />
      <span className="text-black-50" style={{ fontSize: ".6em" }}>
        *Max size 5Mb
      </span>
      {imageURLs.map((imageSrc) => (
        <div className="mt-2" key={imageSrc}>
          <img
            className="img-fluid w-100 rounded"
            src={imageSrc}
            alt="preview"
          />
        </div>
      ))}
    </>
  );
};

ImageInput.propTypes = {
  onImageChange: PropTypes.func.isRequired,
  imageValue: PropTypes.string.isRequired,
  imageURLs: PropTypes.array.isRequired,
};

export default ImageInput;
