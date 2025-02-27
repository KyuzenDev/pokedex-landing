import { useEffect, useState } from "react";
import {
  fetchPokemons,
  fetchPokemonDetail,
  Pokemon,
  PokemonDetail,
  PokemonData,
} from "../../services/pokeApi";
import PokemonTitle from "../organisms/PokemonTitle";
import PokemonDetailStats from "../organisms/PokemonDetail";
import PokemonGrid from "../templates/PokemonGrid";
import ReactPaginate from "react-paginate";
import Pokeball from "../../assets/pokeball.png";
const ITEMS_PER_PAGE = 10;

const PokemonList = () => {
  const [selectedType, setSelectedType] = useState<string>("all");
  const [pokemonTypes, setPokemonTypes] = useState<string[]>([]);
  const [pokemons, setPokemons] = useState<PokemonData[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<PokemonData[]>([]);
  const [displayedPokemons, setDisplayedPokemons] = useState<PokemonData[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [selectedPokemonDetail, setSelectedPokemonDetail] =
    useState<PokemonData | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Membuka detail Pokémon yang dipilih
  const openPokemonDetail = (pokemon: PokemonData) => {
    setSelectedPokemonDetail(pokemon);
  };

  // Menutup detail Pokémon
  const closePokemonDetail = () => {
    setSelectedPokemonDetail(null);
  };

  // Mengambil data Pokémon dari API
  const fetchData = async () => {
    setLoading(true);
    try {
      const totalPokemons = 1000;
      let allPokemons: PokemonData[] = [];

      for (let i = 0; i < totalPokemons; i += 100) {
        const data = await fetchPokemons(100, i);
        const detailedPokemons: PokemonData[] = await Promise.all(
          data.results.map(async (pokemon: Pokemon): Promise<PokemonData> => {
            const details: PokemonDetail = await fetchPokemonDetail(
              pokemon.name
            );
            return {
              base_experience: details.base_experience,
              name: pokemon.name,
              image: details.sprites.front_default,
              types: details.types.map((t) => t.type.name),
              hp: details.stats.find((s) => s.stat.name === "hp")!.base_stat,
              attack: details.stats.find((s) => s.stat.name === "attack")!
                .base_stat,
              defense: details.stats.find((s) => s.stat.name === "defense")!
                .base_stat,
              abilities: details.abilities.map(
                (abilities) => abilities.ability.name
              ),
            };
          })
        );

        allPokemons = [...allPokemons, ...detailedPokemons];
        setPokemons(allPokemons);
        setFilteredPokemons(allPokemons);
        setPageCount(Math.ceil(allPokemons.length / ITEMS_PER_PAGE));
      }
    } catch {
      setError("Error fetching Pokémon data...");
    }
    setLoading(false);
  };

  // Mengambil type Pokémon dari API
  const fetchPokemonTypes = async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/type");
      const data = await response.json();
      setPokemonTypes(data.results.map((type: PokemonData) => type.name));
    } catch (error) {
      console.error("Error fetching Pokémon types:", error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchPokemonTypes();
  }, []);

  // Memfilter Pokémon berdasarkan pencarian dan type yang dipilih
  useEffect(() => {
    let filtered = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (selectedType !== "all") {
      filtered = filtered.filter((pokemon) =>
        pokemon.types.includes(selectedType)
      );
    }

    setFilteredPokemons(filtered);
    setPageCount(Math.ceil(filtered.length / ITEMS_PER_PAGE));
    setCurrentPage(0);
  }, [searchTerm, selectedType, pokemons]);

  // Memperbarui Pokémon yang ditampilkan berdasarkan halaman
  useEffect(() => {
    const offset = currentPage * ITEMS_PER_PAGE;
    setDisplayedPokemons(
      filteredPokemons.slice(offset, offset + ITEMS_PER_PAGE)
    );
  }, [currentPage, filteredPokemons]);

  if (error) return <p className="text-center text-red-500">{error}</p>;

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
          <div className="absolute bottom-2 w-20 h-4 bg-black rounded-full blur-md opacity-30 animate-shadowPulse"></div>
        </div>
      ) : (
        <>
          <PokemonGrid
            pokemons={displayedPokemons}
            onPokemonClick={openPokemonDetail}
          />

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

      <PokemonDetailStats
        pokemon={selectedPokemonDetail}
        onClose={closePokemonDetail}
      />
    </div>
  );
};

export default PokemonList;