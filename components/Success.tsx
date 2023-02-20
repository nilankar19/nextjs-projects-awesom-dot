//Success.js
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Success() {
  return (
    <div className="font-medium h-96 w-full max-w-lg flex border  items-center justify-center flex-col">
     <div className="flex bg-[rgb(29,41,57)] rounded-lg  flex-col justify-center items-center w-full h-1/2">
      <Image
        src={"/images/succesform.svg"}
        width={100}
        height={100}
        alt={"successimage"}
      />
      </div>
      <div className="flex bg-white w-full h-1/2 flex-col py-7 text-center gap-10">
        <h1 className="text-[#039855] text-3xl ">Congratulations !</h1>
        <p className="text-[#039855]">
          Your project has been successfully published.
        </p>
      </div>
      <Link href={'/'} className="bg-[#039855] text-center text-white rounded-md py-2 my-4 px-4">
        Go to projects
      </Link>
    </div>
  );
}

export default Success;
