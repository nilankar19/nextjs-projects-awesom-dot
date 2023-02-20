// Workspace.js
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { memo, useContext } from "react";
import { FormContext } from "../pages/explore";
import * as yup from "yup";
import FormError from "./FormError";

function Workspace() {
  const {
    activeStepIndex,
    setActiveStepIndex,
    prevPage,
    handleChange,
    values,
    errors,
    handleSubmit,
  } = useContext<any>(FormContext);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center w-full gap-4"
      >
        <div className="flex w-full justify-center items-start  gap-2">
          <div className="grid w-full">
            <textarea
              name="projectDesc"
              className="rounded-md border-2 p-2"
              placeholder="Describe your project in less than 200 words"
              rows={4}
              onChange={handleChange}
              required
              value={values.projectDesc}
            />
            <FormError error={errors.projectDesc} />
          </div>
        </div>
        <div className="flex w-full justify-center items-start  gap-2">
          <div className="grid w-full">
            <input
              name="socialmediaChannel"
              className="rounded-md border-2 p-2"
              placeholder="Add all the social media channels being managed by your project"
              type="text"
              required
              onChange={handleChange}
              value={values.socialmediaChannel}
            />
            <FormError error={errors.socialmediaChannel} />
          </div>
        </div>
        <div className="flex w-full items-start gap-4">
          <div className="grid w-full">
            <input
              name="contactPoint"
              className="rounded-md border-2 p-2"
              placeholder="Please specify who’s the contact point of your project "
              required
              type="text"
              onChange={handleChange}
              value={values.contactPoint}
            />
            <FormError error={errors.contactPoint} />
          </div>
        </div>
        <div className="flex flex-row w-full items-start justify-center gap-2 ">
          <div className="grid w-full">
            <textarea
              rows={2}
              name="extrainfo"
              className="rounded-md border-2 p-2"
              placeholder="In case we missed on any details, you can mention them here"
              onChange={handleChange}
              value={values.extrainfo}
              required
            />
            <label htmlFor="investors" className="my-2 text-gray-400 text-sm">
              Try adding the email and telegram handle along with the name
            </label>
            <FormError error={errors.extrainfo} />
          </div>
        </div>
        <div className="grid grid-cols-2 justify-center items-center gap-4 ">
          <button
            className="rounded-md bg-white text-gray-400 border-gray-400 border w-full font-medium px-2 my-2 p-2 disabled:bg-white"
            type="button"
            onClick={prevPage}
          >
            Previous
          </button>
          <button
            className="rounded-md bg-[#039855] w-full font-medium text-white px-2 my-2 p-2"
            type="submit"
          >
            Next
          </button>
        </div>
      </form>
    </>
  );
}

export default memo(Workspace);
