import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ThemeContextProvider from './context/ThemeContext';
import Home from './pages/Home';
import List from './pages/List';

function App() {
  return (
    <ThemeContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </Router>
    </ThemeContextProvider>
  );
}

export default App;
