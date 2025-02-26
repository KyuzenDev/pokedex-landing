import { PokemonData } from "../../services/pokeApi";
import PokemonCard from "../organisms/PokemonCard";

const PokemonGrid = ({
  pokemons,
  onPokemonClick,
}: {
  pokemons: PokemonData[];
  onPokemonClick: (pokemons: PokemonData) => void;
}) => (
  <ul className="flex flex-wrap justify-center gap-2">
    {pokemons.map((pokemon, i) => (
      <PokemonCard
        key={i}
        pokemon={pokemon}
        onClick={() => onPokemonClick(pokemon)}
      />
    ))}
  </ul>
);

export default PokemonGrid;
