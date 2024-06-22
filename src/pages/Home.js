import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import NewsGrid from "../components/NewsGrid";
import sampleData from "../data/sampleData";
import CustomChip from "../components/CustomChip";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import ReadNext from "../components/ReadNext";

const Home = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchNews = async () => {
    const url =
      "https://api.worldnewsapi.com/top-news?source-country=us&language=en&date=2024-05-29";
    const apiKey = "17684b0b00bc46b398e7d67955628c6a";

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "x-api-key": apiKey,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data); // Log the response data to check its structure

      // Extract one news item from each `news` array in `top_news` and limit to 5 items
      const articles = data.top_news
        .map((newsItem) => newsItem.news[0])
        .slice(0, 5);

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

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <div className="homepage">
    {console.log(news)}
      <CustomChip text="TOP NEWS" icon={<FlashOnIcon />} />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <NewsGrid item={news[0]} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={0}>
              <Grid item xs={12} md={6}>
                <NewsGrid item={news[1]} />
              </Grid>
              <Grid item xs={12} md={6}>
                <NewsGrid item={news[2]} />
              </Grid>
              <Grid item xs={12} md={6}>
                <NewsGrid item={news[3]} />
              </Grid>
              <Grid item xs={12} md={6}>
                <NewsGrid item={news[4]} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <hr />

      <ReadNext news={news}/>
      
    </div>
  );
};

export default Home;
