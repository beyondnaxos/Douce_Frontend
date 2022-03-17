
import './App.css';
import React from 'react';
import Background from './containers/Background';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import SignUp from './pages/signup';
import SignIn from './pages/signin';


function App() {
  return (
    
    
    <Router>
      <div className='main'>
     <Background />
     <Navbar />
     </div>
     <Routes>
       <Route path="/" component={Home} />
       <Route path="/about" component={About} />
       <Route path="/contact" component={Contact} />
       <Route path="/signin" component={SignIn} />
       <Route path="/sign-up" component={SignUp} />
     </Routes>
   </Router>
  );
}

export default App;
