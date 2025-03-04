import { useEffect, useState } from "react";
import axios from "axios";
import { Pokemon, PokemonDetail, PokemonData } from "../services/pokeApi";

const API = import.meta.env.VITE_API_URL;

const useFetchPokemons = (limit = 1320, loadPages = 50) => {
  const [pokemons, setPokemons] = useState<PokemonData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const getStatValue = (stats: { stat: { name: string }; base_stat: number }[], statName: string) => {
  return stats.find((s) => s.stat.name === statName)?.base_stat || 0;
};

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const offset = currentPage * limit;
        const { data } = await axios.get(`${API}?limit=${limit}&offset=${offset}`);
        const pokemons: Pokemon[] = data.results;

        const detailedPokemons = await Promise.all(
          pokemons.map(async (pokemon) => {
            const response = await axios.get(`${API}/${pokemon.name}`);
            const details: PokemonDetail = response.data;

            return {
              id: details.id,
              base_experience: details.base_experience,
              name: pokemon.name,
              image: details.sprites.front_default,
              types: details.types.map((t) => t.type.name),
              hp: getStatValue(details.stats, "hp"),
              attack: getStatValue(details.stats, "attack"),
              special_att: getStatValue(details.stats, "special-attack"),
              defense: getStatValue(details.stats, "defense"),
              special_deff: getStatValue(details.stats, "special-defense"),
              speed: getStatValue(details.stats, "speed"),
              abilities: details.abilities.map(
                (ability) => ability.ability.name
              ),
              held_items: details.held_items.map((item) => item.item.name),
              weight: details.weight,
            };
          })
        );

        setPokemons(detailedPokemons);
      } catch (err) {
        console.error("Error fetching Pokémon:", err);
        setError("Error fetching Pokémon data...");
      }
      setLoading(false);
    };

    fetchData();
  }, [currentPage, limit]);

  return { pokemons, loading, error, currentPage, setCurrentPage, loadPages };
};

export default useFetchPokemons;