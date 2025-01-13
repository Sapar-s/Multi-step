import { FirstName } from "./FirstName";
import { Input } from "./Input";
import { JoinUs } from "./JoinUs";
import { LastName } from "./LastName";
import { Username } from "./UserName";

export const FirstPage = () => {
  return (
    <>
      <div className="w-[480px] h-[655px] bg-[#fff] rounded-lg p-8">
        <JoinUs />
        <Input label="First name" placeholder="Your first name" />
        <Input label="Last name" placeholder="Your last name" />
        <Input label="Username" placeholder="Your username" />

        <Username />
      </div>
    </>
  );
};
