import { Button } from "./Button";
import { Input } from "./Input";
import { JoinUs } from "./JoinUs";

export const FirstPage = () => {
  return (
    <>
      <div className="w-[480px] h-[655px] bg-[#fff] rounded-lg p-8 flex flex-col justify-between ">
        <div>
          <JoinUs />
          <Input label="First name" placeholder="Your first name" />
          <Input label="Last name" placeholder="Your last name" />
          <Input label="Username" placeholder="Your username" />
        </div>
        <div>
          <Button />
        </div>
      </div>
    </>
  );
};
