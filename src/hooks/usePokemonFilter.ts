import { useEffect, useState } from "react";
import { PokemonData } from "../services/pokeApi";

const usePokemonFilter = (pokemons: PokemonData[], searchTerm: string, selectedType: string) => {
  const [filteredPokemons, setFilteredPokemons] = useState<PokemonData[]>([]);

  useEffect(() => {
    let filtered = pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()));

    if (selectedType !== "all") {
      filtered = filtered.filter((pokemon) => pokemon.types.includes(selectedType));
    }

    setFilteredPokemons(filtered);
  }, [searchTerm, selectedType, pokemons]);

  return filteredPokemons;
};

export default usePokemonFilter;