import CloseButton from "../atoms/CloseButton";
import PokemonStatsDetail from "../molecules/PokemonStatsDetail";

interface PokemonDetailProps {
  pokemon: {
    name: string;
    image: string;
    hp: number;
    attack: number;
    defense: number;
    types: string[];
    abilities: string[];
  } | null;
  onClose: () => void;
}

const PokemonDetail = ({ pokemon, onClose }: PokemonDetailProps) => {
  if (!pokemon) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 relative">
        <CloseButton onClick={onClose} />
        <div className="flex flex-col gap-2">
          <div className="flex flex-col capitalize">
            <img
              src={pokemon.image}
              alt={pokemon.name}
              className="w-32 mx-auto"
            />
            <h2 className="text-xl font-bold text-center">{pokemon.name}</h2>
          </div>
          <PokemonStatsDetail
            hp={pokemon.hp}
            attack={pokemon.attack}
            defense={pokemon.defense}
            types={pokemon.types}
            abilities={pokemon.abilities}
          />
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;