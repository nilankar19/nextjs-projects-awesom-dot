// Stepper.js
import React, { useContext, useEffect } from "react";
import { FormContext } from "../pages/explore";
import Image from "next/image";

function Stepper() {
  const { activeStepIndex } = useContext<any>(FormContext);
  useEffect(() => {
    const stepperItems = document.querySelectorAll(".stepper-item");
    stepperItems.forEach((step, i) => {
      if (i < activeStepIndex) {
        step.classList.add("bg-[#1D2939]", "text-white");
      } else {
        step.classList.remove("bg-[#1D2939]", "text-white");
      }
    });
  }, [activeStepIndex]);

  return (
    <div className="w-2/3 grid grid-cols-5 py-16 items-center justify-center text-sm">
      <div className=" flex flex-col items-center justify-center ">
        <div className="dark:after:border-blue-800 items-center flex justify-center stepper-item w-10 h-10 border-black tspext-center font-medium border-2 rounded-full">
          1
        </div>
        <p className="my-4">Basic Information</p>
      </div>
      <Image
        src={"/images/line.svg"}
        width={300}
        height={100}
        alt="line"
        className="relative bottom-6"
      />
      <div className="flex flex-col items-center justify-center">
        <div className="items-center flex justify-center stepper-item w-10 h-10 border-black text-center font-medium border-2 rounded-full">
          2
        </div>
        <p className="my-4">Category 2</p>
      </div>
      <Image
        src={"/images/line.svg"}
        width={300}
        height={100}
        alt="line"
        className="relative bottom-6"
      />
      <div className="flex flex-col items-center justify-center">
        <div className="items-center flex justify-center stepper-item w-10 h-10 border-black text-center font-medium border-2 rounded-full">
          3
        </div>
        <p className="my-4">Category 3</p>
      </div>
    </div>
  );
}

export default Stepper;
