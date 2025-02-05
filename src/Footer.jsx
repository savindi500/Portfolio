import React from 'react';
import { Box, Typography, IconButton, Container } from '@mui/material';
import { LinkedIn, GitHub, Email } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.dark',
        color: 'white',
        py: 3,
        mt: 4,
        boxShadow: 3,
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
          Let's Connect!
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
          <IconButton href="https://www.linkedin.com/in/savindi-disanayake-552048315/" target="_blank" sx={{ color: 'white', '&:hover': { color: 'secondary.light' } }}>
            <LinkedIn fontSize="large" />
          </IconButton>
          <IconButton href="mailto:ssavindi660@gmail.com" sx={{ color: 'white', '&:hover': { color: 'secondary.light' } }}>
            <Email fontSize="large" />
          </IconButton>
          <IconButton href="https://github.com/savindi500" target="_blank" sx={{ color: 'white', '&:hover': { color: 'secondary.light' } }}>
            <GitHub fontSize="large" />
          </IconButton>
        </Box>
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Savindi Disanayake. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
