import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { LinkedIn, GitHub, Email } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        py: 2,
        mt: 4,
        bgcolor: 'primary.main',
        color: 'white',
      }}
    >
      <Typography variant="body2" sx={{ mb: 1 }}>
        &copy; {new Date().getFullYear()} Savindi Disanayake. All rights reserved.
      </Typography>
      <Box>
        <IconButton href="https://www.linkedin.com/in/savindi-disanayake-552048315/" target="_blank" sx={{ color: 'white' }}>
          <LinkedIn />
        </IconButton>
        <IconButton href="ssavindi660@gmail.com" sx={{ color: 'white' }}>
          <Email />
        </IconButton>
        <IconButton href="https://github.com/savindi500" target="_blank" sx={{ color: 'white' }}>
          <GitHub />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;