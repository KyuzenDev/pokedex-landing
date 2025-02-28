import CloseButton from "../atoms/CloseButton";
import PokemonStatsDetail from "../molecules/PokemonStatsDetail";

interface PokemonDetailProps {
  pokemon: {
    name: string;
    image: string;
    speed: number;
    hp: number;
    attack: number;
    special_att: number;
    defense: number;
    special_deff: number;
    types: string[];
    abilities: string[];
    held_items: string[];
    weight: number;
  } | null;
  onClose: () => void;
}

const PokemonDetail = ({ pokemon, onClose }: PokemonDetailProps) => {
  if (!pokemon) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 animate-fadeIn">
      <div className="bg-white p-6 rounded-lg shadow-2xl max-w-md w-full relative">
        {/* Tombol Close */}
        <CloseButton onClick={onClose} />

        {/* Container Pokémon */}
        <div className="flex flex-col items-center gap-4">
          {/* Gambar & Nama */}
          <div className="flex flex-col items-center">
            <img
              src={pokemon.image}
              alt={pokemon.name}
              className="w-36 h-36 object-contain shadow-md rounded-full"
            />
            <h2 className="text-2xl font-bold text-gray-800 capitalize mt-2">
              {pokemon.name}
            </h2>
          </div>

          {/* Statistik Pokémon */}
          <PokemonStatsDetail
          speed={pokemon.speed}
            hp={pokemon.hp}
            attack={pokemon.attack}
            special_att={pokemon.special_att}
            defense={pokemon.defense}
            special_deff={pokemon.special_deff}
            types={pokemon.types}
            abilities={pokemon.abilities}
            held_items={pokemon.held_items}
            weight={pokemon.weight}
          />
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;