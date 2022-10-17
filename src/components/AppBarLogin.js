import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PetsLogo from '../Assets/dogs.svg';

export default function AppBarLogin({label, onClick}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:"#fffbb7", color:"#000"}} elevation={0}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}>
          <img src={PetsLogo} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color:"#5b7c8d" }}>
            Pet's
          </Typography>
          <Button color="inherit" onClick={onClick} sx={{color:"#5b7c8d", fontWeight: 300}}>{label}</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
