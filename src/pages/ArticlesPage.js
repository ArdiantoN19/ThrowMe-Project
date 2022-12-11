import React, {useEffect}  from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getArticles, getFeaturedArticle} from "../utils/api";
//import component Bootstrap React
import { formatDate } from "../utils/utils";
import "./article.css";


// function ArticlesPage() {
//   const [article, setArticle] = useState([])
  
//   useEffect(() => {
//     getArticles().then((res) => {
//       res.data.forEach((data) => console.log(data.attributes.thumbnail.data.attributes.formats.large.url))
//       setInterval(() => {
//         setArticle(res.data)
//       }, 3000)
//     })
//   },[])
//   return (
//     <div>
//       <h1 className="text-center fw-bold fs-1">Article page</h1>
//       {article.length !== 0 ? (
//         article.map((data) => {
//           return (
//             <>
//             <h1 key={data.id}>{data.attributes.title}</h1>
//             <img src={data.attributes.thumbnail.data.attributes.formats.large.url} alt={data.id} />
//             </>
//           )
//         })
//       ) : (
//         <h1>Loading...</h1>
//       )}
//     </div>
    

    
//     <div className="card">
//       <h1 className="text-center fw-bold fs-1">Article page</h1>
//       {article.length !== 0 ? (
//         article.map((data) => {
//           return (
//             <>

//             <h1 key={data.id}>{data.attributes.title}</h1>
//             <img src={data.attributes.thumbnail.data.attributes.formats.large.url} alt={data.id} />
//             <div className="card-title">
//             <h2 class="card-text" key={data.id}>{data.attributes.headline}</h2>
//             </div>
//             <p class="card-text" key={data.id}>{data.attributes.description}</p>
//             </>
//           )
//         })
//       ) : (
//         <h1>Loading...</h1>
//       )}
        
//     </div>
    
//   );
// }



const ArticlesPage = () => {
  const [featuredArticles, setFeaturedArticles] = useState([])
  useEffect (() => {
    const fetchFeaturedArticles = async() => {
      const {error, massage, data} = await getFeaturedArticle()
      if (error){
        console.log("Error", massage)
      } else { setFeaturedArticles(data) 
        console.log(data)
      }
      
    }
    fetchFeaturedArticles()
  }, [])
  const [articles, setArticles] = useState([])
  useEffect (() => {
    const fetchArticles = async() => {
      const {data}=await getArticles()
      setArticles(data)

      console.log(data);
    }
    fetchArticles()
  }, [])
  

  return( 
    <div className="container mt-5 pt-3">
      <div className="display-1 fs-1 text-center">
        <h1>Article Page</h1>
      </div>
        {
          featuredArticles.map((featuredArticle) =>(
            <div className="row row-cols-2" key={featuredArticle.id}>
              <div className="col">
              <img src={featuredArticle.attributes.thumbnail.data.attributes.url} className="img-fluid rounded" alt={featuredArticle.attributes.thumbnail.data.attributes.name}/>
              </div>
            <div className="col">
              <Link className="fs-3">{featuredArticle.attributes.title}</Link>
              <p  style={{fontSize:".9em"}}>{featuredArticle.attributes.headline}</p>
              <p className="text-black-50" style={{fontSize:".9em"}}><small className="text-muted">{formatDate(featuredArticle.attributes.createdAt)}</small></p>
            </div>
            </div>

          ))
        }
        
      
      <div className="row justify-content-center align-items-center row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 ">
        {
          
          articles.map((article, index) =>(
            
            
            <div className="card m-1 gap-1" key={index}>
              <img className="img-fluid mt-2 rounded" src={article.attributes.thumbnail.data.attributes.url} alt={article.attributes.thumbnail.data.attributes.name}/>
              <div className="card-body">
                <p>{formatDate(article.attributes.createdAt)}</p>
                <Link to={`/articles/${article.id}`}>
                  {article.attributes.title}
                </Link>
                <p className="article_head">{article.attributes.headline}</p>
                <h6>Author: {article.attributes.author.data.attributes.name}</h6>
                <h6>Job Author: {article.attributes.author.data.attributes.job}</h6>
              </div>

            </div>
          ))
        }
        

      </div>
    </div>
  )
}

export default ArticlesPage;
