import { useState } from "react";
import useFetchPokemons from "../../hooks/useFetchPokemons";
import useFetchPokemonTypes from "../../hooks/useFetchPokemonTypes";
import usePokemonFilter from "../../hooks/usePokemonFilter";
import usePagination from "../../hooks/usePagination";
import PokemonTitle from "../organisms/PokemonTitle";
import PokemonGrid from "../templates/PokemonGrid";
import ReactPaginate from "react-paginate";
import Pokeball from "../../assets/pokeball.png";

const PokemonList = () => {
  const { pokemons, loading, error } = useFetchPokemons();
  const pokemonTypes = useFetchPokemonTypes();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<string>("all");

  const filteredPokemons = usePokemonFilter(pokemons, searchTerm, selectedType);
  const { displayedPokemons, pageCount, setCurrentPage } =
    usePagination(filteredPokemons);

  if (error) {
    return (
      <div className="fixed inset-0 flex flex-col justify-center items-center bg-gray-100">
        <p className="text-red-500 text-lg font-semibold">{error}</p>
      </div>
    );
  }

  return (
    <div className="pokemon-wrapper py-5 px-10 flex flex-col gap-5 items-center">
      <PokemonTitle
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        pokemonTypes={pokemonTypes}
      />

      {loading ? (
        <div className="relative flex justify-center items-center h-40">
          <img
            src={Pokeball}
            alt="Loading..."
            className="w-20 h-20 animate-smoothBounce"
          />
        </div>
      ) : (
        <>
          <PokemonGrid pokemons={displayedPokemons} />
          <ReactPaginate
            breakLabel="..."
            nextLabel="Next"
            previousLabel="Prev"
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            onPageChange={(e) => setCurrentPage(e.selected)}
            containerClassName="flex justify-center space-x-2"
            pageClassName="bg-gray-700 text-white px-3 py-1 rounded-full"
            previousClassName="bg-red-500 text-white px-3 py-1 rounded-lg"
            nextClassName="bg-red-500 text-white px-3 py-1 rounded-lg"
            activeClassName="bg-gray-900"
          />
        </>
      )}
    </div>
  );
};

export default PokemonList;
