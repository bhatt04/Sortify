import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import SortingVisualizer from './components/SortingVisualizer';
import OpeningScreen from './components/OpeningScreen';
import { AnimatePresence } from 'framer-motion';


const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<OpeningScreen />} />
        <Route path="/sort" element={<SortingVisualizer />} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
};

export default App;
