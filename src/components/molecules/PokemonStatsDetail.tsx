import PokemonTypeBadge from "../../components/atoms/PokemonTypeBadge";
interface PokemonStatsProps {
  speed: number;
  hp: number;
  attack: number;
  special_att: number;
  defense: number;
  special_deff: number;
  types: string[];
  abilities: string[];
  held_items: string[];
  weight: number;
}

const PokemonStatsDetail = ({
  speed,
  hp,
  attack,
  special_att,
  defense,
  special_deff,
  types,
  abilities,
  held_items,
  weight,
}: PokemonStatsProps) => {
  return (
    <div className=" bg-white p-6 rounded-lg w-full">
      <div className="flex flex-col gap-3">
        {/* Types */}
        <div className="flex flex-wrap gap-2">
          {types.map((type: string) => (
            <PokemonTypeBadge key={type} type={type} />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-2">
          <p className="font-semibold text-gray-700">HP:</p>
          <p className="text-gray-600">{hp}</p>

          <p className="font-semibold text-gray-700">Attack:</p>
          <p className="text-gray-600">{attack}</p>

          <p className="font-semibold text-gray-700">Defense:</p>
          <p className="text-gray-600">{defense}</p>

          <p className="font-semibold text-gray-700">Special Attack:</p>
          <p className="text-gray-600">{special_att}</p>

          <p className="font-semibold text-gray-700">Special Defense:</p>
          <p className="text-gray-600">{special_deff}</p>

          <p className="font-semibold text-gray-700">Speed:</p>
          <p className="text-gray-600">{speed}</p>

          <p className="font-semibold text-gray-700">Weight:</p>
          <p className="text-gray-600">{weight} kg</p>
        </div>

        {/* Abilities */}
        <div>
          <p className="font-semibold text-gray-700">Abilities:</p>
          <div className="flex flex-wrap gap-2 mt-1">
            {abilities.map((ability) => (
              <span
                key={ability}
                className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full capitalize"
              >
                {ability}
              </span>
            ))}
          </div>
        </div>

        {/* Items */}
        <div>
          <p className="font-semibold text-gray-700">Items:</p>
          <div className="flex flex-wrap gap-2 mt-1">
            {held_items.length > 0 ? (
              held_items.map((item) => (
                <span
                  key={item}
                  className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full capitalize"
                >
                  {item}
                </span>
              ))
            ) : (
              <span className="text-gray-500 text-sm italic">Tidak ada</span>
            )}
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default PokemonStatsDetail;
