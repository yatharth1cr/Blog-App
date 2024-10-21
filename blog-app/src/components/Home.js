import { React, useEffect, useState } from "react";
import { articleUrl } from "../constant/const";
import Banner from "./Banner";
import Tags from "./Tags";
import Articles from "./Articles";

function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetching the data
    fetch(articleUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setArticles(data.articles);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
      });
  }, []);

  if (!articles) {
    return (
      <>
        <Banner />
        <p>Loading...</p>
      </>
    );
  }
  return (
    <>
      <Banner
        head={"Banner"}
        bgColor={"cornflowerblue"}
        meta={"A place to share your knowledge."}
      />
      <div className="flex space-evenly">
        <Articles articles={articles} />
        <Tags />
      </div>
    </>
  );
}

export default Home;
