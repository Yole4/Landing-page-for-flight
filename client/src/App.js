import React from "react";
import { Routes, Route } from 'react-router-dom';

// import pages
import Header from "./components/pages/Header";
import Home from "./components/pages/Home";

// import css
import './components/assets/Header.css';

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* <Route path="*" element={<Undefine />} /> */}
      </Routes>
    </>
  );
}

export default App;
