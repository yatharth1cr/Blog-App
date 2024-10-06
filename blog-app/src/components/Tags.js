import { useEffect, useState } from "react";
import { tagsUrl } from "../constant/const";

function Tags() {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetch(tagsUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        // console.log(data.tags, "data-tags checkkkk");
        setTags(data.tags);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  }, []);

  return (
    <aside className="sidebar">
      <div className="parent-tags">
        <p>Popular Tags</p>
        {tags.map((tag, i) => (
          <a href={tag} key={i}>
            {tag}
          </a>
        ))}
      </div>
    </aside>
  );
}

export default Tags;
