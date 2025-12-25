function ArticleCard({ article }) {
    return (
      <div
        style={{
          border: "1px solid #ddd",
          padding: "15px",
          marginBottom: "15px",
          borderRadius: "5px",
        }}
      >
        <h3>{article.title}</h3>
  
        <p style={{ fontSize: "12px", color: "#666" }}>
          Version: {article.version}
        </p>
  
        <p>
          {article.content.length > 200
            ? article.content.substring(0, 200) + "..."
            : article.content}
        </p>
      </div>
    );
  }
  
  export default ArticleCard;
  