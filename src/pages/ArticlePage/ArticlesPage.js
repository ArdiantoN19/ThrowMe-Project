import React, { useEffect } from "react";
import { useState } from "react";
import { getArticles, getFeaturedArticle } from "../../utils/api";
// //import component Bootstrap React
import { formatDate } from "../../utils/utils";
import "./article.css";
import { useSearchParams, Link } from "react-router-dom";
import SearchBar from "../../components/ArticleComponent/SearchBar";
// import FeaturedArticle from "../../components/ArticleComponent/FeaturedArticle";
// import CardArticle from "../../components/ArticleComponent/CardArticle";

const ArticlesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [articles, setArticles] = useState([]);
  const [featuredArticles, setFeaturedArticles] = useState([]);
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get("keyword") || "";
  });

  const onKeywordChangeHandler = (keyword) => {
    setKeyword(keyword);
    setSearchParams({ keyword });
  };

  useEffect(() => {
    const fetchArticles = async () => {
      const { data } = await getArticles();
      console.log(data);
      setArticles(data);
    };
    fetchArticles();
  }, []);

  useEffect(() => {
    const fetchFeaturedArticles = async () => {
      const { error, massage, data } = await getFeaturedArticle();
      if (error) {
        console.log("Error", massage);
      } else {
        

        setFeaturedArticles(data);
        console.log(data);
      }
    };
    fetchFeaturedArticles();
  }, []);

  const filteredArticles = articles.filter((article) => {
    return article.attributes.title
      .toLowerCase()
      .includes(keyword.toLowerCase());
  });
  return (
    <div className="container mt-5 pt-4 ">
      <div className="display-1 fs-1 text-center mb-4">
        <h1 >Article Page</h1>
      </div>


      {featuredArticles.map((featuredArticle) => (
        
          <div className="row justify-content-center align-items-start  mb-3" key={featuredArticle.id}>
              <div className="col-12 col-md-6">
                <img className="img-fluid rounded"
                  src={featuredArticle.attributes.thumbnail.data.attributes.url} 
                  alt={featuredArticle.attributes.thumbnail.data.attributes.name}
                />
              </div>
              <div className="col-12 col-md-6 ">
                  <div className="d-flex justify-content-between">
                    <small className="text-muted"> {featuredArticle.attributes.category.data.attributes.name}</small>
                    <small className="text-muted">{formatDate(featuredArticle.attributes.createdAt)}</small>
                  </div>
                 
                  <h5 className="card-title mt-2">{featuredArticle.attributes.title}</h5>
                  <p className="card-text">{featuredArticle.attributes.headline}
                  </p>
                  <div className="d-flex mt-auto">
                    <img
                      src="/assets/park.jpg"
                      className="rounded-circle img-thumbnail"
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "cover",
                      }}
                      alt="profile"
                    />
                    <div className="mx-3 my-auto">
                      <p className="fw-bold p-0 m-0">{featuredArticle.attributes.author.data.attributes.name}</p>
                      <small>{featuredArticle.attributes.author.data.attributes.job}</small>
                    </div>
                  </div>
                </div>
              </div>
      ))}

      <SearchBar keyword={keyword} setKeyword={onKeywordChangeHandler} />
      <div className="row justify-content-center align-items-center">
          {filteredArticles.length !== 0 ? (
            filteredArticles.map((article) => (
              <div className="col-12 col-md-5 col-lg-3 d-flex align-items-stretch" key={article.id}>
                <div className="card w-100 mb-4 border-0" >
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
                      <small className="text-muted"> {article?.attributes?.categor?.data?.attributes?.name}</small>
                      <small className="text-muted">
                        {formatDate(article.attributes.createdAt)}
                      </small>
                    </div>

                    <h4 className="article_title fw-bold fs-5 mb-3 text-start mt-3">
                      <Link
                        to={`/articles/${article.id}`}
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        {article.attributes.title}
                      </Link>
                    </h4>
                    <p className="article_head">
                      {article.attributes.headline}
                    </p>
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
            ))
          ) : (
            <p className="notes-list__empty"> Tidak ada Catatan</p>
          )}
        </div>
      {/* <div className="d-flex justify-content-center">
        <div className="w-75">
          <div className="d-flex justify-content-between mb-3">
            <h3>List Artikel</h3>
            <div className="searchBar d-flex">
              <input type="text" class="form-control rounded-pill" placeholder="Search" />
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="d-flex justify-content-center align-items-center">
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
        </div>toLowerCase
      </div> */}

      {/* <div className="row justify-content-center align-items-center row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 ">
        {articles.map((article) => (
          <div className="card m-1 gap-1" key={article.id}>
            <img
              className="img-fluid mt-2"
              src={article.attributes.thumbnail.data.attributes.url}
              alt={article.attributes.thumbnail.data.attributes.name}
            />
            <div className="card-body">
              <p>{formatDate(article.attributes.createdAt)}</p>

              <h5 className="article_title">
                <Link to={`/articles/${article.id}`}>
                  {article.attributes.title}
                </Link>
              </h5>
              <p className="article_head">{article.attributes.headline}</p>
              <h6>Author: {article.attributes.author.data.attributes.name}</h6>
              <h6>
                Job Author: {article.attributes.author.data.attributes.job}
              </h6>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default ArticlesPage;
