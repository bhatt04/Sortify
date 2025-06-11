// import React from 'react';
// import SortingVisualizer from './components/SortingVisualizer';
// // import { Route, Routes } from 'react-router-dom';
// // import OpeningScreen from './components/OpeningScreen';

// const App: React.FC = () => {
//   return (
//   <>
//       <SortingVisualizer />
//   </>
//   );
// };

// export default App;





import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SortingVisualizer from './components/SortingVisualizer';
import OpeningScreen from './components/OpeningScreen';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OpeningScreen />} />
        <Route path="/sort" element={<SortingVisualizer />} />
      </Routes>
    </Router>
  );
};

export default App;
