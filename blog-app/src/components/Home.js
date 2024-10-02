import { React, useEffect, useState } from "react";
import { articleUrl } from "../constant/const";
import Banner from "./Banner";

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
        console.log(data.articles, "Data checkkk");
        setArticles(data.articles);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }, []);

  return (
    <>
      <Banner />
      {articles.map((article) => (
        <div>
          <div></div>
        </div>
      ))}
    </>
  );
}

export default Home;
