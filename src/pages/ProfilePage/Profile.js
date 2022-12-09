import React from "react";
import PropTypes from "prop-types";
import { BiUser } from "react-icons/bi";
import Swal from "sweetalert2";
import { changeUserPassword } from "../../utils/api";
import { showFormattedDate } from "../../utils/showFormattedDate";
import NewPasswordInput from "../../components/Profile/NewPasswordInput";

const Profile = ({ authedUser }) => {
  const onChangeNewPassword = async (newPassword) => {
    const { error, message } = await changeUserPassword(newPassword);
    Swal.showLoading();
    setTimeout(() => {
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
          text: "Success to update your password",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    }, 2000);
  };

  return (
    <div
      className="container-fluid fs-5 mt-5 w-100 pt-4 bg-white"
      style={{ minHeight: "100vh" }}
    >
      <div className="row justify-content-center align-items-center pt-3">
        <div className="col-11 col-md-8 col-lg-7 py-4">
          <div className="border-bottom">
            <h2 className="text-success fw-bold">
              <BiUser /> Profile
            </h2>
          </div>
          <p
            style={{ fontSize: ".7em" }}
            className="text-black-50 text-end py-2"
          >
            Last Update: {showFormattedDate(authedUser.updatedAt)}
          </p>
          <div className="text-black">
            <NewPasswordInput
              authedUser={authedUser}
              changePassword={onChangeNewPassword}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  authedUser: PropTypes.object.isRequired,
};

export default Profile;
