import React from "react";
import { useParams } from "react-router-dom";
import { getArticle } from "../../utils/api";
import { formatDate } from "../../utils/utils";

// import { Link } from "react-router-dom";

const DetailArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = React.useState({});

  const fetchGetArticles = async () => {
    const { data, error, message } = await getArticle(id);
    if (error) {
      console.log(error, message);
    } else {
      setArticle(data);
      console.log(data);
    }
  };
  React.useEffect(() => {
    

    fetchGetArticles();
  }, [id]);

  console.log(article);
  console.log(article.attributes?.title);
  // console.log(article.attributes.picture.data.attributes.medium.url)
  return (
    <div>
      <section className="detail-page">
          <h3 className="detail-page__title">{article.attributes?.title}</h3>
          <img
            className="img-fluid mt-2"
            src={article.attributes?.picture?.data?.attributes?.formats?.medium?.url}
            alt={article.attributes?.picture?.data?.attributes?.formats.medium?.url}
          />
          <p>{formatDate(article.attributes?.createdAt)}</p>
          <div className="detail-page__body">
            {article.attributes?.description}
          </div>
        </section>
    </div>
  );
};

export default DetailArticlePage;
