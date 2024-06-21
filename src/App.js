import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import ArticleDetail from './components/ArticleDetail';
import CategoryFilter from './components/CategoryFilter';
import Pagination from './components/Pagination';

const App = () => {
  const [category, setCategory] = useState('');
  const [page, setPage] = useState(1);
  const totalPages = 5; // Set this based on your API's total results

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setPage(1); // Reset to first page on category change
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <Router>
      <div className="app">
        <CategoryFilter
          selectedCategory={category}
          onCategoryChange={handleCategoryChange}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ArticleList category={category} page={page} />
                <Pagination
                  currentPage={page}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </>
            }
          />
          <Route path="/article/:title" element={<ArticleDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
