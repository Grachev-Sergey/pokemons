import styled from 'styled-components';

export const HeaderContainer = styled.section`
  padding: 25px 200px;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.light};

  .logo {
    height: 50px;
    width: 50px;
  }

  .date-container {
    min-width: 270px;
    display: flex;
    justify-content: space-between;
  }

  .clock {
    font-size: 17px;
    color: ${({ theme }) => theme.colors.darkGray};
  }
`;
