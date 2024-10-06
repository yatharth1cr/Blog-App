function Articles(props) {
  return (
    <article className="container">
      {props.articles.map((article, i) => (
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
          <a className="article-info-preview" href={article.slug}>
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
  );
}

export default Articles;
