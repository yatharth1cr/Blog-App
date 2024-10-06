import Banner from "./Banner";

function Article(props) {
  return (
    <article className="article-page">
      <div>
        <Banner head={props} bgColor={"#333"} meta={props} />
      </div>
    </article>
  );
}

export default Article;
