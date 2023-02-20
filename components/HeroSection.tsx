
import React from "react";
import linepng1 from "../public/images/Linepattern2.png"
import linepng2 from "../public/images/Linepattern3.png"
import Image from 'next/image';


function HeroSection() {
  return (
    <>
      <div className="conatainer ">
          <div className="linerpng">
            {/* <div></div> */}
          <Image
            className="linepatterna"
            width={170}
            height={10}
            src={linepng1}
            alt="img"
          />

          <Image
            className="linepatternb"
            width={170}
            height={220}
            src={linepng2}
            alt="imgs"
          />



        <section className="s-c contributor-section  secSpacer ">
          <div className="card-box">

            <h1 className="card-box-main text-bold text-center text-6xl text-white ">
              <span className="card-heading">Curated for the</span> <br />
              <span className="heading card-heading-sub">Contributors.</span>
            </h1>
            <p className="mpara ">
              <span className="mpara-heading">
              Awesome dot is a company that curates the best resources, projects
              and
              <br /> learning in the polkadot ecosystem.
              </span>
            </p>
            {/* <input
              type="search"
              placeholder="Find our Projects"
              className="mr-1
           mb-4 w-full rounded border-[#D0D5DD] py-2.5 px-2 text-[#667085] focus:outline-none sm:mr-3 sm:w-80 lg:mb-0"
            /> */}
            <div className="search-section">
            <button className="search-section-sub-a">

              Search Projects
            </button>
            <div className="cursor-pointer rounded-md text-sm font-medium text-white"><a href="/explore"><button className={`${"search-section-sub-b"}`}>Explore All Projects</button></a></div>
            </div>
          </div>
        </section>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
