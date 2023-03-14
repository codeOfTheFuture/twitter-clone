interface Props {
  charCount: number;
  limit: number;
}

const CharacterCounter = ({ charCount, limit }: Props) => {
  const diff = limit - charCount;
  const percent = (charCount / limit) * 100;

  let strokeColor = "#00ADED";
  if (diff <= 20 && diff > 0) {
    strokeColor = "#FBBF24";
  } else if (diff <= 0) {
    strokeColor = "#EF4444";
  }

  let circleSize = "w-8 h-8";
  if (diff <= 20) {
    circleSize = "w-10 h-10";
  }

  return (
    <div
      className={`relative ${circleSize} transition-all ease-in-out duration-200`}>
      <svg viewBox="0 0 36 36" className="absolute">
        <path
          d="M 18,2.5
                 A 15.5,15.5 0 0 1 33.5,18
                 A 15.5,15.5 0 0 1 18,33.5
                 A 15.5,15.5 0 0 1 2.5,18
                 A 15.5,15.5 0 0 1 18,2.5 z"
          fill="none"
          stroke="#f2f2f2"
          strokeWidth="2.5"
        />
        <path
          d="M 18,2.5
                 A 15.5,15.5 0 0 1 33.5,18
                 A 15.5,15.5 0 0 1 18,33.5
                 A 15.5,15.5 0 0 1 2.5,18
                 A 15.5,15.5 0 0 1 18,2.5 z"
          fill="none"
          stroke={strokeColor}
          strokeWidth="2.5"
          strokeDasharray={`${percent}, 100`}
          strokeLinecap="round"
        />
      </svg>
      {diff <= 20 && (
        <div
          className={`absolute inset-0 flex items-center justify-center text-sm ${
            diff < 0 && "text-red-500"
          }`}>
          {diff}
        </div>
      )}
    </div>
  );
};

export default CharacterCounter;
