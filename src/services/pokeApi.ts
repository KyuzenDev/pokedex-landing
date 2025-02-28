import axios from "axios";

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonDetail {
  base_experience: number;
  held_items: { item: { name: string} }[];
  sprites: {
    front_default: string;
  };
  types: { type: { name: string } }[];
  stats: { stat: { name: string }; base_stat: number }[];
  abilities: { ability: { name: string } }[];
  weight: number;
}

export interface PokemonData {
  base_experience: number;
  name: string;
  image: string;
  types: string[];
  speed: number;
  hp: number;
  attack: number;
  special_att: number;
  defense: number;
  special_deff: number;
  abilities: string[];
  held_items: string[];
  weight: number;
}

const API_URL = "https://pokeapi.co/api/v2/pokemon";

export const fetchPokemons = async (limit = 10, offset = 0) => {
  const url = `${API_URL}?limit=${limit}&offset=${offset}`;
  const response = await axios.get(url);
  return response.data;
};

export const fetchPokemonDetail = async (name: string) => {
  const response = await axios.get(`${API_URL}/${name}`);
  return {
    base_experience: response.data.base_experience,
    sprites: response.data.sprites,
    types: response.data.types,
    stats: response.data.stats,
    abilities: response.data.abilities,
    held_items: response.data.held_items,
    weight: response.data.weight,
    speed: response.data.speed,
  };
};