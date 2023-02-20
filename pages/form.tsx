import { useState } from "react";
import Stepper from "./Form/Stepper";
import StepperControl from "./Form/StepperControl";
import { UseContextProvider } from "./Form/contexts/StepperContext";

import Account from "./Form/steps/Account";
import Details from "./Form/steps/Details";
import Payment from "./Form/steps/Payment";
import Final from "./Form/steps/Final";

function Form() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    "Account Information",
    "Personal Details",
    "Payment",
    "Complete",
  ];

  //   interface FormProps {
  //     children: ReactNode;
  //     // any props that come into the component
  //   }

  //   const displayStep = (step) => {
  //     switch (step) {
  //       case 1:
  //         return <Account />;
  //       case 2:
  //         return <Details />;
  //       case 3:
  //         return <Payment />;
  //       case 4:
  //         return <Final />;
  //       default:
  //     }
  //   };

  //   const handleClick = (direction) => {
  //     let newStep = currentStep;

  //     direction === "next" ? newStep++ : newStep--;
  //     // check if steps are within bounds
  //     newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  //   };

  return (
    <div className="mx-auto rounded-2xl bg-white pb-2 shadow-xl md:w-1/2">
      {/* Stepper */}
      <div className="horizontal container mt-5 ">
        <Stepper steps={steps} currentStep={currentStep} />

        {/* <div className="my-10 p-10 ">
          <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
        </div> */}
      </div>

      {/* navigation button */}
      {currentStep !== steps.length && (
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      )}
    </div>
  );
}

export default Form;
