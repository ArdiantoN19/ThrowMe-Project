import { useState } from "react";
import PropTypes from "prop-types";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import "./formInput.css";

const FormInputPassword = ({
  label,
  onChange,
  onClick,
  bool,
  errMessage,
  id,
  ...inputProps
}) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div className="my-3">
      <label className="form-label">{label}</label>
      <div className="position-relative">
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
        <button
          type="button"
          className="position-absolute top-0 end-0 border-0 bg-white fs-5 mt-1 px-2 me-2"
          onClick={onClick}
        >
          {bool ? <AiFillEye /> : <AiFillEyeInvisible />}
        </button>
        <span className="invalid">{errMessage}</span>
      </div>
    </div>
  );
};

FormInputPassword.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  bool: PropTypes.bool.isRequired,
  errMessage: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  inputProps: PropTypes.object,
};

export default FormInputPassword;
