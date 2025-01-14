"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./Button";
import { Input } from "./Input";
import { JoinUs } from "./JoinUs";
import { useState } from "react";

export const ThirdPage = ({ click, setCurrentStep }) => {
  const [formValues, setFormValues] = useState({
    birthDate: "",
    profileImage: "",
  });
  const [formErrors, setFormErrors] = useState({
    birthDate: "",
    profileImage: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormErrors((prev) => ({ ...prev, [name]: "" }));

    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = () => {
    let errorHave = false;
    const { birthDate, profileImage } = formValues;

    if (!birthDate.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        birthDate: "Please enter your birth date",
      }));
      errorHave = true;
    }

    // if (!profileImage.trim()) {
    //   setFormErrors((prev) => ({
    //     ...prev,
    //     profileImage: "Please enter your last name",
    //   }));
    //   errorHave = true;
    // }

    if (!errorHave) {
      setCurrentStep(click + 1);
    }
  };

  const backClick = () => {
    setCurrentStep(click - 1);
  };

  return (
    <div className="w-[480px] h-[655px] bg-[#fff] rounded-lg p-8 flex flex-col justify-between">
      <div>
        <JoinUs />
        <div className="mt-[-5px]">
          <Input
            type="date"
            label="Date of birth"
            error={formErrors.birthDate}
            handleChange={handleChange}
            name="birthDate"
          />
        </div>
        {/* <Input
          type="image"
          label="Profile image"
          error={formErrors.profileImage}
          handleChange={handleChange}
          name="profileImage"
        /> */}
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
          handleClick={backClick}
        />
        <Button
          chevron={<ChevronRight />}
          back="bg-[#121316]"
          width="w-[280px]"
          color="text-[#ffffff]"
          text="Continue 3/3"
          handleClick={handleClick}
        />
      </div>
    </div>
  );
};
