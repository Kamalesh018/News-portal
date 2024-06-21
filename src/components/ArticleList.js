import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles } from '../redux/articlesSlice';
import Article from './Article';

const ArticleList = ({ category, page }) => {
  const dispatch = useDispatch();
  const { articles, status, error } = useSelector((state) => state.articles);

  useEffect(() => {
    dispatch(fetchArticles({ category, page }));
  }, [dispatch, category, page]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="article-list">
      {articles.map((article) => (
        <Article key={article.title} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
