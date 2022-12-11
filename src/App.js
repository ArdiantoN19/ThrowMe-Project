import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Navbar from "./components/Navbar";
import { getUserLogged, putAccessToken } from "./utils/api";
import MapsPage from "./pages/MapsPage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ArticlesPage from "./pages/ArticlesPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Swal from "sweetalert2";
import DetailArticlePage from "./pages/Detail/detail";
// import withReactContent from "sweetalert2-react-content";

function App() {
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const fetchUserLogged = async () => {
      const { data } = await getUserLogged();
      setAuthedUser(data);
      setInitializing(false);
    };
    fetchUserLogged();
  }, []);

  const onLoginSuccess = async (accessToken) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  };

  const onLogoutHandler = () => {
    Swal.fire({
      title: "Do you want to logout from this app?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Anda berhasil logout!", "", "success", false);
        setAuthedUser(null);
        putAccessToken("");
      } else if (result.isDenied) {
        return;
      }
    });
  };

  if (initializing === true) {
    return null;
  }

  if (authedUser === null) {
    return (
      <div>
        <header>
          <Navbar authedUser={authedUser} />
        </header>
        <main>
          <Routes>
            <Route path="/*" element={<HomePage />} />
            <Route path="/maps" element={<MapsPage />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/articles/:id" element={<DetailArticlePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route
              path="/login"
              element={<LoginPage loginSuccess={onLoginSuccess} />}
            />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
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
          <Route path="/*" element={<HomePage />} />
          <Route path="/maps" element={<MapsPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/articles/:id" element={<DetailArticlePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
