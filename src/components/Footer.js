import { Grid } from "@mui/material";
import React from "react";
import { List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { LocationOn, Phone, Email } from '@mui/icons-material';

const Footer = () => {
  return (
    <div className="footer">
      <Grid container>
        <Grid padding={2} xs={12} md={4}>
          <h3>About Us</h3>
          <hr />
          <p>
            Hidden Hills property with mountain and city view boast nine
            bedrooms including a master suite with private terrace and an
            entertainment. wing which includes a 20-seat theater.
          </p>
          <br />
          {/* <p>Address</p>
          <p>+91 99999 99999</p>
          <p>info@example.com</p> */}
          <List>
      <ListItem dense>
        <ListItemIcon>
          <LocationOn sx={{ color: 'white', fontSize: 'small' }} />
        </ListItemIcon>
        <ListItemText primaryTypographyProps={{ variant: 'body2' }} primary="Address" />
      </ListItem>
      <ListItem dense>
        <ListItemIcon>
          <Phone sx={{ color: 'white', marginRight:0, fontSize: 'small' }} />
        </ListItemIcon>
        <ListItemText primaryTypographyProps={{ variant: 'body2' }} primary="+91 99999 99999" />
      </ListItem>
      <ListItem dense>
        <ListItemIcon>
          <Email sx={{ color: 'white', fontSize: 'small' }} />
        </ListItemIcon>
        <ListItemText primaryTypographyProps={{ variant: 'body2' }} primary="info@example.com" />
      </ListItem>
    </List>
        </Grid>
        <Grid padding={2} xs={12} md={4}>
            <h3>Popular Posts</h3>
            <hr />
        </Grid>
        <Grid xs={12} md={4}></Grid>
      </Grid>
      <div className="copyright">
        <p>
          &copy; {new Date().getFullYear()} EchoJournel. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
