"use client";

import { ChevronRight } from "lucide-react";
import { Button } from "./Button";
import { Input } from "./Input";
import { JoinUs } from "./JoinUs";
import { useEffect, useState } from "react";

export const FirstPage = ({ click, setCurrentStep }) => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    userName: "",
  });
  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    userName: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormErrors((prev) => ({ ...prev, [name]: "" }));

    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const savedValue = JSON.parse(localStorage.getItem("firstPage"));

    setFormValues((prev) => ({ ...prev, ...savedValue }));
  }, []);

  const handleClick = () => {
    let errorHave = false;
    const { firstName, lastName, userName } = formValues;

    let patternNumber = /\d/;

    if (!firstName.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        firstName: "Please enter your first name",
      }));
      errorHave = true;
    } else if (!patternNumber.test(firstName)) {
      setFormErrors((prev) => ({
        ...prev,
        firstName: "First name cannot contain special characters or numbers.",
      }));
      errorHave = true;
    }

    if (!lastName.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        lastName: "Please enter your last name",
      }));
      errorHave = true;
    }

    if (!userName.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        userName: "Please enter your username",
      }));
      errorHave = true;
    }

    if (!errorHave) {
      localStorage.setItem("firstPage", JSON.stringify(formValues));
      localStorage.setItem("currentPage", 1);
      setCurrentStep(click + 1);
    }
  };
  return (
    <>
      <div className="w-[480px] h-[655px] bg-[#fff] rounded-lg p-8 flex flex-col justify-between ">
        <div>
          <JoinUs />
          <Input
            label="First name"
            placeholder="Your first name"
            type="text"
            value={formValues.firstName}
            error={formErrors.firstName}
            handleChange={handleChange}
            name="firstName"
          />
          <Input
            label="Last name"
            placeholder="Your last name"
            type="text"
            value={formValues.lastName}
            error={formErrors.lastName}
            handleChange={handleChange}
            name="lastName"
          />
          <Input
            label="Username"
            placeholder="Your username"
            type="text"
            value={formValues.userName}
            error={formErrors.userName}
            handleChange={handleChange}
            name="userName"
          />
        </div>
        <div>
          <Button
            handleClick={handleClick}
            chevron={<ChevronRight />}
            back="bg-[#121316]"
            width="w-[100%]"
            color="text-[#ffffff]"
            text="Continue 1/3"
          />
        </div>
      </div>
    </>
  );
};
