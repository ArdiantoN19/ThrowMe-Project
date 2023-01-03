import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { register } from "../../utils/api";
import RegisterInput from "../../components/Register/RegisterInput";
import Swal from "sweetalert2";
import { AiOutlineArrowLeft } from "react-icons/ai";

const RegisterPage = () => {
  const navigate = useNavigate();

  const onRegisterHandler = async (user) => {
    const { error, message } = await register(user);
    Swal.showLoading();
    setTimeout(() => {
      if (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: message,
          showConfirmButton: false,
          timer: 1750,
        });
      } else {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Success to sign up",
          showConfirmButton: false,
          timer: 2000,
        });
        navigate("/login");
      }
    }, 2000);
  };

  return (
    <div className="container bg-white mt-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-10 col-md-8 col-lg-12">
          <Link className=" text-decoration-none mt-5 text-success" to="/">
            <AiOutlineArrowLeft className="fs-5" /> Back
          </Link>
        </div>
      </div>
      <div
        className="row justify-content-center align-items-center"
        style={{ minHeight: "90vh" }}
      >
        <div className="col-10 col-md-8 col-lg-6 d-none d-lg-block">
          <img
            src="/assets/illustrations/Mobile login-pana.svg"
            className="img-fluid"
            alt="register auth"
          />
        </div>
        <div className="col-12 col-md-8 col-lg-5 py-3 px-5">
          <p className="text-center fs-1 text-success">
            <BiUser />
          </p>
          <h1 className="text-center text-uppercase fw-bold border-bottom text-success pb-2 mb-4">
            register
          </h1>
          <RegisterInput register={onRegisterHandler} />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
