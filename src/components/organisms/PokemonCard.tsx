import PokemonTypeBadge from "../atoms/PokemonTypeBadge";
import PokemonStats from "../molecules/PokemonStats";
import PokemonAbilities from "../molecules/PokemonAbilities";
import { PokemonData } from "../../services/pokeApi";

const PokemonCard = ({
  pokemon,
  onClick,
}: {
  pokemon: PokemonData;
  onClick: () => void;
}) => (
  <li
    className="relative w-60 border-4 border-black p-4 cursor-pointer bg-gray-200 rounded-xl flex flex-col items-center transition-all transform hover:scale-90 hover:shadow-lg duration-500 ease-in-out"
    onClick={onClick}
  >
    {" "}
    <span className="pokemon-exp absolute top-5 left-5 px-3 py-2 rounded-full bg-black text-white text-xs font-bold">
      {pokemon.base_experience}
    </span>
    <div className="pokemon-types absolute top-5 right-5 flex gap-1">
      {pokemon.types.map((type: string) => (
        <PokemonTypeBadge key={type} type={type} />
      ))}
    </div>
    <div className="pokemon-card pt-10 flex flex-col gap-2">
      <div className="flex flex-col items-center">
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="w-40 h-40 transition-transform duration-500 ease-in-out hover:scale-110"
        />
        <h3 className="font-bold text-lg capitalize">{pokemon.name}</h3>
      </div>
      <PokemonStats
        hp={pokemon.hp}
        attack={pokemon.attack}
        defense={pokemon.defense}
      />
      <PokemonAbilities abilities={pokemon.abilities} />
    </div>
  </li>
);

export default PokemonCard;
