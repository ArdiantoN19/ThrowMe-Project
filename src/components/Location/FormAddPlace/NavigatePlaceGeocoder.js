import React, { useContext } from "react";
import useInputLocation from "../../../hooks/useInputLocation";
import LocaleContext from "../../../context/LocaleContext";

const NavigatePlaceGeocoder = () => {
  const { coordinatesHandler } = useContext(LocaleContext);
  const places = useInputLocation("");

  return (
    <>
      <label htmlFor="places" className="col-form-label required-field">
        Place
      </label>
      <div className="position-relative">
        <input
          type="text"
          className="form-control"
          id="places"
          value={places.value}
          onChange={places.onChangeHandler}
        />
        <button
          className="position-absolute btn-close"
          style={{ fontSize: ".7em", top: "7px", right: "2%" }}
          onClick={(e) => {
            e.preventDefault();
            places.setValue("");
            places.setSuggestions([]);
          }}
        ></button>
      </div>
      {places.suggestions?.length > 1 ? (
        <div className="border rounded shadow-sm ">
          {places.suggestions.map((suggestion, index) => (
            <div key={index} className="p-2" style={{ fontSize: ".8em" }}>
              <p
                className="lh-1 m-0"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  places.setValue(suggestion.place_name);
                  places.setSuggestions([]);
                  coordinatesHandler(suggestion.center);
                }}
              >
                {suggestion.place_name}
              </p>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default NavigatePlaceGeocoder;
