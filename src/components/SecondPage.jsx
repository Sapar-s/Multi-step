import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./Button";
import { Input } from "./Input";
import { JoinUs } from "./JoinUs";

export const SecondPage = () => {
  return (
    <div className="w-[480px] h-[655px] bg-[#fff] rounded-lg p-8 flex flex-col justify-between ">
      <div>
        <JoinUs />
        <Input label="Email" placeholder="Your email" type="email" />
        <Input
          label="Phone number"
          placeholder="Your phone number"
          type="number"
        />
        <Input label="Password" placeholder="Your password" type="password" />
        <Input
          label="Confirm password"
          placeholder="Confirm password"
          type="password"
        />
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
          text="Continue 2/3"
        />
      </div>
    </div>
  );
};
