import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./Button";
import { Input } from "./Input";
import { JoinUs } from "./JoinUs";

export const ThirdPage = () => {
  return (
    <div className="w-[480px] h-[655px] bg-[#fff] rounded-lg p-8 flex flex-col justify-between">
      <div>
        <JoinUs />
        <div className="mt-[-5px]">
          <Input type="date" label="Date of birth" />
        </div>
        <Input type="image" label="Profile image" />
      </div>
      <div className="flex justify-between">
        <Button
          chevron={<ChevronLeft />}
          back="[#fff]"
          width="w-[128px]"
          color="text-[#202124]"
          text="Back"
          reverse="flex-row-reverse"
          border="border-[1px] border-[#CBD5E1]"
        />
        <Button
          chevron={<ChevronRight />}
          back="[#121316]"
          width="w-[280px]"
          color="text-[#ffffff]"
          text="Continue 3/3"
        />
      </div>
    </div>
  );
};

// height="180px"
