import Image from "next/image";
import {homeArticle as CardList}  from "./api/articledata";
import avatar from "../public/images/download.png";

export default function ArticlesPage() {
  return ( 
    <>
      <section className="container mx-auto ">
        <div className="mainHd text-center">
          <h3>Articles</h3>
          <p className="mb-10 font-[inter] text-lg font-normal text-[#667085]">
            The latest articles written by our top writters.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
          {CardList.map((card) => (
            <div key={card.id} className="card rounded-lg shadow-lg">
              <div className="p-3  rounded-5">
                <img src={card.img} alt="" />

                <div className="headingtitle">
                  <h6>{card.title}</h6>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                <p className="text-[#667085 text-base">{card.text}</p>
              </div>
              <div className="flex items-center space-x-4">
                <Image
                  className="h-10 w-10 rounded-full"
                  src={avatar}
                  alt="author profile"
                />
                <div className="font-medium dark:text-white">
                  <div className="protitle">
                    <h6>Olivia Rhye</h6>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    22 Dec 2022
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
