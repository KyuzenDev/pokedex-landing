interface PokemonAbilitiesProps {
  abilities: string[];
  id: string; // Tambahkan id sebagai prop
}



const PokemonAbilities = ({ abilities, id }: PokemonAbilitiesProps) => (
  <div className="gap-2 flex flex-wrap">
    {abilities.map((ability) => (
      <span
        key={`${id}-${ability}`}
        className="px-2 py-1 rounded capitalize border border-black text-xs bg-white"
      >
        {ability}
      </span>
    ))}
  </div>
);

export default PokemonAbilities;
