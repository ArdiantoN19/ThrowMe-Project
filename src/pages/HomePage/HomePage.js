import React from "react";
import Footer from "../../components/Footer/Footer";
import About from "../../components/HomeComponent/About";
import BrowserMap from "../../components/HomeComponent/BrowserMap";
import Jumbotron from "../../components/HomeComponent/Jumbotron";
import ServiceCard from "../../components/HomeComponent/ServiceCard";
import "./home.css";

function HomePage() {
  return (
    <>
      <div className="jumbotron pt-5 mt-5">
        <div className="container">
          <Jumbotron />
        </div>
      </div>
      <div className="container">
        <About />
      </div>
      <div className="service-content mt-5">
        <div className="container">
          <ServiceCard />
        </div>
      </div>
      <div className="container mt-5">
        <BrowserMap />
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
