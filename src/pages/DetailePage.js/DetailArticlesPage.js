import React from "react";
import { formatDate } from "../../utils/utils";
import { useParams } from "react-router-dom";
import { getArticle, getAuthors } from "../../utils/api";

const DetailArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = React.useState({});
const [avatar, setAvatar] = React.useState({});
const idAuthor = article?.attributes?.author?.data?.attributes?.id


React.useEffect(() =>{
  const fetchGetAuthors = async () => {
    const {data, error, message } = await getAuthors(idAuthor);
    if (error){
      console.log(error,message);
    } else {
      setAvatar(data);
     
    }
  };

  fetchGetAuthors();
},[idAuthor])

 console.log(idAuthor);

  React.useEffect(() => {
    const fetchGetArticles = async () => {
      const { data, error, message } = await getArticle(id);
      if (error) {
        console.log(error, message);
      } else {
        setArticle(data);
        console.log(data);
      }
    };

    fetchGetArticles();
  }, [id]);



  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-10 ">
              <h4 className="article_title mt-5 pt-5 text-center fw-bold">
                {article.attributes?.title}
              </h4>
              <div className="d-flex justify-content-center align-items-center mt-3 mb-3">
                <img className="img-fluid"
                  src={
                    article.attributes?.picture.data.attributes.formats.medium
                      .url
                  }
                  alt={
                    article.attributes?.picture.data.attributes.formats.medium
                      .url
                  }
                  style={{
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </div>

                <div className="d-flex justify-content-between mb-3">
                  <small className=" bg-success rounded-pill px-2 py-1 text-white">
                    {article?.attributes?.category?.data?.attributes?.name}
                  </small>
                  <small className="text-muted">
                    {formatDate(article.attributes?.createdAt)}
                  </small>
                </div>
                <p>
                  {article.attributes?.description}
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
                  <div className="mx-3 my-auto mb-3">
                    <p className="fw-bold p-0 m-0">
                      {article.attributes?.author.data.attributes?.name}
                    </p>
                    <small>
                      {article.attributes?.author.data.attributes?.job}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
  );
};

export default DetailArticlePage;

// div className="d-flex justify-content-center align-items-center">
// <div className="row w-75">
//     filteredArticles.map((article, index) => (
//       index <= 4 ?(
//         <div className="col-md-4 d-flex align-items-stretch">
//         <div className="card w-100 mb-4 border-0" key={article.id}>
//           <img
//             src={article.attributes.thumbnail.data.attributes.url}
//             alt={article.attributes.thumbnail.data.attributes.name}
//             style={{
//               height: "200px",
//               objectFit: "cover",
//               borderRadius: "10px",
//             }}
//           />

//           <div className="card-body d-flex flex-column">
//             <div className="d-flex justify-content-between">
//               <small className="text-muted">Kategori</small>
//               <small className="text-muted">
//                 {/* {formatDate(article.attributes.createdAt)} */}
//               </small>
//             </div>

//             <h4 className="article_title fw-bold mb-3">
//               <Link
//                 to={`/articles/${article.id}`}
//                 style={{ color: "black", textDecoration: "none" }}
//               >
//                 {article.attributes.title}
//               </Link>
//             </h4>
//             <p className="article_head">{article.attributes.headline}</p>
//             <div className="d-flex mt-auto">
//               <img
//                 src="/assets/park.jpg"
//                 className="rounded-circle img-thumbnail"
//                 style={{
//                   width: "50px",
//                   height: "50px",
//                   objectFit: "cover",
//                 }}
//                 alt="profile"
//               />
//               <div className="mx-3 my-auto">
//                 <p className="fw-bold p-0 m-0">
//                   {article.attributes.author.data.attributes.name}
//                 </p>
//                 <small>
//                   {article.attributes.author.data.attributes.job}
//                 </small>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       </div>
//       ):()

//       </div>
