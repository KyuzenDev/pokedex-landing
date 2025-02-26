interface TypeFilterProps {
  selectedType: string;
  setSelectedType: (value: string) => void;
  pokemonTypes: string[];
}

const TypeFilter = ({
  selectedType,
  setSelectedType,
  pokemonTypes,
}: TypeFilterProps) => {
  return (
    <select
      value={selectedType}
      onChange={(e) => setSelectedType(e.target.value)}
      className="px-4 py-2 border rounded-lg text-center w-40 bg-white"
    >
      <option value="all">All Types</option>
      {pokemonTypes.map((type) => (
        <option key={type} value={type}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </option>
      ))}
    </select>
  );
};

export default TypeFilter;