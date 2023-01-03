import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import HomePage from "./pages/HomePage/HomePage";
import { Navbar, ArrowUp } from "./components/Navigation/Navbar";
import { getUserLogged, putAccessToken } from "./utils/api";
import MapsPage from "./pages/MapsPage/MapsPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ArticlesPage from "./pages/ArticlePage/ArticlesPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Profile from "./pages/ProfilePage/Profile";
import NotFoundPage from "./pages/404Page/NotFoundPage";
import LocationPage from "./pages/LocationPage/LocationPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import Footer from "./components/Footer/Footer";

const App = () => {
  const navigate = useNavigate();
  const locaton = useLocation();
  const pathName = locaton.pathname;
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true); //Disini

  // to get the user when he/she is already logged in
  useEffect(() => {
    const fetchUserLogged = async () => {
      const { data } = await getUserLogged();
      setAuthedUser(data);
      setInitializing(false);
    };
    fetchUserLogged();
  }, []);

  // to set a user token when logging in and get data user
  const onLoginSuccess = async (accessToken) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  };

  // to destroy a user token
  const onLogoutHandler = () => {
    Swal.fire({
      title: "Do you want to logout from this app?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: "No",
    }).then((result) => {
      Swal.showLoading();
      setTimeout(() => {
        if (result.isConfirmed) {
          Swal.fire({
            icon: "success",
            title: "Success to logout!",
            text: "",
            showConfirmButton: false,
            timer: 2000,
          });
          setAuthedUser(null);
          putAccessToken("");
          navigate("/");
        } else if (result.isDenied) {
          return;
        }
      }, 2000);
    });
  };

  if (initializing === true) {
    return null;
  }

  if (authedUser === null) {
    return (
      <div>
        {pathName !== "/login" && pathName !== "/register" ? (
          <header>
            <Navbar authedUser={authedUser} />
          </header>
        ) : null}

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/maps" element={<MapsPage />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/articles/:id" element={<DetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route
              path="/login"
              element={<LoginPage loginSuccess={onLoginSuccess} />}
            />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <ArrowUp />
        </main>
        {pathName !== "/maps" &&
        pathName !== "/login" &&
        pathName !== "/register" ? (
          <footer className="mt-5">
            <Footer />
          </footer>
        ) : null}
      </div>
    );
  }

  return (
    <div>
      <header>
        <Navbar name={authedUser.username} logout={onLogoutHandler} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/maps" element={<MapsPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/articles/:id" element={<DetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/profile"
            element={<Profile authedUser={authedUser} />}
          />
          <Route
            path="/locations"
            element={<LocationPage authedUser={authedUser} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <ArrowUp />
      </main>
      {pathName !== "/maps" ? (
        <footer className="mt-5">
          <Footer />
        </footer>
      ) : null}
    </div>
  );
};

export default App;
