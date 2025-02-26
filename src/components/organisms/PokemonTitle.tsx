import Title from "../atoms/Title";
import SearchBar from "../molecules/SearchBar";
import TypeFilter from "../molecules/TypeFilter";

interface PokemonTitleProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  selectedType: string;
  setSelectedType: (value: string) => void;
  pokemonTypes: string[];
}

const PokemonTitle = ({
  searchTerm,
  setSearchTerm,
  selectedType,
  setSelectedType,
  pokemonTypes,
}: PokemonTitleProps) => {
  return (
    <div className="pokemon-title w-full flex justify-center flex-col gap-5">
      <Title text="Pokédex" />
      <div className="flex gap-3 justify-center">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <TypeFilter
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          pokemonTypes={pokemonTypes}
        />
      </div>
    </div>
  );
};

export default PokemonTitle;