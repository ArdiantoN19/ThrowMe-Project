import React from "react";
import About from "../../components/HomeComponent/About";
import Jumbotron from "../../components/HomeComponent/Jumbotron";
import ServiceCard from "../../components/HomeComponent/ServiceCard";
import "./home.css";

function HomePage() {
  return (
    <>
      <div className="jumbotron pt-3">
        <div className="container">
          <Jumbotron />
        </div>
      </div>
      <div className="container">
        <About />
      </div>
      <div className="service-content mt-5">
        <div className="container">
          <h2 className="fs-2 fw-bold">What can you do?</h2>
          <ServiceCard />
        </div>
      </div>
    </>
  );
}

export default HomePage;
