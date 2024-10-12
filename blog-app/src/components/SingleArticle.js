// import { useState } from "react";
import Banner from "./Banner";

function SingleArticle(props) {
  // const [article, setArticle] = useState(null);
  // const [error, setError] = useState("");

  return (
    <article className="article-page">
      <div>
        <Banner head={props} bgColor={"#333"} meta={props} />
      </div>
    </article>
  );
}

export default SingleArticle;
