"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./Button";
import { Input } from "./Input";
import { JoinUs } from "./JoinUs";
import { useEffect, useState } from "react";
import ImageUpload from "./ImageUpload";

export const ThirdPage = ({ click, setCurrentStep }) => {
  const [formValues, setFormValues] = useState({
    birthDate: "",
    profileImage: "",
  });
  const [formErrors, setFormErrors] = useState({
    birthDate: "",
    profileImage: "",
  });
  // const [profileURL, setProfileURL] = useState();

  const handleChange = (event) => {
    console.log(event);
    const { name, value } = event.target;
    setFormErrors((prev) => ({ ...prev, [name]: "" }));

    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (image) => {
    setFormErrors((prev) => ({ ...prev, profileImage: "" }));
    setFormValues((prev) => ({ ...prev, profileImage: image }));
  };

  useEffect(() => {
    const birth = JSON.parse(localStorage.getItem("dateOfBirth"));

    setFormValues({ ...formValues, birthDate: birth });
  }, []);

  const handleClick = () => {
    let errorHave = false;
    const { birthDate, profileImage } = formValues;

    if (!birthDate.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        birthDate: "Please select a date.",
      }));
      errorHave = true;
    } else {
      const dates = birthDate.split("-");

      const birth = Number(dates[0]);
      const birthMonth = Number(dates[1]);
      const day = Number(dates[2]);

      const age = new Date().getFullYear() - birth;
      const month = new Date().getMonth() + 1 - birthMonth;
      const date = new Date().getDate() - day;

      if (
        age < 18 ||
        (age === 18 && (month < 0 || (month === 0 && date < 0)))
      ) {
        setFormErrors((prev) => ({
          ...prev,
          birthDate: "Must be over 18 years old.",
        }));
        errorHave = true;
      }
    }
    // }
    // }

    if (!profileImage) {
      setFormErrors((prev) => ({
        ...prev,
        profileImage: "Image cannot be blank",
      }));
      errorHave = true;
    }

    localStorage.setItem("dateOfBirth", JSON.stringify(formValues.birthDate));

    localStorage.setItem("thirdPage", JSON.stringify(formValues));

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
            value={formValues.birthDate}
            error={formErrors.birthDate}
            handleChange={handleChange}
            name="birthDate"
          />
        </div>
        <ImageUpload
          onImageUpload={handleImageUpload}
          error={formErrors.profileImage}
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
