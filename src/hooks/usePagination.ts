import { useEffect, useState } from "react";
import { PokemonData } from "../services/pokeApi";

const ITEMS_PER_PAGE = 10;

const usePagination = (filteredPokemons: PokemonData[]) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [displayedPokemons, setDisplayedPokemons] = useState<PokemonData[]>([]);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    const offset = currentPage * ITEMS_PER_PAGE;
    setDisplayedPokemons(filteredPokemons.slice(offset, offset + ITEMS_PER_PAGE));
    setPageCount(Math.ceil(filteredPokemons.length / ITEMS_PER_PAGE));
  }, [currentPage, filteredPokemons]);

  return { displayedPokemons, pageCount, setCurrentPage };
};

export default usePagination;
