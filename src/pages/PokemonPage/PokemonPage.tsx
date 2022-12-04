import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { PokemonPageContainer, PokemonCardContainer } from './PokemonPage.styles';

import pokemonApi from '../../api/pokemonApi';
import { baseUrl } from '../../utils/config';
import type { IRoot } from '../../utils/type';

const PokemonPage = () => {
  const [pokemon, setPokemon] = useState<IRoot>();
  const { id } = useParams();

  const name = `${pokemon?.name.charAt(0).toUpperCase()}${pokemon?.name.slice(1)}`;
  const baseExperience = pokemon?.base_experience;
  const height = pokemon?.height;
  const weight = pokemon?.weight;
  const abilitiesArr = pokemon?.abilities.map((item) => {
    return item.ability.name.replace(/-/, ' ');
  });
  const abilities = abilitiesArr?.join(', ');

  useEffect(() => {
    (async () => {
      const pokemonInfo = await pokemonApi.getOnePokemon(`${baseUrl}/${id}`);
      setPokemon(pokemonInfo.data);
    })();
  }, [id]);

  return (
    <PokemonPageContainer>
      <PokemonCardContainer>
        <img className="pokemon-picture" src={pokemon?.sprites.other['official-artwork'].front_default} alt="pokemon" />
        <div className="pokemon-info">
          <div className="desvription">
            <h3>Name:</h3>
            <p className="pokemon-info__name">{name}</p>
          </div>
          <div className="desvription">
            <h3> Base experience:</h3>
            <p className="pokemon-info__baseExperience">{baseExperience}</p>
          </div>
          <div className="desvription">
            <h3>Height:</h3>
            <p className="pokemon-info__height">{height}</p>
          </div>
          <div className="desvription">
            <h3>Weight:</h3>
            <p className="pokemon-info__weight">{weight}</p>
          </div>
          <div className="desvription">
            <h3>Abilities:</h3>
            <p className="pokemon-info__abilities">{abilities}</p>
          </div>
        </div>
      </PokemonCardContainer>
    </PokemonPageContainer>
  );
};

export default PokemonPage;
