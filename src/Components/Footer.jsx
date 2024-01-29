import React from 'react';
import { Container, Grid, Typography } from '@mui/material';


export default function Footer() {
  return (
    <footer style={{bottom:'0',backgroundColor: '#0096FA', color: '#fff', padding: '20px 0' }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} style={{ float: 'left' }}>
            <Typography variant="h6" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
              Contact Us
            </Typography>
            <Typography variant="body1">
              <strong>Email:</strong> info@example.com
            </Typography>
            <Typography variant="body1">
              <strong>Phone:</strong> +1 (123) 456-7890
            </Typography>
            <Typography variant="body1">
              <strong>Address:</strong> 123 Main St, City, Country
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
              Follow Us
            </Typography>
            <Typography variant="body1">
              Connect with us on social media.
            </Typography>
            {/* Add social media icons/links here */}
          </Grid>

          <Grid item xs={12} sm={4} style={{ float: 'right' }}>
            <Typography variant="h6" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
              Newsletter
            </Typography>
            <Typography variant="body1">
              Subscribe to our newsletter for updates.
            </Typography>
            {/* Add newsletter subscription form here */}
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}


  

