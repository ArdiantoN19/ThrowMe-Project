import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import DetailArticle from "../../components/DetailArticle/DetailArticle";
import { getArticle, getAuthors } from "../../utils/api";

const DetailPage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({});
  const [isError, setIsError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetctDetailArticle = async () => {
      const { error, message, data } = await getArticle(id);
      if (error) {
        setIsError(message);
      } else {
        setArticle(data);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }
    };

    fetctDetailArticle();
  }, [id]);

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

  return (
    <div className="container mt-5 pt-5 mb-5 pb-5">
      <Link className=" text-decoration-none mt-5 text-success" to="/articles">
        <AiOutlineArrowLeft className="fs-5" /> Back
      </Link>
      {isLoading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "80vh" }}
        >
          {isError === "" ? (
            <h1 className="fs-3  text-black-50">Loading...</h1>
          ) : (
            <h1 className="text-center text-black-50">{isError}</h1>
          )}
        </div>
      ) : (
        <DetailArticle article={article} dataAuthor={authors} />
      )}
    </div>
  );
};

export default DetailPage;
