import React from "react";
import PropTypes from "prop-types";
import { BiUser } from "react-icons/bi";
import { login } from "../../utils/api";
import LoginInput from "../../components/Login/LoginInput";
import Swal from "sweetalert2";

function LoginPage({ loginSuccess }) {
  const onLoginHandler = async (user) => {
    const { error, message, data } = await login(user);
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
        text: "Success to login",
        showConfirmButton: false,
        timer: 2000,
      });
      return loginSuccess(data.jwt);
    }
  };

  return (
    <div className="container bg-white mt-5">
      <div
        className="row justify-content-center align-items-center"
        style={{ minHeight: "90vh" }}
      >
        <div className="col-10 col-md-8 col-lg-6 d-none d-lg-block">
          <img
            src="/assets/illustrations/Mobile login-cuate.svg"
            className="img-fluid"
            alt="login auth"
          />
        </div>
        <div className="col-12 col-md-8 col-lg-5 py-3 px-5">
          <p className="text-center fs-1 text-success">
            <BiUser />
          </p>
          <h1 className="text-center text-uppercase fw-bold border-bottom text-success pb-2 mb-4">
            Login
          </h1>
          <LoginInput login={onLoginHandler} />
        </div>
      </div>
    </div>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
