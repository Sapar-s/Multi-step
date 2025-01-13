import { ChevronRight } from "lucide-react";

export const Button = () => {
  return (
    <div>
      <button className="flex justify-center text-4 text-[#fff] rounded-md py-[10px] px-3 w-[100%] bg-[#121316] ">
        Continue 1/3
        <ChevronRight className="w-6 h-6 " />
      </button>
    </div>
  );
};
