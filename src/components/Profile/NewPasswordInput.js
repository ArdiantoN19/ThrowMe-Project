import React, { useState } from "react";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { BiSave } from "react-icons/bi";
import FormInputPassword from "../FormInput/FormInputPassword";

const NewPasswordInput = ({ authedUser, changePassword }) => {
  const [values, setValues] = useState({
    currentPassword: "",
    password: "",
    passwordConfirmation: "",
  });

  const [showPassword, setShowPassword] = useState({
    type: "password",
    bool: true,
  });

  const onShowPassword = () => {
    if (showPassword.bool) {
      setShowPassword({
        type: "text",
        bool: false,
      });
    } else {
      setShowPassword({
        type: "password",
        bool: true,
      });
    }
  };

  const inputs = [
    {
      id: 1,
      name: "currentPassword",
      type: `${showPassword.type}`,
      placeholder: "",
      errMessage: "Invalid password",
      label: "Current Password",
      pattern: `^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9]{8,20}$`,
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: `${showPassword.type}`,
      placeholder: "Password",
      errMessage:
        "Password should be 8-20 characters and include at least 1 uppercase letter, 1 lowecase letter, and 1 number!",
      label: "Password",
      pattern: `^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9]{8,20}$`,
      required: true,
    },
    {
      id: 3,
      name: "passwordConfirmation",
      type: `${showPassword.type}`,
      placeholder: "Confirm Password",
      errMessage: " Password don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const onChangeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmitNewPassword = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Confirm update new password!",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        changePassword(values);
        setValues({
          currentPassword: "",
          password: "",
          passwordConfirmation: "",
        });
      } else if (result.isDenied) {
        return;
      }
    });
  };

  return (
    <form onSubmit={onSubmitNewPassword}>
      <label className="form-label">Username</label>
      <input
        className="form-control mb-2"
        value={authedUser.username}
        disabled
      />
      <label className="form-label">Email</label>
      <input className="form-control mb-2" value={authedUser.email} disabled />
      {inputs.map((input) => (
        <FormInputPassword
          key={input.id}
          {...input}
          value={values[input.name]}
          onChange={onChangeHandler}
          bool={showPassword.bool}
          onClick={onShowPassword}
        />
      ))}
      {values.currentPassword === "" ||
      values.password === "" ||
      values.passwordConfirmation === "" ? (
        <button
          type="submit"
          className="d-block ms-auto btn btn-success shadow-sm text-white py-2 px-4 mt-3"
          disabled
        >
          <BiSave className="fs-5" /> Save
        </button>
      ) : (
        <button
          type="submit"
          className="d-block ms-auto btn btn-success shadow-sm text-white py-2 px-4 mt-3"
        >
          <BiSave className="fs-5" /> Save
        </button>
      )}
    </form>
  );
};

NewPasswordInput.propTypes = {
  authedUser: PropTypes.object.isRequired,
  changePassword: PropTypes.func.isRequired,
};

export default NewPasswordInput;
