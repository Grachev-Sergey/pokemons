import styled from 'styled-components';

export const CatalogContainer = styled.section`
  .pokemons-container {
    max-width: 1024px;
    margin: 30px auto;
    padding: 0 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0 40px
  }
  .pagination-container {
    max-width: 350px;
    margin: 30px auto;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.light};
  }
  .pagination {
    display: flex;
    gap: 20px;
  }

  @media only screen and (max-width: 650px) {
    .pokemons-container {
      margin: 20px auto;
      gap: 0 10px
    }

    .pagination-container {
      max-width: 250px;
    }

    .pagination {
      gap: 10px;
    }
  }
`;
