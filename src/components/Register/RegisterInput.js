/* eslint-disable no-useless-escape */
import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import FormInput from "../FormInput/FormInput";
import FormInputPassword from "../FormInput/FormInputPassword";

const RegisterInput = ({ register }) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState({
    type: "password",
    bool: true,
  });

  const { username, email, password, confirmPassword } = values;

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
      name: "username",
      type: "text",
      placeholder: "Username",
      errMessage:
        "Username shold be 5-10 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{5,10}$",
      required: true,
    },
    {
      id: 2,
      tabIndex: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errMessage: "Email shold be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      tabIndex: 3,
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
      id: 4,
      tabIndex: 4,
      name: "confirmPassword",
      type: `${showPassword.type}`,
      placeholder: "Confirm Password",
      errMessage: " Password don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const onSubmitHandler = (e) => {
    e.preventDefault();
    return register({ username, email, password });
  };

  const onChangeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        {inputs.map((input) =>
          input.id < 3 ? (
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
          Have account?{" "}
          <Link to="/login" className="text-success text-decoration-none">
            Log in
          </Link>
        </p>
        {username === "" ||
        email === "" ||
        password === "" ||
        confirmPassword === "" ? (
          <button
            type="submit"
            tabIndex={5}
            className="d-block fs-5 m-auto fw-semibold btn btn-success text-white mt-5 px-5"
            disabled
          >
            Sign Up
          </button>
        ) : (
          <button
            type="submit"
            tabIndex={5}
            className="d-block fs-5 m-auto fw-semibold btn btn-success text-white mt-5 px-5"
          >
            Sign Up
          </button>
        )}
      </form>
    </div>
  );
};

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
