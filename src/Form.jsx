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

import {
  Box,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

function Form() {
  return (
    <>
      {/***************************************
       *               HEADING                 *
       ***************************************/}
      <Box className="headings" display="">
        <Typography
          className="assist"
          variant="h1"
          fontSize={50}
          fontWeight={"bold"}
          sx={{ color: "white" }}
        >
          Need Assistance?
        </Typography>
        <Typography
          className="assist-help"
          variant="subtitle1"
          sx={{ color: "white" }}
        >
          Please fill out this form for help
        </Typography>
      </Box>

      {/* Allows space between the HEADING and the FORM */}
      <div></div>

      {/***************************************
       *               FORM                    *
       ***************************************/}
      <Box className="formdoc">
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            {/***** DROP DOWN MENU *****/}
            <FormControl className="select">
              <label>What can we help you with?</label>
              <Select className="dropdown" defaultValue={10}>
                {/* The different issues the user can choose */}
                <MenuItem disabled value={10} className="placeholder">
                  Please select an issue
                </MenuItem>
                <MenuItem value={20}>Connection Issue</MenuItem>
                <MenuItem value={30}>Hardware Issue</MenuItem>
                <MenuItem value={40}>Software Issue</MenuItem>
              </Select>
            </FormControl>

            {/***** FULL NAME TEXT FIELD *****/}
            <FormControl className="fullname">
              <label>Full Name</label>
              <TextField required defaultValue={"John Doe"} />
            </FormControl>

            {/***** EMAIL TEXT FIELD *****/}
            <FormControl className="email">
              <label>Email Address</label>
              <TextField required defaultValue={"johndoe@xyztech.com"} />
            </FormControl>

            {/***** MESSAGE TEXT FIELD *****/}
            <FormControl className="message">
              <label>Message 0/200</label>
              <TextField required defaultValue={"Type your message here..."} />
            </FormControl>
          </CardContent>

          {/***** SUBMIT BUTTON *****/}
          <CardActions>
            <Button
              size="small"
              sx={{
                color: "white",
                bgcolor: "primary.dark",
                margin: "auto",
                fontSize: 20,
                "&:hover": { bgcolor: "#64b5f6" },
              }}
            >
              SUBMIT
            </Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}

export default Form;
