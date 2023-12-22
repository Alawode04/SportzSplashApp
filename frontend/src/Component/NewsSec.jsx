import React from 'react';
import NewsCard from './NewsCard'; 

const NewsSection = () => {
  // Assuming you have an array of news articles
  const newsArticles = [
    {
      id: 1,
      image: '',
      headline: '',
      shortContent: '',
      fullContent: '',
    },
    // Add more news articles here
  ];

  return (
    <div>
      {newsArticles.map((article) => (
        <NewsCard key={article.id} news={article} />
      ))}
    </div>
  );
};

export default NewsSection;
