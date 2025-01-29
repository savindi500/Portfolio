import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';

const Header = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar position="static" sx={{ bgcolor: 'primary.main' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Savindi Disanayake
        </Typography>
        <Box>
          {['Home', 'About', 'Skills', 'Education', 'Projects', 'Contact'].map((item) => (
            <Button
              key={item}
              onClick={() => handleScroll(item.toLowerCase())}
              sx={{ color: 'white', ml: 1 }}
            >
              {item[0].toUpperCase() + item.slice(1).toLowerCase()}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
