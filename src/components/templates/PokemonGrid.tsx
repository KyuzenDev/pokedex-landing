import { PokemonData } from "../../services/pokeApi";
import PokemonCard from "../organisms/PokemonCard";

const PokemonGrid = ({
  pokemons,
}: {
  pokemons: PokemonData[];
}) => (
  <ul className="flex flex-wrap justify-center gap-2">
    {pokemons.map((pokemon, i) => (
      <PokemonCard
        key={i}
        pokemon={pokemon}
      />
    ))}
  </ul>
);

export default PokemonGrid;