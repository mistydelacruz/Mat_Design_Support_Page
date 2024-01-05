/***************************************
* Created by: Misty Dela Cruz
* Created on: 12/22/2023
* Last Modified: 1/2/2024
* Updates:
* App Bar is done
* Will continue to create the Form and its features
***************************************/

import { useState } from 'react'
import './App.css'
import * as React from 'react';
import './theme'
import './Form'
import './TopAppBar'
import Form from './Form';
import TopAppBar from './TopAppBar';


function App() {

  return (
    <>
      <div>
        {/*App Bar*/}
        <TopAppBar/>    {/*Displays the Navigation Bar*/}

        {/*Form*/}
        <Form />        {/*Displays the Form*/}
      </div>
    </>
  )
}

export default App
