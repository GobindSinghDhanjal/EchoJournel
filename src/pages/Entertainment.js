import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import NewsCard from '../components/NewsCard';
import SkeletonComponent from './Skeleton';

const Entertainment = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchNews = async () => {
    const url =
      'https://api.worldnewsapi.com/top-news?source-country=us&language=en&date=2024-05-29';
    const apiKey = '4f0f005c905e426b8f0fa41c90bf5a2f';

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'x-api-key': apiKey,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      const articles = data.top_news.map((newsItem) => newsItem.news[0]).slice(15, 25);

      // Simulating delay for demonstration
      await new Promise(resolve => setTimeout(resolve, 500)); // 0.5 second delay

      setNews(articles);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const truncateTitle = (title, charLimit) => {
    if (title.length > charLimit) {
      return title.substring(0, charLimit) + '...';
    }
    return title;
  };

  if (loading) {
    return <SkeletonComponent />;
  }

  return (
    <div className="container">
      <div className="technology">
        <h4>ENTERTAINMENT</h4>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {news.map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <NewsCard
                  id={item.id}
                  image={item.image}
                  title={truncateTitle(item.title, 30)}
                  date={item.publish_date}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default Entertainment;