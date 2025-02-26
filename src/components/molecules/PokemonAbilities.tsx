const PokemonAbilities = ({ abilities }: { abilities: string[] }) => (
  <div className="gap-2 flex flex-wrap">
    {abilities.map((ability) => (
      <span
        key={ability}
        className="px-2 py-1 rounded capitalize border border-black text-xs bg-white"
      >
        {ability}
      </span>
    ))}
  </div>
);

export default PokemonAbilities;
