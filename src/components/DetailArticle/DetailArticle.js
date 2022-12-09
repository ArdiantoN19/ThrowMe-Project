import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import { showFormattedDate } from "../../utils/showFormattedDate";
import { filterAvatarAuthor } from "../../utils/filterAvatarAuthor";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

const DetailArticle = ({ article, dataAuthor }) => {
  return (
    <div className="row justify-content-center align-items-center">
      <div className="col-12 col-md-10 ">
        <h1 className="article_title text-center fw-bold my-3">
          {article?.attributes?.title}
        </h1>
        <div className="text-center mb-4">
          <picture>
            <source
              className="img-fluid lazyload rounded shadow-sm"
              sizes="(max-width: 600px)"
              srcSet={
                article?.attributes?.thumbnail?.data?.attributes?.formats?.small
                  ?.url
              }
              alt={article?.attributes?.picture?.data?.attributes?.url}
              type="image/png"
            />
            <source
              className="img-fluid lazyload rounded shadow-sm"
              sizes="(max-width: 1000px)"
              srcSet={
                article?.attributes?.picture?.data?.attributes?.formats?.medium
                  ?.url
              }
              alt={article?.attributes?.picture?.data?.attributes?.url}
              type="image/png"
            />

            <source
              className="img-fluid lazyload rounded shadow-sm"
              sizes="(max-width: 1500px)"
              srcSet={
                article?.attributes?.picture?.data?.attributes?.formats?.large
                  ?.url
              }
              alt={article?.attributes?.picture?.data?.attributes?.url}
              type="image/png"
            />
            <img
              className="img-fluid lazyload rounded shadow-sm"
              data-src={
                article?.attributes?.picture?.data?.attributes?.formats?.large
                  ?.url
              }
              style={{ width: "700px", height: "400px", objectFit: "cover" }}
              alt={article?.attributes?.picture?.data?.attributes?.url}
            />
          </picture>
        </div>
        <div className="d-flex mt-auto mb-3">
          <img
            src={filterAvatarAuthor(
              article?.attributes?.author?.data?.id,
              dataAuthor
            )}
            className="rounded-circle border"
            style={{
              width: "50px",
              height: "50px",
              objectFit: "cover",
            }}
            alt="profile"
          />
          <div className="mx-3 my-auto">
            <p className="fw-bold p-0 m-0">
              {article?.attributes?.author.data?.attributes?.name}
            </p>
            <small>{article?.attributes?.author?.data?.attributes?.job}</small>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <small className=" bg-success rounded-pill px-2 py-1 text-white">
            {article?.attributes?.category?.data?.attributes?.name}
          </small>
          <small className="text-black-50">
            {showFormattedDate(article?.attributes?.createdAt)}
          </small>
        </div>
        <div style={{ textAlign: "justify" }}>
          <ReactMarkdown>{article?.attributes?.description}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

DetailArticle.propTypes = {
  article: PropTypes.object.isRequired,
  dataAuthor: PropTypes.array.isRequired,
};

export default DetailArticle;
