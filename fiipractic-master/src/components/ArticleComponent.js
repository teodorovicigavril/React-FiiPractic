import React from "react";

const ArticleComponent = ({ title, content }) => (
  <div className="articleContainer">
    <div className="articleTitle">{title}</div>
    <div className="articleContent">{content}</div>
  </div>
);

export default ArticleComponent;
