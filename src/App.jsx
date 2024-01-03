/***************************************
* Created by: Misty Dela Cruz
* Created on: 12/22/2023
* Last Modified: 1/2/2024
* Updates:
* App Bar is done
* Will continue to create the Form and its features
***************************************/

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as React from 'react';
import Button from '@mui/material/Button';
import './theme'
import { deepOrange, deepPurple } from '@mui/material/colors';
import './AppBar'
import { Tab } from '@mui/material';
import DrawerAppBar from './AppBar';
import TopAppBar from './AppBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/*App Bar*/}
        <TopAppBar/>

        {/*Form Divider*/}


      </div>
    </>
  )
}

export default App
