import { home as Home } from "../pages/api/data";
import {homeArticle as articles } from "../pages/api/articledata"
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import { AiOutlineGithub } from "react-icons/ai";
import { useState } from "react";
import { log } from "console";
import { string } from "yup";

const BlogCard = () => {

  const [state,setState] = useState([1,0,0]);



  function handler(e:any) {

    let mainHd1  = document.getElementById('LatestProjectsMainHd')
    let mainHd2  = document.getElementById('articlesMainhd')
    let mainHd3  = document.getElementById('learnMainhd')


    let bar1  = document.getElementById('selection')


    //  selection bar
    e.currentTarget.id == "LatestProjectsMainHd" ?  bar1?.classList.add('selection-a'):null;

    if(e.currentTarget.id == "LatestProjectsMainHd") {
      mainHd1?.classList.remove("mainHdHeading1")
      mainHd2?.classList.remove("lt")
      mainHd3?.classList.remove("lt");

      mainHd1?.classList.add("lt-pre")
      mainHd2?.classList.add("mainHdHeading2")
      mainHd3?.classList.add("mainHdHeading3")


      bar1?.classList.remove('selection-b')
      bar1?.classList.remove('selection-c')
      bar1?.classList.add('selection-a')
    }
    if(e.currentTarget.id == "articlesMainhd"){
      mainHd1?.classList.remove("lt-pre");
      mainHd1?.classList.remove("lt");
      mainHd2?.classList.remove("mainHdHeading2");
      mainHd3?.classList.remove("lt");

      mainHd1?.classList.add("mainHdHeading1")
      mainHd2?.classList.add("lt")
      mainHd3?.classList.add("mainHdHeading3")


      bar1?.classList.remove('selection-a')
      bar1?.classList.remove('selection-c')
      bar1?.classList.add('selection-b')
    }
    if(e.currentTarget.id == "learnMainhd") {
      mainHd1?.classList.remove("lt-pre");

      mainHd2?.classList.remove("lt");
      mainHd3?.classList.remove("mainHdHeading3");

      mainHd1?.classList.add("mainHdHeading1")
      mainHd2?.classList.add("mainHdHeading2")
      mainHd3?.classList.add("lt")

      bar1?.classList.remove('selection-a')
      bar1?.classList.remove('selection-b')
      bar1?.classList.add('selection-c')
    }




  }

  return (
    <>
        <div className="main">
          <div className="mainHd">
            <button onClick={(e)=>{handler(e);setState([1.0,0])}} id="LatestProjectsMainHd" className="lt-pre">Latest Projects</button>
            <button onClick={(e)=>{handler(e);setState([0,1,0])}} id="articlesMainhd" className="mainHdHeading2">Articles</button>
            <button onClick={(e)=>{handler(e);setState([0,0,1])}} id="learnMainhd" className="mainHdHeading3">Trendings</button>
          </div>
          <div className="selection-bar-main">
              <div className="selection-bar" >
                <div className="selection-bar-a" id="selection"></div>
            </div>
          </div>
        </div>






        <section className="container-u mx-auto">
        {/* latest project */}
        <div
         style={{display: state[0] == 1 ? 'block': "none",margin:"0% 0% 0% 0%" }}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">

          {Home.map((card) => (
            <div key={card.id} className="cards rounded-lg shadow-lg">
              <div className="blogCard__top p-4">
                <img src={card.img} alt="img" className="blogCard__image" />
                <p className="blogCard__time p-5 ">{card.time}</p>
              </div>

              <div className="p-3 ">
                <h3 className="text-xl font-medium">{card.category}</h3>
                <h5 className="my-2 text-2xl font-semibold">{card.title}</h5>
                <p className="text-base">{card.text}</p>
              </div>
              <div className=" flex items-center justify-between p-5">
                <div key={card.id} className="flex items-center">
                  <FaTelegram className="blogCard__icon" />
                  <AiFillTwitterCircle className="blogCard__icon" />
                  <AiOutlineGithub className="blogCard__icon" />
                </div>
                <div>
                  <IoShareSocialSharp className="blogCard__icon blogCard__icon__share" />
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>

        {/* articles */}

          <div
         style={{display: state[1] == 1 ? 'block': "none",margin:"0% 0% 0% 0%" }}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">

          {articles.map((card) => (
            <div key={card.id} className="cards rounded-lg shadow-lg">
              <div className="blogCard__top p-4">
                <img src={card.img} alt="img" className="blogCard__image" />
                <p className="blogCard__time p-5 ">{card.title}</p>
              </div>

              <div className="p-3 ">
                {/* <h3 className="text-xl font-medium">{card.category}</h3> */}
                {/* <h5 className="my-2 text-2xl font-semibold">{card.title}</h5> */}
                <p className="text-base">{card.text}</p>
              </div>
              <div className=" flex items-center justify-between p-5">
                <div key={card.id} className="flex items-center">
                  <FaTelegram className="blogCard__icon" />
                  <AiFillTwitterCircle className="blogCard__icon" />
                  <AiOutlineGithub className="blogCard__icon" />
                </div>
                <div>
                  <IoShareSocialSharp className="blogCard__icon blogCard__icon__share" />
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>

        {/* learn */}

        <div
         style={{display: state[2] == 1 ? 'block': "none",margin:"0% 0% 0% 0%" }}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">

          {Home.map((card) => (
            <div key={card.id} className="cards rounded-lg shadow-lg">
              <div className="blogCard__top p-4">
                <img src={card.img} alt="img" className="blogCard__image" />
                <p className="blogCard__time p-5 ">{card.time}</p>
              </div>

              <div className="p-3 ">
                <h3 className="text-xl font-medium">{card.category}</h3>
                <h5 className="my-2 text-2xl font-semibold">{card.title}</h5>
                <p className="text-base">{card.text}</p>
              </div>
              <div className=" flex items-center justify-between p-5">
                <div key={card.id} className="flex items-center">
                  <FaTelegram className="blogCard__icon" />
                  <AiFillTwitterCircle className="blogCard__icon" />
                  <AiOutlineGithub className="blogCard__icon" />
                </div>
                <div>
                  <IoShareSocialSharp className="blogCard__icon blogCard__icon__share" />
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>



      </section>
    </>
  );
};

export default BlogCard;
