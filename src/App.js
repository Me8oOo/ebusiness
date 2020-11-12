/** @format */

import React from "react";
import Navbar from "./Navbar/Nav";
import Hero from "./Component/HeroStat";
import { Settings } from "./Component/Settings";
import { Testo } from "./Component/Testo";
import Student from "./Component/Student";
import "./app.css";
function App() {
  return (
    <>
      <Settings></Settings>
      <Navbar></Navbar>
      <Hero></Hero>
      <h2 className='Instructors'>Our Instructors</h2>
      <Testo></Testo>
      <Student></Student>
    </>
  );
}

export default App;
