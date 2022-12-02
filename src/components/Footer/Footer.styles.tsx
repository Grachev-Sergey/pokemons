import styled from 'styled-components';

export const FooterContainer = styled.section`
  padding: 25px 100px;
  text-align: end;
  background-color: ${({ theme }) => theme.colors.light};

  .screen-width {
    font-size: 17px;
    color: ${({ theme }) => theme.colors.darkGray};
  }
  `;
