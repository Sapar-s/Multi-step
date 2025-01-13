import { ChevronRight } from "lucide-react";
import { Button } from "./Button";
import { Input } from "./Input";
import { JoinUs } from "./JoinUs";

export const FirstPage = () => {
  return (
    <>
      <div className="w-[480px] h-[655px] bg-[#fff] rounded-lg p-8 flex flex-col justify-between ">
        <div>
          <JoinUs />
          <Input
            label="First name"
            placeholder="Your first name"
            type="text"
            oninvalid="First name cannot contain special characters or numbers."
          />
          <Input label="Last name" placeholder="Your last name" type="text" />
          <Input label="Username" placeholder="Your username" type="text" />
        </div>
        <div>
          <Button
            chevron={<ChevronRight />}
            back="[#121316]"
            width="w-[100%]"
            color="text-[#ffffff]"
            text="Continue 1/3"
          />
        </div>
      </div>
    </>
  );
};
