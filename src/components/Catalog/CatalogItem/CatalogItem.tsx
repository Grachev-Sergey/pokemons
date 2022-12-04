import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { CatalogItemContainer } from './CatalogItem.styles';

import type { IRoot, ResultType } from '../../../utils/type';
import pokemonApi from '../../../api/pokemonApi';

type PropsType = {
  pokemon: ResultType;
};

const CatalogItem: React.FC<PropsType> = ({ pokemon }) => {
  const [pocemonInfo, setPocemonInfo] = useState<IRoot>();
  const name = `${pokemon?.name.charAt(0).toUpperCase()}${pokemon?.name.slice(1)}`;
  useEffect(() => {
    (async () => {
      const pokemonData = await pokemonApi.getOnePokemon(pokemon.url);
      setPocemonInfo(pokemonData.data);
    })();
  }, [pokemon.url]);

  return (
    <CatalogItemContainer>
      <Link to={`/${pocemonInfo?.id}`}>
        <img src={pocemonInfo?.sprites?.front_default} alt="pokemon" />
        <div className="name">{name}</div>
      </Link>
    </CatalogItemContainer>
  );
};

export default CatalogItem;
