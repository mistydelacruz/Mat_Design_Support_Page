/***************************************
* Created by: Misty Dela Cruz
* Created on: 12/22/2023
* Last Modified: 12/22/2023
* Updates:
* Added the Tabs components from the Material UI.
* Working on customizing each component to match my Figma prototype.
***************************************/

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import './App.css'
import FavoriteIcon from '@mui/icons-material/favorite';

function ColorTabs() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='container'>
        <Box sx={{ width: 1}}>
          <div className='tabcontainer'>
            <Tabs
            sx={{ width: "100%"}}
            value={value}
            onChange={handleChange}
            textColor= "secondary"
            indicatorColor="secondary"
            aria-label="primary tabs example"
            >
              <h1 className='test'>logo</h1> 
                <Tab value="Home" label="home" />
                <Tab value="Products" label="products" />
                <Tab value="About Us" label="about us" />
                <Tab value ="Support" label="support" />
            </Tabs>
          </div>
        </Box>
    </div>
  )

}

export default ColorTabs
