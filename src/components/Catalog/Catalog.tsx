import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import pokemonApi from '../../api/pokemonApi';
import type { QueryType, ResultType } from '../../utils/type';
import { CatalogContainer } from './Catalog.styles';
import CatalogItem from './CatalogItem';

const limit = 10;

const Catalog = () => {
  const [pokemonsArr, setPokemonsArr] = useState<ResultType[]>();
  const [offset, setOffset] = useState(0);
  const [count, setCount] = useState(0);

  const pageCount = Math.ceil(count / limit);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * limit) % count;
    setOffset(newOffset);
  };

  useEffect(() => {
    (async () => {
      const query: QueryType = {
        offset,
        limit,
      };
      const pokemons = await pokemonApi.getAllPokemons(query);
      setPokemonsArr(pokemons.data.results);
      setCount(pokemons.data.count);
    })();
  }, [offset]);

  return (
    <CatalogContainer>
      <div className="pokemons-container">
        {
          pokemonsArr?.map((item) => (
            <CatalogItem key={item.name} pokemon={item} />
          ))
        }
      </div>
      <div className="pagination-container">
        <ReactPaginate
          className="pagination"
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
        />
      </div>
    </CatalogContainer>
  );
};

export default Catalog;
