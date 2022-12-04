import styled from 'styled-components';

export const CatalogItemContainer = styled.section`
  width: 100px;
  margin: 15px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 10px;
  cursor: pointer;

  .name {
    padding: 5px 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
