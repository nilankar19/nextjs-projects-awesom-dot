import { useState } from "react";
import { Dialog } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";

function SuccessDialog({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
}) {  
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div className="font-medium bg-white h-96 w-full max-w-lg flex rounded-lg items-center justify-center flex-col">
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
          <Link
            href={"/"}
            className="bg-[#039855] text-center text-white rounded-md py-2 my-4 px-4"
          >
            Go to projects
          </Link>
        </div>
      </div>
    </Dialog>
  );
}

export default SuccessDialog;
