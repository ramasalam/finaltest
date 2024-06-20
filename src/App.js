import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import HomePage from './pages/HomePage';
import MovieDetailPage from './pages/MovieDetailPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { getMovies } from './redux/actions/movieActions';
import './styles/App.css';

const App = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getMovies('Anime'));
  }, [dispatch]);

  const handleSearch = (query) => {
    dispatch(getMovies(query));
  };

  return (
    <Router>
      <div className="app">
        <Header onSearch={handleSearch} /> {/* Header di sini */}
        <main>
          <Routes>
            <Route path="/" element={<HomePage movies={movies} loading={loading} error={error} />} />
            <Route path="/movie/:id" element={<MovieDetailPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
