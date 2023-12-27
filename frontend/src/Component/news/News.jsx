import React, { useState, useEffect } from 'react';
import axios from 'axios';
 

const apiKey = '376e94c327b9444197944d299c541e91';
const apiUrl = 'https://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=';


const News = () => {
  const [sportsNews, setSportsNews] = useState([]);

  useEffect(() => {
    const fetchSportsNews = async () => {
      try {
        const response = await axios.get(apiUrl); 
        console.log(response.data.articles)
        setSportsNews(response.data.articles);
      } catch (error) {
        console.error('Error fetching sports news:', error);
      }
    };

    fetchSportsNews();
  }, []);

  return (
    <div>
      <h1>Sports News</h1>
      <ul>
        {sportsNews.map((article) => (
          <li key={article.title}>
            {/* Display the article image */}
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt={article.title}
                style={{ maxWidth: '100%', maxHeight: '200px' }}
              />
            )}

            {/* Display the article title */}
            <h2>{article.title}</h2>

            {/* Display a button linking to the full article page */}
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read Full Article
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  // return (
  //   <>
  //     <div className='text' style={{ textAlign: 'center' }}>
  //       <h2><Badge bg='danger'>OUR NEWS</Badge></h2>
  //     </div>
  //   </>
  // )

};
  
  


export default News;
