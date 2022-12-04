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
    display: flex;
    flex-direction: column;
  }

  .clock {
    font-size: 17px;
    color: ${({ theme }) => theme.colors.darkGray};
  }

  @media only screen and (max-width: 650px) {
    padding: 25px 50px;
  }
`;
