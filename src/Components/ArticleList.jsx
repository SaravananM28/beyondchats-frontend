import { useEffect, useState } from "react";
import axios from "axios";
import ArticleCard from "./ArticleCard";

function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const API_URL =
      import.meta.env.VITE_API_URL || "http://localhost:8000";

    axios
      .get(`${API_URL}/api/articles`)
      .then((res) => {
        setArticles(res.data);
      })
      .catch((error) => {
        console.log("API failed, using mock data", error);

        // fallback mock data
        setArticles([
          {
            id: 1,
            title: "How AI is Changing Customer Support",
            content:
              "Artificial Intelligence is transforming the way businesses handle customer interactions...",
            version: "original",
          },
          {
            id: 2,
            title: "Improved AI Support Workflow",
            content:
              "This updated version focuses on clarity, better structure, and practical examples...",
            version: "updated",
          },
        ]);
      });
  }, []);

  return (
    <div>
      {articles.length === 0 && <p>No articles found.</p>}

      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}

export default ArticleList;
