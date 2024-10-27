import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import {Education, Reviews} from './components/Education/Education';
import Footer from "./components/Footer/Footer";

import ScrollToTop from './components/ScrollToTop/ScrollToTop';

import "./App.css";

const loadGoogleFonts = () => {
  const link = document.createElement("link");
  link.href =
    "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=EB+Garamond:wght@400;700&display=swap";
  link.rel = "stylesheet";
  document.head.appendChild(link);
};

loadGoogleFonts();

const App = () => {
  return (
    <Router>
    <ScrollToTop />
      <div className="page__container">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/education" element={<Education />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;