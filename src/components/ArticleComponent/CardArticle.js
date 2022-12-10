import React from "react";
import PropTypes from "prop-types";
import { Link} from "react-router-dom";
import { formatDate } from "../../utils/utils";

const NoteList = ({ articles, article }) => {
  return (
    <div className="d-flex justify-content-center align-items-center">
    <div className="row w-75">
      {articles.map((article) => (
        <div className="col-md-4 d-flex align-items-stretch">
          <div className="card w-100 mb-4 border-0" key={article.id}>
            <img
              src={article.attributes.thumbnail.data.attributes.url}
              alt={article.attributes.thumbnail.data.attributes.name}
              style={{
                height: "200px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />

            <div className="card-body d-flex flex-column">
              <div className="d-flex justify-content-between">
                <small className="text-muted">Kategori</small>
                <small className="text-muted">
                  {formatDate(article.attributes.createdAt)}
                </small>
              </div>

              <h4 className="article_title fw-bold mb-3">
                <Link
                  to={`/articles/${article.id}`}
                  style={{ color: "black", textDecoration: "none" }}
                >
                  {article.attributes.title}
                </Link>
              </h4>
              <p className="article_head">{article.attributes.headline}</p>
              <div className="d-flex mt-auto">
                <img
                  src="/assets/park.jpg"
                  className="rounded-circle img-thumbnail"
                  style={{
                    width: "50px",
                    height: "50px",
                    objectFit: "cover",
                  }}
                  alt="profile"
                />
                <div className="mx-3 my-auto">
                  <p className="fw-bold p-0 m-0">
                    {article.attributes.author.data.attributes.name}
                  </p>
                  <small>
                    {article.attributes.author.data.attributes.job}
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

NoteList.propTypes = {
  Notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func,
};

export default NoteList;
