/***************************************
* Created by: Misty Dela Cruz
* Created on: 12/22/2023
* Last Modified: 12/22/2023
* Updates:
* Added the Buttons components from the Material UI.
* Working on customizing each component to match my Figma prototype.
* Will add different files for each component for better readability.
***************************************/

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as React from 'react';
import Button from '@mui/material/Button';
import './theme'
import { deepOrange, deepPurple } from '@mui/material/colors';
import './AppTabs'
import { Tab } from '@mui/material';
import ColorTabs from './AppTabs';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/*Tabs Divider*/}
        <ColorTabs />

        {/*Buttons Divider*/}


        {/*<Button 
          variant="contained" 
          disableElevation 
          sx={{
            bgcolor:'primary.main',
            "&:hover": {bgcolor: deepOrange[400]}
          }}
        >
        Hello world
        </Button>*/}
      </div>
    </>
  )
}

export default App
