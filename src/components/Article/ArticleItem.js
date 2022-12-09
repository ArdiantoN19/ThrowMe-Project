import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { showFormattedDate } from "../../utils/showFormattedDate";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

const ArticleItem = ({
  id,
  url,
  category,
  avatar,
  createdAt,
  title,
  headline,
  authorName,
  authorJob,
  onCategory,
}) => {
  const onCategoryHandler = (e) => {
    onCategory(e.target.innerText.toLowerCase());
  };

  return (
    <>
      <div className="col mb-3 mb-md-4">
        <div className="card rounded">
          <div className="card-zoom">
            <img
              data-src={url}
              alt={url}
              className="img-fluid rounded-top card-img zoom lazyload"
            />
          </div>
          <div className="card-body">
            <div
              className="d-flex justify-content-between align-items-center"
              style={{ fontSize: ".8em" }}
            >
              <button
                className="bg-success rounded-pill px-2 py-1 text-white text-capitalize border-0"
                onClick={onCategoryHandler}
              >
                {category}
              </button>
              <small className="text-black-50">
                {showFormattedDate(createdAt)}
              </small>
            </div>

            <h4 className="article_title fw-semibold fs-5 mb-3 text-start mt-3">
              <Link
                to={`/articles/${id}`}
                className="text-decoration-none text-black"
              >
                {title}
              </Link>
            </h4>
            <p className="article_head" style={{ textAlign: "justify" }}>
              {headline}
            </p>
            <div className="d-flex mt-auto">
              <img
                src={avatar}
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
    </>
  );
};

ArticleItem.propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  authorJob: PropTypes.string.isRequired,
  onCategory: PropTypes.func,
};

export default ArticleItem;
