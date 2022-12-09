import { useState } from "react";
import PropTypes from "prop-types";
import "./formInput.css";

const FormInput = ({ label, onChange, errMessage, id, ...inputProps }) => {
  const [focused, setFocused] = useState(false);
  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div className="my-3">
      <label className="form-label">{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        className="form-control py-2"
        onBlur={handleFocus}
        onFocus={() => {
          inputProps.name === "confirmPassword" && setFocused(true);
        }}
        focused={focused.toString()}
      />
      <span className="invalid">{errMessage}</span>
    </div>
  );
};

FormInput.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  errMessage: PropTypes.string.isRequired,
  inputProps: PropTypes.object,
};

export default FormInput;
