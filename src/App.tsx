import { Route, Routes } from 'react-router-dom';

import { AppContainer } from './App.styles';

import MainPage from './pages/MainPage';
import PokemonPage from './pages/PokemonPage';

import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <AppContainer>
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:id" element={<PokemonPage />} />
        </Routes>
      </div>
      <Footer />
    </AppContainer>
  );
};

export default App;
