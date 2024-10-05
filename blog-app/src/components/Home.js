import { React, useEffect, useState } from "react";
import { articleUrl } from "../constant/const";
import Banner from "./Banner";
import Tags from "./Tags";

function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetching the data
    fetch(articleUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        // console.log(data, "Data checkkk");
        setArticles(data.articles);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }, []);

  if (!articles) {
    return (
      <>
        <Banner />
        <p>Loading...</p>;
      </>
    );
  }
  return (
    <>
      <Banner />
      <div className="flex space-evenly">
        <article className="container">
          {articles.map((article, i) => (
            <div className="article-preview flex column" key={article.slug}>
              <div className="article-meta flex space-between">
                <div className="flex space-between">
                  <a href="/">
                    <img src={article.author.image} alt="img" />
                  </a>
                  <div className="article-info flex column space-evenly">
                    <a href="/">{article.author.username}</a>
                    <span>{article.createdAt}</span>
                  </div>
                </div>
                <div>
                  <button className="like-button">
                    <i
                      className="fa-solid fa-heart"
                      style={{
                        color: "cornflowerblue",
                      }}
                    ></i>
                    {article.favoritesCount}
                  </button>
                </div>
              </div>
              <a className="article-info-preview" href="/">
                <h1>{article.title}</h1>
                <p>{article.description}</p>
                <div className="article-bottom flex space-between">
                  <span>Read more...</span>
                  <ul className="tag-list flex space-between">
                    {article.tagList.map((tag, i) => (
                      <li key={i}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </a>
            </div>
          ))}
        </article>
        <Tags />
      </div>
    </>
  );
}

export default Home;
