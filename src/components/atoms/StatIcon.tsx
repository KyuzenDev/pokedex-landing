import { FaHeart } from "react-icons/fa";
import { GiBroadsword } from "react-icons/gi";
import { FaShield } from "react-icons/fa6";
import { JSX } from "react";

type StatType = 'hp' | 'attack' | 'defense';

const StatIcon = ({ type, value }: { type: StatType; value: number }) => {
  const icons: Record<StatType, JSX.Element> = {
    hp: <FaHeart />,
    attack: <GiBroadsword />,
    defense: <FaShield />,
  };
  return (
    <p className="flex items-center gap-1">
      {icons[type]} {value}
    </p>
  );
};

export default StatIcon;