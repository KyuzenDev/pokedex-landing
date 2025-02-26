const typeColors: { [key: string]: string } = {
  fire: "bg-red-500",
  water: "bg-blue-300",
  grass: "bg-green-400",
  electric: "bg-yellow-400",
  ice: "bg-blue-200",
  fighting: "bg-red-700",
  poison: "bg-purple-500",
  ground: "bg-yellow-600",
  flying: "bg-indigo-300",
  psychic: "bg-pink-400",
  bug: "bg-green-600",
  rock: "bg-gray-600",
  ghost: "bg-purple-700",
  dragon: "bg-indigo-700",
  dark: "bg-gray-800",
  steel: "bg-gray-400",
  fairy: "bg-pink-300",
  normal: "bg-gray-300",
};

const PokemonTypeBadge = ({ type }: { type: string }) => (
  <span
    className={`px-2 py-1 rounded uppercase bold text-white text-xs ${
      typeColors[type] || "bg-gray-500"
    }`}
  >
    {type}
  </span>
);

export default PokemonTypeBadge;
