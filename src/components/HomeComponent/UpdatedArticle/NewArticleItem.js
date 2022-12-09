import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NewArticleItem = ({ id, url, category, title, headline }) => {
  return (
    <>
      <div className="col">
        <div className="card rounded">
          <div className="card-zoom">
            <img className="img-fluid zoom rounded-top" src={url} alt={title} />
          </div>
          <div className="p-2">
            <Link
              to={`/articles/${id}`}
              className="text-decoration-none fs-5 py-2 text-black fw-semibold title"
            >
              {title}
            </Link>
            <div className="text-white mt-1 mb-2" style={{ fontSize: ".7em" }}>
              <span className="rounded-pill text-capitalize bg-success py-1 px-2">
                {category}
              </span>
            </div>
            <div className="headline">{headline}</div>
          </div>
        </div>
      </div>
    </>
  );
};

NewArticleItem.propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
};

export default NewArticleItem;
