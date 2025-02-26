interface PokemonStatsProps {
  hp: number;
  attack: number;
  defense: number;
  types: string[];
  abilities: string[];
}

const PokemonStatsDetail = ({
  hp,
  attack,
  defense,
  types,
  abilities,
}: PokemonStatsProps) => {
  return (
    <div className="flex flex-col items-start">
      <p className="text-center text-gray-600 capitalize">
        Type: {types.join(", ")}
      </p>
      <p className="text-center text-gray-600">HP: {hp}</p>
      <p className="text-center text-gray-600">Attack: {attack}</p>
      <p className="text-center text-gray-600">Defense: {defense}</p>
      <p className="text-center text-gray-600 capitalize">
        Abilities: {abilities.join(", ")}
      </p>
    </div>
  );
};

export default PokemonStatsDetail;
