import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Supp.css'
import * as React from 'react';
import Button from '@mui/material/Button';
import './color'
import { deepOrange, deepPurple } from '@mui/material/colors';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>  
        <Button 
          variant="contained" 
          disableElevation 
          sx={{
            bgcolor:'primary.main',
            "&:hover": {bgcolor: deepOrange[400]
            }}}
        >
        Hello world
        </Button>
      </div>
    </>
  )
}

export default App
