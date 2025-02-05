import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: 'primary.dark', boxShadow: 3 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Logo or Name */}
        <Typography 
          variant="h5" 
          component="div" 
          sx={{ fontWeight: 'bold', letterSpacing: 1 }}
        >
          Savindi Disanayake
        </Typography>
        
        {/* Navigation Buttons */}
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {['Home', 'About', 'Skills', 'Education', 'Projects', 'Contact'].map((item) => (
            <Button
              key={item}
              onClick={() => handleScroll(item.toLowerCase())}
              sx={{
                color: 'white',
                mx: 1.5,
                fontWeight: 'bold',
                textTransform: 'none',
                transition: '0.3s',
                '&:hover': { color: 'secondary.light' }
              }}
            >
              {item}
            </Button>
          ))}
        </Box>
        
        {/* Mobile Menu Button */}
        <IconButton sx={{ display: { sm: 'none' }, color: 'white' }}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
