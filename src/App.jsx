// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
