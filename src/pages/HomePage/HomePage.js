import React from "react";
import About from "../../components/HomeComponent/About";
import NewPlaceList from "../../components/HomeComponent/UpdatedPlace/NewPlaceList";
import Jumbotron from "../../components/HomeComponent/Jumbotron";
import ServiceCard from "../../components/HomeComponent/ServiceCard";
import "./home.css";
import NewArticleList from "../../components/HomeComponent/UpdatedArticle/NewArticleList";

const HomePage = () => {
  return (
    <>
      <div className="jumbotron pt-5 mt-5">
        <div className="container">
          <Jumbotron />
        </div>
      </div>
      <div className="container pb-3">
        <About />
      </div>
      <div className="mt-5 pb-3 bg-secondary">
        <div className="container">
          <ServiceCard />
        </div>
      </div>
      <div className="container mt-5">
        <NewPlaceList />
      </div>
      <div className="container mt-5">
        <NewArticleList />
      </div>
    </>
  );
};

export default HomePage;
