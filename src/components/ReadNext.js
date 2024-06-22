import React from "react";
import { Box, Grid } from "@mui/material";
import CustomChip from "./CustomChip";
import Weather from "./Weather";
import CustomCard from "./CustomCard";
import NewsCard from "./NewsCard";
import ArticleIcon from '@mui/icons-material/Article';

const ReadNext = ({ news }) => {
  return (
    <div>
      <CustomChip
        text="READ NEXT"
        icon={<ArticleIcon />}
        color="darkorchid"
      />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={12} md={8}>
            <Grid container>
              <Grid>
                <CustomCard
                 id={news[0].id}
                  image={news[0].image}
                  title={news[0].title}
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt ante at urna lacinia rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec nec sem ut lorem."
                  date={news[0].publish_date}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <NewsCard
                   id={news[1].id}
                  image={news[1].image}
                  title={news[1].title}
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt ante at urna lacinia rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec nec sem ut lorem."
                  date={news[1].publish_date}
                />
              </Grid>
              <Grid xs={12} md={6}>
              <NewsCard
              id={news[2].id}
                  image={news[2].image}
                  title={news[2].title}
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt ante at urna lacinia rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec nec sem ut lorem."
                  date={news[2].publish_date}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Weather />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default ReadNext;
