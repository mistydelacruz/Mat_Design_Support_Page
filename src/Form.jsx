/***************************************
* Created by: Misty Dela Cruz
* Created on: 1/2/2024
* Last Modified: 1/4/2024
* Updates:
* Working on the Form and its features
* Added the headings
* Working on the text fields and dropdown
***************************************/

import { Box, FormControl, Select, Typography } from '@mui/material';
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
        <Typography className="assist" variant='h3' sx={{color:'white'}} gutterBottom> {/*Typography element for the first heading*/}
            Need Assistance?
        </Typography>
        <Typography className="assist" variant='subtitle1' sx={{color:'black'}}> {/*Typography element for the second heading*/}
            Please fill out this form for help
        </Typography>
    </Box>
    <div>                   {/* Allows space between the HEADING and the FORM */}
        <p>div</p>
    </div>

    {/***************************************
    *               FORM                    *
    ***************************************/}
    <Box className="formdoc">                                            {/* Section for the form */}
        <Card sx={{ minWidth: 275 }}>                                    {/* Added a card to place the form features on top */}
            <CardContent>                                                {/* For the contents of the card */}
                <FormControl>                                            {/* Items are place in a form layout */}
                    <label>What can we help you with?</label>            {/* Label for issue dropdown */}
                    <Select className='dropdown' defaultValue={10}>      {/* Issue dropdown */}
                        <option value={10}>Connection</option>
                        <option value={20}>Hardware</option>
                    </Select>
                </FormControl>
            </CardContent>
            <CardActions>
                <Button size="small" sx={{color: 'white', 
                bgcolor: 'primary.dark', 
                margin: 'auto', 
                fontSize: 20,
                "&:hover": {bgcolor: '#64b5f6'}}}
                >
                SUBMIT
                </Button>
            </CardActions>
        </Card>
    </Box>
    </>
    )
}

export default Form