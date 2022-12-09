import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { showFormattedDate } from "../../utils/showFormattedDate";
import { filterAvatarAuthor } from "../../utils/filterAvatarAuthor";
import "./article.css";

const FeaturedArticle = ({
  id,
  url,
  category,
  createdAt,
  title,
  headline,
  authorName,
  authorJob,
  idAuthor,
  dataAuthor,
}) => {
  return (
    <div className="mt-2 mt-md-4">
      <div className="row justify-content-center align-items-start mb-3">
        <div className="col-12 col-md-6">
          <img
            className="img-fluid rounded card-img-featured mb-3 mb-lg-0"
            src={url}
            alt={title}
          />
        </div>
        <div className="col-12 col-md-6 mb-3">
          <div className="d-flex justify-content-between align-items-center mb-3 mb-md-2">
            <small className="bg-success rounded-pill px-2 py-1 text-white mt-2">
              {category}
            </small>
            <small className="text-black-50">
              {showFormattedDate(createdAt)}
            </small>
          </div>

          <h3 className="card-title mb-3">
            <Link
              to={`/articles/${id}`}
              className="fs-4 text-decoration-none text-black fw-semibold"
            >
              {title}
            </Link>
          </h3>
          <p
            className="card-text article_headline"
            style={{ textAlign: "justify" }}
          >
            {headline}
          </p>
          <div className="d-flex">
            <img
              src={filterAvatarAuthor(idAuthor, dataAuthor)}
              className="rounded-circle border"
              style={{
                width: "50px",
                height: "50px",
                objectFit: "cover",
              }}
              alt="profile"
            />
            <div className="mx-3 my-auto">
              <p className="fw-bold p-0 m-0">{authorName}</p>
              <small>{authorJob}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FeaturedArticle.propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  authorJob: PropTypes.string.isRequired,
  dataAuthor: PropTypes.array.isRequired,
};

export default FeaturedArticle;
