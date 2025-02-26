import StatIcon from "../atoms/StatIcon";

const PokemonStats = ({
  hp,
  attack,
  defense,
}: {
  hp: number;
  attack: number;
  defense: number;
}) => (
  <div className="flex flex-row gap-2 justify-center">
    <StatIcon type="hp" value={hp} />
    <StatIcon type="attack" value={attack} />
    <StatIcon type="defense" value={defense} />
  </div>
);

export default PokemonStats;