import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const ImageBox = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  borderRadius: "5px",
  paddingBottom: "100%", // 1:1 aspect ratio
  overflow: "hidden",
}));

const Image = styled("img")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

const GradientOverlay = styled(Box)({
  position: "absolute",
  bottom: 0,
  width: "100%",
  height: "40%",
  background: "linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)",
});

const Title = styled(Typography)({
  position: "absolute",
  bottom: "10%",
  left: "10%",
  right: "10%",
  color: "white",
  fontWeight: "700",
  marginBottom: "10px",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
  fontSize: "1.2rem",
  lineHeight: "1.2",
});

const DateText = styled(Typography)({
  position: "absolute",
  bottom: "5%",
  left: "10%",
  color: "white",
  textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)",
  display: "flex",
  alignItems: "center",
  fontSize: "0.75rem",
});

const NewsItem = ({ id, imageSrc, title, date }) => {
  const handleClick = () => {
    // Navigate programmatically to /newsdetails/:id
    // using Link component
  };

  return (
    <Grid item xs={12} md={12}>
      <Link to={`/newsdetails/${id}`} style={{ textDecoration: "none" }}>
        <ImageBox onClick={handleClick}>
          <Image src={imageSrc} alt={title} />
          <GradientOverlay />
          <Title variant="h6">{title}</Title>
          <DateText variant="body2">
            <CalendarTodayIcon sx={{ fontSize: 16, marginRight: 0.5 }} />
            {date}
          </DateText>
        </ImageBox>
      </Link>
    </Grid>
  );
};

const NewsGrid = ({ item }) => {
  return (
    <div className="news-grid">
      <NewsItem
        id={item.id}
        imageSrc={item.image}
        title={item.title}
        date={item.publish_date}
      />
    </div>
  );
};

export default NewsGrid;
