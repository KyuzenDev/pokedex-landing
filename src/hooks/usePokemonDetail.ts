import { useEffect, useState } from "react";
import axios from "axios";
import { PokemonData, PokemonDetail } from "../services/pokeApi";

const API = import.meta.env.VITE_API_URL; // API base URL dari .env

const usePokemonDetail = (id: string | undefined) => {
  const [pokemon, setPokemon] = useState<PokemonData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
const getStatValue = (
  stats: { stat: { name: string }; base_stat: number }[],
  statName: string
) => {
  return stats.find((s) => s.stat.name === statName)?.base_stat || 0;
};

  useEffect(() => {
    if (!id) return;

    const fetchPokemonDetail = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${API}/${id}`);
        const data: PokemonDetail = response.data;

        const formattedPokemon: PokemonData = {
          id: data.id.toString(),
          base_experience: data.base_experience,
          name: data.name,
          image: data.sprites.front_default,
          types: data.types.map((t) => t.type.name),
          hp: getStatValue(data.stats, "hp"),
          attack: getStatValue(data.stats, "attack"),
          special_att: getStatValue(data.stats, "special-attack"),
          defense: getStatValue(data.stats, "defense"),
          special_deff: getStatValue(data.stats, "special-defense"),
          speed: getStatValue(data.stats, "speed"),
          abilities: data.abilities.map((ability) => ability.ability.name),
          held_items: data.held_items.map((item) => item.item.name),
          weight: data.weight,
        };

        setPokemon(formattedPokemon);
      } catch (err) {
        console.error("Error fetching Pokémon details:", err);
        setError("Failed to load Pokémon details.");
      }
      setLoading(false);
    };

    fetchPokemonDetail();
  }, [id]);

  return { pokemon, loading, error };
};

export default usePokemonDetail;
