import customAxios from '.';
import type { IRoot, PokemonsType, QueryType } from '../utils/type';

const getAllPokemons = (query: QueryType) => {
  return customAxios.get<PokemonsType>('/', { params: query });
};

const getOnePokemon = (url: string) => {
  return customAxios.get<IRoot>(url);
};

export default { getAllPokemons, getOnePokemon };
