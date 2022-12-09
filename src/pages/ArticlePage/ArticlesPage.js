import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ArticleList from "../../components/Article/ArticleList";
import { getFeaturedArticle, getArticles, getAuthors } from "../../utils/api";
import CategoryList from "../../components/Article/CategoryList";
import ArticleLoading from "../../components/Article/ArticleLoading";
import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/Article/SearchBar";
import FeaturedArticle from "../../components/Article/FeaturedArticle";
import FeaturedLoading from "../../components/Article/FeaturedLoading";
import Carousel from "react-bootstrap/Carousel";

const ArticlesPage = () => {
  const [featuredArticle, setFeaturedArticle] = useState([]);
  const [articles, setArticles] = useState([]);
  const [isError, setIsError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [authors, setAuthors] = useState([]);
  const [category, setCategory] = useState("");
  const [index, setIndex] = useState(0);

  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get("keyword") || "";
  });

  useEffect(() => {
    const fetchArticles = async () => {
      const { error, message, data } = await getArticles();
      if (error) {
        setIsError(message);
      } else {
        setArticles(data);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }
    };
    fetchArticles();
  }, []);

  useEffect(() => {
    const fetchFeaturedArticles = async () => {
      const { error, message, data } = await getFeaturedArticle();
      if (error) {
        setIsError(message);
      } else {
        setFeaturedArticle(data);
      }
    };
    fetchFeaturedArticles();
  }, []);

  useEffect(() => {
    const fetchAuthors = async () => {
      const { error, message, data } = await getAuthors();
      if (error) {
        setIsError(message);
      } else {
        setAuthors(data);
      }
    };
    fetchAuthors();
  }, []);

  const onCategoryHandler = (category) => {
    setCategory(category);
  };

  const onSearchHandler = (keyword) => {
    setKeyword(keyword);
    setSearchParams({ keyword });
  };

  const filteredArticles = articles.filter((article) => {
    return article.attributes.title
      .toLowerCase()
      .includes(keyword.toLowerCase());
  });

  const filterArticleByCategory = articles.filter((article) => {
    return article.attributes.category.data.attributes.name
      .toLowerCase()
      .includes(category);
  });

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  // console.log(filterArticleByCategory);
  // console.log(category);
  // console.log(articles);
  // console.log(featuredArticle);

  if (isLoading) {
    let rowsLoading = [];

    for (let index = 1; index <= articles.length; index++) {
      rowsLoading.push(<ArticleLoading key={index} />);
    }

    return (
      <>
        <div className="container mt-5 pt-4">
          <div className="row justify-content-end mb-3 align-items-center">
            <div className="col-12 col-md-6 col-lg-4">
              <SearchBar search={keyword} onSearch={onSearchHandler} />
            </div>
          </div>
          <div className="mb-3">
            <FeaturedLoading />
          </div>
          <div className="mb-3">
            <CategoryList onCategory={onCategoryHandler} />
          </div>
          <div className="fs-1 text-black-50">{isError}</div>
          <div
            className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 justify-content-evenly align-items-center"
            style={{ minHeight: "85vh" }}
          >
            {rowsLoading}
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <div className="container mt-5 pt-4">
        <div className="row justify-content-end mb-3 align-items-center">
          <div className="col-12 col-md-6 col-lg-4">
            <SearchBar search={keyword} onSearch={onSearchHandler} />
          </div>
        </div>
        {keyword === "" ? (
          <>
            <div className="mb-3">
              <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                controls={false}
              >
                {featuredArticle.map((dataFeature, index) => (
                  <Carousel.Item key={index}>
                    <FeaturedArticle
                      key={dataFeature.id}
                      id={dataFeature.id}
                      url={
                        dataFeature?.attributes?.thumbnail?.data?.attributes
                          ?.formats?.small?.url
                      }
                      category={
                        dataFeature?.attributes?.category?.data?.attributes
                          ?.name
                      }
                      dataAuthor={authors}
                      idAuthor={dataFeature?.attributes?.author?.data?.id}
                      title={dataFeature?.attributes?.title}
                      createdAt={dataFeature?.attributes?.createdAt}
                      headline={dataFeature?.attributes?.headline}
                      authorName={
                        dataFeature?.attributes?.author?.data?.attributes?.name
                      }
                      authorJob={
                        dataFeature?.attributes?.author?.data?.attributes?.job
                      }
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
            <div className="row mb-3">
              <CategoryList onCategory={onCategoryHandler} />
            </div>
          </>
        ) : null}

        <div className="fs-1 text-black-50">{isError}</div>
        <div style={{ minHeight: "85vh" }}>
          {keyword === "" ? (
            <ArticleList
              dataFeatured={featuredArticle}
              dataArticles={
                category === "all" ? articles : filterArticleByCategory
              }
              dataAuthors={authors}
              onCategory={onCategoryHandler}
            />
          ) : (
            <ArticleList
              dataFeatured={featuredArticle}
              dataArticles={filteredArticles}
              dataAuthors={authors}
              onCategory={onCategoryHandler}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ArticlesPage;
