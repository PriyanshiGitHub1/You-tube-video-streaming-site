import React from 'react';
import Feed from "../Feed/Feed";
import "./HomePage.css";
import { useParams } from 'react-router';

const HomePage = ({ category, searchTerm, menuBar }) => {
  let { categoryId } = useParams();

  return (
    <div className="home-page-container">
      <div className={`feed-container ${menuBar ? 'feed-shifted' : ''}`}>
        <Feed category={categoryId !== undefined ? categoryId : category} searchTerm={searchTerm} menuBar={menuBar} />
      </div>
    </div>
  );
};

export default HomePage;