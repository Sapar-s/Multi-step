import { ChevronRight } from "lucide-react";

export const Button = ({
  chevron,
  back,
  width,
  color,
  text,
  reverse,
  border,
}) => {
  return (
    <div>
      <button
        className={`flex justify-center ${reverse}  text-4 ${color} rounded-md py-[10px] px-3 ${width} bg-${back} ${border}`}
      >
        {text}
        {chevron}
      </button>
    </div>
  );
};
