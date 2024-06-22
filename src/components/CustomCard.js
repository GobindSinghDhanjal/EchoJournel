import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Box,
  Grid,
  IconButton,
  Link,
} from "@mui/material";
import { DateRange } from "@mui/icons-material";
import { useNavigate } from "react-router-dom"; // Import useNavigate for v6

const CustomCard = ({ image, title, description, date, id }) => {
  const navigate = useNavigate(); // Use useNavigate hook

  const limitDescription = (text, limit) => {
    if (text.length > limit) {
      return text.substring(0, limit) + "...";
    }
    return text;
  };

  const handleReadMore = () => {
    navigate(`/newsdetail/${id}`); // Navigate to /newsdetail/:id
  };

  return (
    <div className="custom-card">
      <Card
        sx={{
          display: "flex",
          height: "100%",
          borderRadius: "4px",
          boxShadow: "0px 0px 6px rgba(0,0,0,0.1)",
          transition: "box-shadow 0.3s ease-in-out",
          "&:hover": { boxShadow: "0px 0px 10px rgba(0,0,0,0.2)" },
        }}
      >
        {/* Image section */}
        <CardMedia
          component="img"
          sx={{
            width: "33%",
            height: "auto",
            flexShrink: 0,
            objectFit: "cover",
            borderRadius: "4px 0 0 4px", // Rounded left corners
            transition: "transform 0.3s ease-in-out",
            "&:hover": { transform: "scale(1.1)" },
          }}
          image={image}
          alt={title}
        />

        {/* Content section */}
        <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
          <CardContent>
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{ fontSize: "1.2rem", mb: 1 }}
            >
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              {limitDescription(description, 120)}
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box mt={1} mb={2}>
              <Link component="button" onClick={handleReadMore} variant="body2">
                Read More
              </Link>
            </Box>
            <Grid container spacing={1} alignItems="center">
              <Grid item>
                <IconButton size="small">
                  <DateRange fontSize="small" />
                </IconButton>
              </Grid>
              <Grid item>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: "0.75rem" }}
                >
                  {date}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Box>
      </Card>
    </div>
  );
};

export default CustomCard;
