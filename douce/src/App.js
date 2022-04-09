
import './App.css';
import React from 'react';
import Background from './containers/Background';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';
// import SignUp from './pages/signup';
// import SignIn from './pages/signin';
import Tarifs from './pages/tarifs';
import { AnimatePresence } from 'framer-motion'
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from './firebase';




function App() {

  const [user] = useAuthState(auth)

  return (

    <Router>
      <div className='main'>
        <Background />
        <Navbar />
      </div>
      <AnimatePresence >
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/about" element={< About />} />
          <Route path="/tarifs" element={<Tarifs />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/signin" element={<SignIn />} /> */}
          {/* <Route path="/signup" element={<SignUp />} /> */}
          
        </Routes>

      </AnimatePresence>
    </Router>
    
  );
}

export default App;
