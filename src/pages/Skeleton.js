import React from 'react';
import { Box, Grid } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

const SkeletonComponent = () => {
  // Example array of skeleton data to mimic loading state
  const skeletonData = [1, 2, 3]; // Adjust based on your grid item count

  return (
    <div className="container">
      <div className="technology">
        <h4>ENTERTAINMENT</h4>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {skeletonData.map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box sx={{ p: 1 }}>
                  <Skeleton variant="rectangular" width="100%" height={200} />
                  <Skeleton variant="text" width="80%" />
                  <Skeleton variant="text" width="60%" />
                  <Skeleton variant="text" width="40%" />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default SkeletonComponent;
