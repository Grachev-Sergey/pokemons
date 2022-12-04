import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import { CatalogContainer } from './Catalog.styles';

import CatalogItem from './CatalogItem';

import pokemonApi from '../../api/pokemonApi';
import type { ResultType } from '../../utils/type';

const limit = 24;

const Catalog = () => {
  const [pokemonsArr, setPokemonsArr] = useState<ResultType[]>();
  const [offset, setOffset] = useState(0);
  const [count, setCount] = useState(0);

  const pageCount = Math.ceil(count / limit);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = event.selected * limit;
    setOffset(newOffset);
  };

  useEffect(() => {
    (async () => {
      const pokemons = await pokemonApi.getAllPokemons({ offset, limit });
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
          nextLabel="   >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="<   "
        />
      </div>
    </CatalogContainer>
  );
};

export default Catalog;
