import { useState, useEffect, useMemo } from 'react';

import { HeaderContainer } from './Header.styles';

import pokeball from '../../assets/pokeball.png';

const Header = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const date = useMemo(() => {
    return `${currentDate.getDay()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()}`;
  }, [currentDate]);

  useEffect(() => {
    const timer = setInterval(() => setCurrentDate(new Date()), 1000);
    return () => clearInterval(timer);
  });

  return (
    <HeaderContainer>
      <img className="logo" src={pokeball} alt="logo" />
      <div className="date-container">
        <p className="clock">Date: {date}</p>
        <p className="clock">Time: {currentDate.toLocaleTimeString()}</p>
      </div>
    </HeaderContainer>
  );
};

export default Header;
