import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  count?: number;
  hoverBgColor: string;
  hoverTextColor: string;
}

const TweetIcon = ({
  children,
  count,
  hoverBgColor,
  hoverTextColor,
}: Props) => {
  return (
    <div className="flex cursor-pointer items-center space-x-2 text-gray-500 group">
      <div className={`${hoverBgColor} ${hoverTextColor} p-2 rounded-full`}>
        {children}
      </div>
      {count && <span className={`${hoverTextColor}`}>{count}</span>}
    </div>
  );
};

export default TweetIcon;
