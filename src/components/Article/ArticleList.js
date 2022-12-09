import React from "react";
import ArticleItem from "./ArticleItem";
import PropTypes from "prop-types";
import { filterAvatarAuthor } from "../../utils/filterAvatarAuthor";
import "./article.css";

const ArticleList = ({ dataArticles, dataAuthors, onCategory }) => {
  if (!dataArticles.length) {
    return (
      <>
        <h2 className="text-black-50 text-center fs-2 mt-4">
          No articles found
        </h2>
      </>
    );
  }

  return (
    <>
      <div className="overflow-container row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 justify-content-start align-items-center">
        {dataArticles.map((dataArticle) => (
          <ArticleItem
            key={dataArticle.id}
            id={dataArticle.id}
            avatar={filterAvatarAuthor(
              dataArticle?.attributes?.author?.data?.id,
              dataAuthors
            )}
            category={dataArticle?.attributes?.category?.data?.attributes?.name}
            title={dataArticle?.attributes?.title}
            createdAt={dataArticle?.attributes?.createdAt}
            headline={dataArticle?.attributes?.headline}
            url={dataArticle?.attributes?.thumbnail?.data?.attributes?.url}
            authorName={dataArticle?.attributes?.author?.data?.attributes?.name}
            authorJob={dataArticle?.attributes?.author?.data?.attributes?.job}
            onCategory={onCategory}
          />
        ))}
      </div>
      <input type="checkbox" className="expand-btn scale" />
    </>
  );
};

ArticleList.propTypes = {
  dataArticles: PropTypes.array.isRequired,
  dataAuthors: PropTypes.array.isRequired,
  onCategory: PropTypes.func,
};

export default ArticleList;
