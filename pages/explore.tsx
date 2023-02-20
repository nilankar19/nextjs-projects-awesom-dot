import { createContext, useState } from "react";
import Stepper from "@/components/Stepper";
import React from "react";
import Step from "@/components/Step";
import { useFormik } from "formik";
import SuccessDialog from "@/components/SuccessDialog";
const Explore = () => {
  let [isOpen, setIsOpen] = useState(false);

  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const prevPage = () => {
    setActiveStepIndex((prev) => prev - 1);
  };
  const nextPage = () => {
    setActiveStepIndex((prev) => prev + 1);
  };

  const { values, errors, touched, handleSubmit, handleChange, handleReset } =
    useFormik({
      initialValues: {
        name: "",
        websitelink: "",
        logo: "",
        category: "",
        document: "",
        projectDesc: "",
        socialmediaChannel: "",
        contactPoint: "",
        extrainfo: "",
        githubUrl: "",
        token: "",
        investors: "",
        Builderprogram: "",
        proposal: "",
      },
      onSubmit: (values) => {
        setActiveStepIndex(activeStepIndex + 1);
        if (activeStepIndex === 2) {
          console.log(values);
          setIsOpen(true);
        }
      },
    });
  return (
    <>
      <div className="container mx-auto">
        <section className="contributor-section  secSpacer ">
          <div className="card-box">
            <h3 className="text-bold text-center text-6xl text-[#d1fadf] ">
              Add Project
            </h3>
            <p className="mpara">
              Welcome to the Polkadot & Kusama Ecosystem! We would love to
              feature your project on our Ecosystem Map.
            </p>
          </div>
        </section>
        <div className="flex flex-col items-center">
          <FormContext.Provider
            value={{
              activeStepIndex,
              setActiveStepIndex,
              prevPage,
              nextPage,
              values,
              errors,
              touched,
              handleSubmit,
              handleChange,
              handleReset,
            }}
          >
            {isOpen ? (
              <SuccessDialog isOpen={isOpen} setIsOpen={setIsOpen} />
            ) : (
              <>
                <Stepper />
                <Step />
              </>
            )}
          </FormContext.Provider>
        </div>
      </div>
    </>
  );
};

export default Explore;

export const FormContext = createContext(null);
