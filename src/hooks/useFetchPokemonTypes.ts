import { useEffect, useState } from "react";



const useFetchPokemonTypes = () => {
  const [pokemonTypes, setPokemonTypes] = useState<string[]>([]);

  useEffect(() => {
    const fetchPokemonTypes = async () => {
      try {
        const API_TYPES = import.meta.env.VITE_API_URL_TYPES;
        const response = await fetch(`${API_TYPES}`);
        const data = await response.json();
        setPokemonTypes(data.results.map((type: { name: string }) => type.name));
      } catch (error) {
        console.error("Error fetching Pokémon types:", error);
      }
    };

    fetchPokemonTypes();
  }, []);

  return pokemonTypes;
};

export default useFetchPokemonTypes;