import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import FormInput from "../FormInput/FormInput";
import FormInputPassword from "../FormInput/FormInputPassword";

function LoginInput({ login }) {
  const [values, setValues] = useState({
    email: "",
    password: "",
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
      tabIndex: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errMessage: "Email shold be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 2,
      tabIndex: 2,
      name: "password",
      type: `${showPassword.type}`,
      placeholder: "Password",
      errMessage: "Password is invalid format",
      label: "Password",
      pattern: `[A-Za-z0-9]{8,20}$`,
      required: true,
    },
  ];

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const { email, password } = values;
    return login({ email, password });
  };

  const onChangeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        {inputs.map((input) =>
          input.id < 2 ? (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChangeHandler}
            />
          ) : (
            <FormInputPassword
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChangeHandler}
              bool={showPassword.bool}
              onClick={onShowPassword}
            />
          )
        )}
        <p>
          Don't have account?{" "}
          <Link to="/register" className="text-success text-decoration-none">
            Sign Up
          </Link>
        </p>
        <button
          type="submit"
          tabIndex={3}
          className="d-block fs-5 m-auto fw-semibold btn btn-success text-white mt-5 px-5"
        >
          Log In
        </button>
      </form>
    </div>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
