/***************************************
* Created by: Misty Dela Cruz
* Created on: 1/2/2024
* Last Modified: 1/9/2024
* Updates:
* Working on the Form and its features.
* Added the headings.
* Added the text fields.
* Added the message text field.
***************************************/

import { Box, FormControl, MenuItem, Select, TextField, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';


function Form() {
    return(
    <>
    {/***************************************
    *               HEADING                 *
    ***************************************/}
    <Box className="headings" display=''>
        <Typography className="assist" 
        variant='h1' 
        fontSize={50} 
        fontWeight={'bold'} 
        sx={{color:'white'}}
        >                                            {/*Typography element for the first heading*/}
        Need Assistance?
        </Typography>
        <Typography className="assist-help" 
        variant='subtitle1' 
        sx={{color: 'white'}}
        >                                            {/*Typography element for the second heading*/}
        Please fill out this form for help
        </Typography>
    </Box>
    <div></div>                                      {/* Allows space between the HEADING and the FORM */}

    {/***************************************
    *               FORM                    *
    ***************************************/}
    <Box className="formdoc">                                              {/* Section for the form */}
        <Card sx={{ minWidth: 275 }}>                                      {/* Added a card to place the form features on top */}
            <CardContent>                                                  {/* For the contents of the card */}
            {/***** DROP DOWN MENU *****/}
                <FormControl className="select">                           {/* Components for the form are placed within the FormControl */}
                    <label>What can we help you with?</label>              {/* Label for issue dropdown */}
                    <Select className="dropdown" defaultValue={10}>        {/* User chooses an issue using the dropdown with menu items */}
                        <MenuItem disabled value={10} 
                        className="placeholder"
                        >
                        Please select an issue
                        </MenuItem>
                        <MenuItem value={20}>Connection Issue</MenuItem>   {/* The different issues the user can choose */}
                        <MenuItem value={30}>Hardware Issue</MenuItem>
                        <MenuItem value={40}>Software Issue</MenuItem>
                    </Select>
                </FormControl>

            {/***** FULL NAME TEXT FIELD *****/}
                <FormControl className="fullname">                         {/* Components for the form are placed within the FormControl */}
                    <label>Full Name</label>                               {/* Label for the text field */}
                    <TextField required
                    defaultValue={"John Doe"}/>                            {/* User enters their full name in the text field */}
                </FormControl>

            {/***** EMAIL TEXT FIELD *****/}
                <FormControl className="email">                            {/* Components for the form are placed within the FormControl */}
                    <label>Email Address</label>                           {/* Label for the text field */}
                    <TextField required
                    defaultValue={"johndoe@xyztech.com"}/>                 {/* User enters their email adress in the text field */}
                </FormControl>
            
            {/***** MESSAGE TEXT FIELD *****/}
            <FormControl className="message">                               {/* Components for the form are placed within the FormControl */}
                    <label>Message 0/200</label>                            {/* Label for the text field */}
                    <TextField required
                    defaultValue={"Type your message here..."}/>            {/* User enters any comments or message in the text field */}
                </FormControl>
            </CardContent>

            {/***** SUBMIT BUTTON *****/}
            <CardActions>                                                   {/* Any buttons or interaction for the card goes in CardActions */}
                <Button size="small" sx={{color: 'white', 
                bgcolor: 'primary.dark', 
                margin: 'auto', 
                fontSize: 20,
                "&:hover": {bgcolor: '#64b5f6'}}}
                >                                                           {/* The submit button */}
                SUBMIT
                </Button>
            </CardActions>
        </Card>
    </Box>
    </>
    )
}

export default Form