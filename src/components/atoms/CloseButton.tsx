interface CloseButtonProps {
  onClick: () => void;
}

const CloseButton = ({ onClick }: CloseButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
    >
      ✖
    </button>
  );
};

export default CloseButton;