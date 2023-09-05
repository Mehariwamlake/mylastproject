
import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/Login';
import Navbar from "./components/Nav";
import Homepage from "./pages/Homepage";
import courses from "./pages/courses";


const priventRoute = ({path, element, isLoggedin}) => {
  if(isLoggedin) {
    <Route path={path} element={element} />

  }
  else{
    <Route path="/login" element={<Login/>} />
  }
}

function App() {
  const [isLoggedin, setisLoggedin] = useState(false);

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem('user'))
    const token = localStorage.getItem('token')
    
    if (user != null && token != null) {
      setisLoggedin(true);
    }
  }, [])

  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Homepage/>} />
        {isLoggedin ? <Route path="/courses" element={<courses/>} />: <Route path="/courses" element={<Login/>} />}


      </Routes>
    </BrowserRouter>
  )
}

export default App