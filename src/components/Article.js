import React from 'react';
import { Link } from 'react-router-dom';

const Article = ({ article }) => {
  return (
    <div className="article">
      <img src={article.urlToImage} alt={article.title} />
      <h3>{article.title}</h3>
      <p>{article.description}</p>
      <Link to={`/article/${article.title}`}>Read more</Link>
    </div>
  );
};

export default Article;
