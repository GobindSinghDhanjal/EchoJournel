import React from "react";
import { Card, CardContent, Typography, CardMedia, Grid, IconButton } from "@mui/material";
import { DateRange } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const NewsCard = ({ id, image, title, date }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/newsdetails/${id}`);
  };

  return (
    <div className="news-card">
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        cursor: 'pointer',
        boxShadow: "0px 0px 8px rgba(0,0,0,0.1)", // Optional: Adjust shadow
        borderRadius: "8px", // Optional: Add rounded corners
        overflow: "hidden", // Ensure contents do not overflow
        maxHeight: "300px", // Limit card height
        transition: "transform 0.3s ease-in-out",
        "&:hover": { transform: "scale(1.02)" },
      }}
      onClick={handleCardClick}
    >
      <CardMedia
        component="img"
        height="150" // Adjust height as needed
        sx={{
          objectFit: "cover", // Ensure image covers the area
          width: "100%", // Take up full width of card
        }}
        image={image}
        alt={title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" fontWeight={700} sx={{ textAlign: 'left', marginBottom: 1 }}>
          {title}
        </Typography>
        <Grid container alignItems="center" spacing={1}>
          <Grid item>
            <IconButton size="small">
              <DateRange fontSize="small" />
            </IconButton>
          </Grid>
          <Grid item sx={{ flexGrow: 1 }}>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: "0.8rem" }}>
              {date}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
    </div>
  );
};

export default NewsCard;
