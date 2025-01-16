"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./Button";
import { Input } from "./Input";
import { JoinUs } from "./JoinUs";
import { useEffect, useState } from "react";

export const SecondPage = ({ click, setCurrentStep }) => {
  const [formValues, setFormValues] = useState({
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = useState({
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormErrors((prev) => ({ ...prev, [name]: "" }));

    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const mail = JSON.parse(localStorage.getItem("email"));
    const phone = JSON.parse(localStorage.getItem("phone"));
    const pass = JSON.parse(localStorage.getItem("password"));
    const conPass = JSON.parse(localStorage.getItem("confirmPass"));

    setFormValues({
      ...formValues,
      email: mail,
      phoneNumber: phone,
      password: pass,
      confirmPassword: conPass,
    });
  }, []);

  const handleClick = () => {
    let errorHave = false;
    const { email, phoneNumber, password, confirmPassword } = formValues;

    let patternEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let patternNumber = /^\+?\d{8}$/;

    if (!email.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        email: "Please enter your email",
      }));
      errorHave = true;
    } else if (!patternEmail.test(email)) {
      setFormErrors((prev) => ({
        ...prev,
        email: "Please provide a valid email address.",
      }));
      errorHave = true;
    }

    if (!phoneNumber.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        phoneNumber: "Please enter your phone number",
      }));
      errorHave = true;
    } else if (!patternNumber.test(phoneNumber)) {
      setFormErrors((prev) => ({
        ...prev,
        phoneNumber: "Please enter a valid phone number.",
      }));
      errorHave = true;
    }

    if (!password.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        password: "Please enter your password",
      }));
      errorHave = true;
    } else if (password.length <= 5) {
      setFormErrors((prev) => ({
        ...prev,
        password: "Enter more than 6 passwords.",
      }));
      errorHave = true;
    }

    if (!confirmPassword.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        confirmPassword: "Please enter your Confirm password",
      }));
      errorHave = true;
    } else if (password !== confirmPassword) {
      setFormErrors((prev) => ({
        ...prev,
        confirmPassword: "Passwords do not match. Please try again.",
      }));
      errorHave = true;
    }

    localStorage.setItem("email", JSON.stringify(formValues.email));
    localStorage.setItem("phone", JSON.stringify(formValues.phoneNumber));
    localStorage.setItem("password", JSON.stringify(formValues.password));
    localStorage.setItem(
      "confirmPass",
      JSON.stringify(formValues.confirmPassword)
    );

    localStorage.setItem("secondPage", JSON.stringify(formValues));

    if (!errorHave) {
      setCurrentStep(click + 1);
    }
  };

  const backClick = () => {
    setCurrentStep(click - 1);
  };

  return (
    <div className="w-[480px]  bg-[#fff] rounded-lg p-8 flex flex-col justify-between ">
      <div>
        <JoinUs />
        <Input
          label="Email"
          placeholder="Your email"
          type="email"
          value={formValues.email}
          error={formErrors.email}
          handleChange={handleChange}
          name="email"
        />
        <Input
          label="Phone number"
          placeholder="Your phone number"
          type="text"
          value={formValues.phoneNumber}
          error={formErrors.phoneNumber}
          handleChange={handleChange}
          name="phoneNumber"
        />
        <Input
          label="Password"
          placeholder="Your password"
          type="password"
          value={formValues.password}
          error={formErrors.password}
          handleChange={handleChange}
          name="password"
        />
        <Input
          label="Confirm password"
          placeholder="Confirm password"
          type="password"
          value={formValues.confirmPassword}
          error={formErrors.confirmPassword}
          handleChange={handleChange}
          name="confirmPassword"
        />
      </div>
      <div className="flex justify-between mt-8">
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
          text="Continue 2/3"
          handleClick={handleClick}
        />
      </div>
    </div>
  );
};
