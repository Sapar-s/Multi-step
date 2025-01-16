"use client";

import { FirstPage } from "@/components/FirstPage";
import { SecondPage } from "@/components/SecondPage";
import { ThirdPage } from "@/components/ThirdPage";
import { FourthPage } from "@/components/FourthPage";
import { useEffect, useState } from "react";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);

  const FormSteps = [FirstPage, SecondPage, ThirdPage, FourthPage][currentStep];

  useEffect(() => {
    // const firstPage = JSON.parse(localStorage.getItem("firstPage"));
    // const secondPage = JSON.parse(localStorage.getItem("secondPage"));
    // const thirdPage = JSON.parse(localStorage.getItem("thirdPage"));
    // setCurrentStep(currentStep + 1);
  }, []);

  return (
    <>
      <div className="w-[100vw] h-[100vh] flex items-center justify-center bg-[#f4f4f4]">
        <FormSteps
          currentStep={currentStep}
          click={currentStep}
          setCurrentStep={setCurrentStep}
        />
      </div>
    </>
  );
}
