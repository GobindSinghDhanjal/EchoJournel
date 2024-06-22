import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const NewsDetails = () => {
  const { id } = useParams();
  const [newsData, setNewsData] = useState(null);

  const url = `https://api.worldnewsapi.com/retrieve-news?ids=${id}`;
  const apiKey = "4f0f005c905e426b8f0fa41c90bf5a2f";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            "x-api-key": apiKey,
          },
        });
        if (!response.data) {
          throw new Error("Empty response from server");
        }
        setNewsData(response.data.news[0]);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        // Handle error state or alert user
      }
    };

    fetchData();
  }, []);

  if (!newsData) {
    return <div>Loading...</div>; // Placeholder for loading state
  }

  return (
    <div className="container">
      <div className="news-details">
        {console.log(newsData)}
        <h2>{newsData.title}</h2>
        <small>{newsData.author} &nbsp;</small>
        <small>&nbsp;{newsData.publish_date}</small>
        <hr />
        <p>{newsData.text}</p>
        <br />
      </div>
    </div>
  );
};

export default NewsDetails;
