// Basic.js
import React, { memo, useContext } from "react";
import { FormContext } from "../pages/explore";
import { BsFillCloudUploadFill } from "react-icons/bs";
import FormError from "./FormError";

function BasicInformation() {
  const { values, errors, handleChange, handleSubmit, handleReset } =
    useContext<any>(FormContext);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center w-full gap-4"
    >
      <div className="flex w-full justify-center gap-8 items-start">
        <div className="grid w-full">
          <input
            name="name"
            className="rounded-md border-2 p-2"
            placeholder="Name of the project *"
            onChange={handleChange}
            value={values.name}
            type={"text"}
            required
          />
          <FormError error={errors.name} />
        </div>
        <div className="grid w-full ">
          <input
            name="websitelink"
            className="rounded-md border-2 p-2"
            placeholder="Website link *"
            onChange={handleChange}
            value={values.websitelink}
            type={"text"}
            required
          />
          <FormError error={errors.websitelink} />
        </div>
      </div>
      <div className="flex w-full justify-center items-start  gap-2">
        <div className="grid w-full">
          <input
            name="logo"
            className="rounded-md border-2 p-2"
            placeholder="Upload the logo here"
            onChange={handleChange}
            type={"text"}
            value={values.logo}
            required
          />
          <FormError error={errors.logo} />
        </div>
        <button
          type="button"
          className="rounded-md bg-[#D9D9D9] flex justify-center items-center w-2/6 py-2.5 h-full gap-2 text-[#667085]"
        >
          <BsFillCloudUploadFill /> <span>Upload Image</span>
        </button>
      </div>
      <div className="grid w-full items-start ">
        <input
          name="category"
          className="rounded-md border-2 p-2"
          onChange={handleChange}
          placeholder="Add the categories that best describe your project"
          value={values.category}
          type={"text"}
          required
        />
        <label htmlFor="category" className="my-2 text-gray-400 text-sm">
          Just type the word to search among numerous categories and hit enter
          to add them
        </label>
        <FormError error={errors.category} />
      </div>
      <div className="flex flex-row w-full items-start justify-center gap-2 ">
        <div className="grid w-full">
          <input
            name="document"
            className="rounded-md border-2 p-2"
            onChange={handleChange}
            placeholder="Upload the documents related to project"
            value={values.document}
            type={"text"}
            required
          />
          <FormError error={errors.document} />
        </div>
        <button
          type="button"
          className="rounded-md bg-[#D9D9D9] flex justify-center items-center w-2/6 py-2.5 gap-2 text-[#667085]"
        >
          <BsFillCloudUploadFill /> <span>Upload Image</span>
        </button>
      </div>
      <div className="grid grid-cols-2 justify-center items-center gap-4 ">
        <button
          type="button"
          className="rounded-md bg-white text-gray-400 border-gray-400 border w-full font-medium px-2 my-2 p-2 disabled:bg-white"
          onClick={() => handleReset()}
        >
          Clear Form
        </button>
        <button
          type="submit"
          className="rounded-md bg-[#039855] w-full font-medium text-white my-2 p-2 disabled:bg-slate-400"
        >
          Next
        </button>
      </div>
    </form>
  );
}

export default memo(BasicInformation);
