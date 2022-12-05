import styled from 'styled-components';

export const PokemonPageContainer = styled.section`
  padding: 0 30px;
`;

export const PokemonCardContainer = styled.section`
  max-width: 900px;
  display: flex;
  gap: 30px;
  margin: 10vh auto;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 16px;
  padding: 0 20px;

  .pokemon-picture{
    width: 475px;
    height: 475px;
  }

  .pokemon-info {
    max-height: 475px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  .desvription {
    display: flex;
  }

  p {
    margin-left: 10px;
    text-transform: capitalize;
    font-size: 15px;
    line-height: 30px;
  }

  @media only screen and (max-width: 950px) {
    flex-direction: column;
    align-items: center;
    margin: 3vh auto;

    .pokemon-info{
      margin: 0 0 20px 0;
      gap: 10px;
    }
  }

  @media only screen and (max-width: 500px) {
    min-height: calc(100vh - 183px - 5vh);
    margin: 5vh auto;
    justify-content: center;

    .pokemon-picture{
      width: 290px;
      height: 290px;
    }

    .pokemon-info{
      margin: 0;
    }
  }
`;
