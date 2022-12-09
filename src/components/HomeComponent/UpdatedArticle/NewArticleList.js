import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUpdatedArticle } from "../../../utils/api";
import NewArticleItem from "./NewArticleItem";
import NewArticleLoading from "./NewArticleLoading";

const NewArticleList = () => {
  const [newArticles, setNewArticles] = useState([]);
  const [isError, setIsError] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNewPlaces = async () => {
      const { error, message, data } = await getUpdatedArticle();
      if (error) {
        setIsError(`Something wrong, ${message}`);
      } else {
        setNewArticles(data);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    };
    fetchNewPlaces();
  }, []);

  if (isLoading) {
    const rowsLoading = [];
    for (let index = 1; index <= newArticles.length; index++) {
      rowsLoading.push(<NewArticleLoading key={index} />);
    }

    return (
      <div>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div className="col-12 col-md-6 col-lg-5">
            <h2 className="fs-2 fw-bold">What's new for you?</h2>
          </div>
          <div className="col-1 bg-black line"></div>
          <div className="col-4 mt-4 mt-md-0 col-md-4 col-lg-2 d-none d-md-block">
            <Link
              to="/articles"
              className="btn fw-bold btn-white text-dark border border-2 border-black btn-clicked px-3"
            >
              Look more
            </Link>
          </div>
        </div>
        <div className="row g-3 row-cols-1 row-cols-md-2  row-cols-lg-3 row-cols-xl-4 justify-content-start align-items-center mt-5">
          {rowsLoading}
          <div className="fs-3 text-black-50">{isError}</div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="col-12 col-md-6 col-lg-5">
          <h2 className="fs-2 fw-bold">What's new for you?</h2>
        </div>
        <div className="col-1 bg-black line"></div>
        <div className="col-4 mt-4 mt-md-0 col-md-4 col-lg-2 d-none d-md-block">
          <Link
            to="/articles"
            className="btn fw-bold btn-white text-dark border border-2 border-black btn-clicked px-3"
          >
            Look more
          </Link>
        </div>
      </div>
      <div className="row g-3 row-cols-1 row-cols-md-2  row-cols-lg-3 row-cols-xl-4 justify-content-start align-items-center mt-5">
        {newArticles.map((newArticle) => (
          <NewArticleItem
            key={newArticle.id}
            id={newArticle.id}
            url={
              newArticle?.attributes?.thumbnail?.data?.attributes?.formats
                ?.thumbnail?.url
            }
            title={newArticle?.attributes?.title}
            category={newArticle?.attributes?.category?.data?.attributes?.name}
            headline={newArticle?.attributes?.headline}
          />
        ))}
        <div className="fs-3 text-black-50">{isError}</div>
      </div>
    </div>
  );
};

export default NewArticleList;
