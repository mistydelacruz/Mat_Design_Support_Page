/***************************************
* Created by: Misty Dela Cruz
* Created on: 12/22/2023
* Last Modified: 1/2/2024
* Updates:
* Fixed the App Bar component so it displays what I needed
* Took the liberty to make some changes compared to my Figma prototype
* Now the App Bar looks more cohesive and matches the Material Design style
***************************************/

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Avatar, Card } from '@mui/material';
import { alignProperty } from '@mui/material/styles/cssUtils';
import img1 from './assets/new intel.png'

const navItems = ['Home', 'Products', 'About Us', 'Support', 'Sign Up', <Avatar/>];

function TopAppBar(){
 

  return (
/*App Bar*/
    <Box sx={{ display: 'flex'}}>
      <AppBar component="nav">
        <Toolbar className='toolbar' sx={{backgroundColor: 'whitesmoke'}}>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', color: '#0d47a1' }}}
          >
            <img src={img1} alt="" />
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button className='button' key={item} sx={{color: '#0d47a1', "&:hover": {bgcolor: '#64b5f6'}}}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


export default TopAppBar;


{/*import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar } from '@mui/material';

function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            Home
          </Typography>
          <Typography variant="h6" component="div">
            Products
          </Typography>
          <Typography variant="h6" component="div">
            About Us
          </Typography>
          <Typography variant="h6" component="div">
            Support
          </Typography>
          <IconButton>
            <Avatar/>
          </IconButton>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default ButtonAppBar */}