// src/App.jsx
import './App.css'; // Tailwind / global styles
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import HomePage from './app/pages/HomePage';
import BooksPage from './app/pages/BooksPage';
import CharactersPage from './app/pages/CharactersPage';
import HousesPage from './app/pages/HousesPage';
import SpellsPage from './app/pages/SpellsPage';
import NotFoundPage from './app/pages/NotFoundPage';


function App() {
  return (
      <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/characters" element={<CharactersPage />} />
            <Route path="/houses" element={<HousesPage />} />
            <Route path="/spells" element={<SpellsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
      </Router>
  );
}

export default App;
