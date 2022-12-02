import { useEffect, useState } from 'react';
import { CatalogItemContainer } from './CatalogItem.styles';
import type { IRoot, ResultType } from '../../../utils/type';
import pokemonApi from '../../../api/pokemonApi';

type PropsType = {
  pokemon: ResultType;
};

const CatalogItem: React.FC<PropsType> = ({ pokemon }) => {
  const [pocemonInfo, setPocemonInfo] = useState<IRoot>();
  useEffect(() => {
    (async () => {
      const pokemonData = await pokemonApi.getOnePokemon(pokemon.url);
      setPocemonInfo(pokemonData.data);
    })();
  }, [pokemon.url]);

  // eslint-disable-next-line no-console
  console.log(pocemonInfo?.sprites?.front_default);

  return (
    <CatalogItemContainer>
      <img src={pocemonInfo?.sprites?.front_default} alt="" />
      <div>{pokemon.name}</div>
    </CatalogItemContainer>
  );
};

export default CatalogItem;
