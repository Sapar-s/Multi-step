"use client";

import { FirstPage } from "@/components/FirstPage";
import { SecondPage } from "@/components/SecondPage";
import { ThirdPage } from "@/components/ThirdPage";
import { FourthPage } from "@/components/FourthPage";
import { useEffect, useState } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);

  const FormSteps = [FirstPage, SecondPage, ThirdPage, FourthPage][currentStep];

  useEffect(() => {
    const savedPages = localStorage.getItem("currentPage");
    setCurrentStep(Number(savedPages));
  }, []);

  return (
    <>
      <AnimatePresence initial={false}>
        <motion.div
          className="w-[100vw] h-[100vh] flex items-center justify-center bg-[#f4f4f4]"
          initial={{ opacity: 0, x: 95 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -95 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          key={currentStep}
        >
          <FormSteps
            currentStep={currentStep}
            click={currentStep}
            setCurrentStep={setCurrentStep}
          />
        </motion.div>
      </AnimatePresence>
    </>
  );
}
