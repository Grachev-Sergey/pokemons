import { Route, Routes } from 'react-router-dom';

import MainPage from './pages/MainPage';
import PokemonPage from './pages/PokemonPage';

import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:id" element={<PokemonPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
