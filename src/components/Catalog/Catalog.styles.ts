import styled from 'styled-components';

export const CatalogContainer = styled.section`
  li {
    list-style: none;
  }
  .pokemons-container {
    max-width: 1024px;
    margin: 50px auto;
    display: flex;
    flex-wrap: wrap;
    gap: 0 20px
  }
  .pagination-container {
    margin: 50px auto 0 auto;
    display: flex;
    justify-content: center;
  }
  .pagination {
    display: flex;
    gap: 20px;
  }
`;
