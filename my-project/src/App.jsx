
import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/Login';
import Navbar from "./components/Nav";


const App = () => {

  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Login></Login>
    </BrowserRouter>
  )
}

export default App