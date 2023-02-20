// Workspace.js
import React, { memo, useContext } from "react";
import { FormContext } from "../pages/explore";
import FormError from "./FormError";

function Category2() {
  const { prevPage, errors, values, handleChange, handleSubmit } =
    useContext<any>(FormContext);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center w-full gap-4"
    >
      <div className="flex w-full justify-center gap-8 items-start">
        <div className="grid w-full">
          <input
            name="githubUrl"
            className="rounded-md border-2 p-2"
            placeholder="Add your Github link *"
            onChange={handleChange}
            value={values.githubUrl}
            type="text"
            required
          />
          <FormError error={errors.githubUrl} />
        </div>
        <div className="grid w-full ">
          <input
            name="token"
            className="rounded-md border-2 p-2"
            placeholder="What’s your token ?"
            onChange={handleChange}
            value={values.token}
            type="text"
            required
          />
          <FormError error={errors.token} />
        </div>
      </div>
      <div className="flex w-full justify-center items-start  gap-2">
        <div className="grid w-full">
          <input
            name="investors"
            className="rounded-md border-2 p-2"
            placeholder="Add all the investors, in case you have one"
            value={values.investors}
            onChange={handleChange}
            type="text"
            required
          />
          <label htmlFor="investors" className="my-2 text-gray-400 text-sm">
            Type the investor name and hit enter to add one
          </label>
          <FormError error={errors.investors} />
        </div>
      </div>
      <div className="flex w-full items-start gap-4">
        <div className="grid w-full">
          <input
            name="Builderprogram"
            className="rounded-md border-2 p-2"
            placeholder="Are you a part of Substrate Builders Program ?"
            value={values.Builderprogram}
            onChange={handleChange}
            required
            type="text"
          />
          <FormError error={errors.Builderprogram} />
        </div>
        <div className="grid w-1/6 mt-2 justify-center items-center grid-cols-2 h-full gap-4">
          <div className="flex items-center h-5 gap-2">
            <label htmlFor="helper-radio">Yes</label>
            <input
              id="helper-radio"
              aria-describedby="helper-radio-text"
              type="radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <div className="flex items-center h-5 gap-2">
            <label htmlFor="helper-radio2">No</label>
            <input
              id="helper-radio2"
              aria-describedby="helper-radio-text"
              type="radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-row w-full items-start justify-center gap-2 ">
        <div className="grid w-full">
          <input
            name="proposal"
            className="rounded-md border-2 p-2"
            placeholder="Add the proposal here"
            value={values.proposal}
            onChange={handleChange}
            type="text"
            required
          />
          <FormError error={errors.proposal} />
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
  );
}

export default memo(Category2);
