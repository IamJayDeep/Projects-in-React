import { useState, useEffect } from "react";
import NewsItem from "./NewsItem";

function NewsBoard({ category }) {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    const fetchArticle = async () => {
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
          import.meta.env.VITE_API_KEY
        }`
      );
      const data = await res.json();
      setArticle(data.articles);
      console.log(data.articles);
    };
    fetchArticle();
  }, [category]);

  return (
    <div style={{ width: "100vw" }}>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      <div style={{ width: "100%" }}>
        {article.map((news, index) => {
          return (
            <NewsItem
              key={index}
              title={news.title}
              description={news.content}
              src={news.urlToImage}
              url={news.url}
            />
          );
        })}
      </div>
    </div>
  );
}

export default NewsBoard;
