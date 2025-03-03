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