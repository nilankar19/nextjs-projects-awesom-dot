import React from "react";
import { project as Project } from "../pages/api/projectdata";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import { AiOutlineGithub } from "react-icons/ai";
const Octopus = () => {
  return (
    <>
      <section className="container mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-2 ">
          {Project.filter((item) => item.categories.includes("octopus")).map(
            (card) => (
              <div key={card.id} className="cards rounded-lg shadow-lg">
                <div className="blogCard__top p-4">
                  <img src={card.img} alt="img" className="blogCard__image" />
                </div>

                <div className="p-3 ">
                  <h3 className="text-xl font-medium">{card.author}</h3>
                  <h5 className="my-2 text-2xl font-semibold">{card.title}</h5>
                  <p className="text-base">{card.description}</p>
                </div>
                <div className=" flex items-center justify-between p-5">
                  <div className="flex items-center">
                    <FaTelegram className="blogCard__icon" />
                    <AiFillTwitterCircle className="blogCard__icon" />
                    <AiOutlineGithub className="blogCard__icon" />
                  </div>
                  <div>
                    <IoShareSocialSharp className="blogCard__icon blogCard__icon__share" />
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </>
  );
};

export default Octopus;
