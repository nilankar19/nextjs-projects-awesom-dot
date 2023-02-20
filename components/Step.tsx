// Step.js
import React, { useContext } from "react";
import { FormContext } from "../pages/explore";
import BasicInformation from "./Step1";
import Success from "./Success";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { FormContextType } from "../pages/explore";

function Step() {
  const { activeStepIndex } = useContext<FormContextType | null>(FormContext);
  let stepContent;
  switch (activeStepIndex) {
    case 0:
      stepContent = <BasicInformation />;
      break;
    case 1:
      stepContent = <Step2 />;
      break;
    case 2:
      stepContent = <Step3 />;
      break;
    default:
      break;
  }

  return stepContent;
}

export default Step;
