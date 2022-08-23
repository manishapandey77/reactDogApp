import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ()  =>{
  return (
      <AppBar position="fixed" sx={{backgroundColor: "#111"}}>
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dogs ImageApp
          </Typography>
                      <MenuIcon />
      
        </Toolbar>
      </AppBar>
    // </Box>
  );
}
export default Navbar;