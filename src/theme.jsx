/***************************************
* Created by: Misty Dela Cruz
* Created on: 12/22/2023
* Last Modified: 12/22/2023
* Updates:
* Customizing the color theme to match the Figma prototype.
***************************************/

import { createTheme } from '@mui/material/styles';
import { blue } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
      darker: blue[900]
    }
  }
})
