import React from "react";

const FormError = ({ error }: any) => {
  return <p className="italic text-red-600">{error}</p>;
};

export default FormError;
