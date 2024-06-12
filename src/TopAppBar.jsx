/***************************************
 * Created by: Misty Dela Cruz
 * Created on: 12/22/2023
 * Last Modified: 1/9/2024
 * Updates:
 * Deleted unnecessary imports
 * Adding comments for calrity
 ***************************************/

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Avatar, Card } from "@mui/material";
import img1 from "./assets/intel.jpg";

const navItems = [
  "Home",
  "Products",
  "About Us",
  "Support",
  "Sign Up",
  <Avatar />,
];

function TopAppBar() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBar component="nav">
          {/***************************************
           *             NAVIGATION BAR           *
           ***************************************/}
          <Toolbar className="toolbar" sx={{ backgroundColor: "white" }}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block", color: "#0d47a1" },
              }}
            >
              {/***** INTEL LOGO *****/}
              <div className="logo">
                <img src={img1} alt="" />
              </div>
            </Typography>

            {/***** NAV ITEMS *****/}
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button
                  className="button"
                  key={item}
                  sx={{ color: "#0d47a1", "&:hover": { bgcolor: "#64b5f6" } }}
                >
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default TopAppBar;
