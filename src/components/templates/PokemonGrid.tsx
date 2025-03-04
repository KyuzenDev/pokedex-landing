import { PokemonData } from "../../services/pokeApi";
import PokemonCard from "../organisms/PokemonCard";

const PokemonGrid = ({
  pokemons,
}: {
  pokemons: PokemonData[];
}) => (
  <ul className="flex flex-wrap justify-center gap-2">
    {pokemons.map((pokemon) => (
      <PokemonCard
        key={pokemon.id}
        pokemon={pokemon}
      />
    ))}
  </ul>
);

export default PokemonGrid;