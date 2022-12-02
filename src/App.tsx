import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import MainPage from './pages/MainPage';
import PokemonPage from './pages/PokemonPage';
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
