/***************************************
* Created by: Misty Dela Cruz
* Created on: 12/22/2023
* Last Modified: 6/12/2024
* Updates:
* Added all components of the page:
  - Navigation Bar
  - Form
  - Footer
***************************************/

import "./App.css";
import * as React from "react";
import "./theme";
import "./Form";
import "./TopAppBar";
import Form from "./Form";
import TopAppBar from "./TopAppBar";

function App() {
  return (
    <>
      <div>
        {/***** App Bar *****/}
        <TopAppBar />

        {/***** Form *****/}
        <Form />

        {/***** Footer *****/}
        <div className="gap"></div>
        <footer className="footer">
          <p>Copyright 2024 Intel. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
