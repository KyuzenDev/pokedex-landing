import { useParams, useNavigate } from "react-router-dom";
import usePokemonDetail from "../../hooks/usePokemonDetail";
import PokemonStatsDetail from "../molecules/PokemonStatsDetail";
import Pokeball from "../../assets/pokeball.png";

const PokemonDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { pokemon, loading, error } = usePokemonDetail(id);

  if (loading) {
    return (
      <div className="fixed inset-0 flex justify-center items-center bg-gray-100">
        <img
          src={Pokeball}
          alt="Loading..."
          className="w-20 h-20 animate-smoothBounce"
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="fixed inset-0 flex flex-col justify-center items-center bg-gray-100">
        <p className="text-red-500 text-lg font-semibold">{error}</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition"
        >
          Back
        </button>
      </div>
    );
  }

  if (!pokemon) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-100 p-5">
      <div className="bg-white p-6 rounded-lg shadow-2xl max-w-xl w-full">
        <div className="flex flex-col items-center">
          <img
            src={pokemon.image}
            alt={pokemon.name}
            className="w-40 h-40 md:w-48 md:h-48 object-contain shadow-md rounded-full bg-gray-200"
          />
          <h2 className="text-3xl font-bold text-gray-800 capitalize mt-4">
            {pokemon.name}
          </h2>

          <div className="mt-6">
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
          <button
            onClick={() => navigate(-1)}
            className="absolute top-12 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition"
          >
            Back
          </button>
      </div>
    </div>
  );
};

export default PokemonDetailPage;
