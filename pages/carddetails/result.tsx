import { AiFillTwitterCircle } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import { AiOutlineGithub } from "react-icons/ai";
import TweetEmbed from "react-tweet-embed";
import { useEffect, useState } from "react";
import Script from "next/script";


const Result = () => {



  const [libExist, setlibExist] = useState(false);

  const s = () => {

         //first update line 149 as your requirenment
        //pros:- this /learn page render fast
       //cons:- after loading script ,it renders whole twitter data at once so we have to wait minimum 2s
      //future implementation ?? instead of waiting to render twitter data we can show loding gif


      useEffect(()=>{
        const script = document.createElement('script');
        script.src="https://platform.twitter.com/widgets.js"
        script.async = true
        script.onload = () =>{
          setlibExist(true)
        }
        document.body.appendChild(script)
      },[])
  };
  s()






  return (
    <>
      <section className="container mx-auto">
        {/* new card detais */}
        <div className="flex  justify-center mt-5">
          <div className="text-center text-[#101828] text-lg">
            <h1>
              Bitcoin: Economics, Technology, and
              <br /> Governance
            </h1>
            <p className="text-[#667085] text-center  ">
              The scarcity of paper money is caused and ensured by unequal
              access to technology, and the scarcity of book money, in its turn,
              is regulated by legal rules.
            </p>
          </div>
        </div>

        <div className="qwert border-2 p-5 w-200 mt-5">
          <img
            className=" w-full h-80 object-cover rounded-md "
            src="https://imgur.com/BvW2xD1.png"
            alt="apple watch photo"
          />
        </div>

        <div className=" text-[#101828]">
          <h1>Introduction</h1>
          <p className="text-[#667085] ">
            The scarcity of paper money is caused and ensured by unequal access
            to technology, and the scarcity of book money, in its turn, is
            regulated by legal rules.
          </p>
        </div>
      </section>
      /*
      <section className="container mx-auto">
        {/* new card detais */}
        <div className="section-main section-project">
          <div className="container grid-xl">
            <div className="columns">
              <div className="hero-container column col-md-12">
                <div className="awesome-hero">
                  <div className="hero-img">
                    <img
                      src="https://imgur.com/HAP5qBg.png"
                      alt="img"
                      width={180}
                      height={180}
                      className="rounded"
                    />
                  </div>
                  <div className="hero-content">
                    <h1 className="hero-title">Project Name</h1>
                    <h2 className="hero-subtitle">Project categories</h2>
                    <div className="hero-tags">
                      <a href="" className="tag-item awesome-tag">
                        <span>Tag1</span>
                      </a>
                      <a href="" className="tag-item awesome-tag">
                        <span>Tag2</span>
                      </a>
                      <a href="" className="tag-item awesome-tag">
                        <span>Tag3</span>
                      </a>
                      <a href="" className="tag-item awesome-tag">
                        <span>Tag4</span>
                      </a>
                    </div>
                  </div>
                  <div className="left-side">
                    <div className="hero-links">
                      <a href="" className="tag-item awesome-tag">
                        Website
                      </a>
                      <a href="" className="tag-item awesome-tag">
                        <span>Share</span>
                      </a>
                    </div>
                    <div className=" flex  p-5">
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
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div class="main-div">
          <div class="div-A">IMG , tags, etc..</div>
          <div class="div-B">Share btns , social icons</div>
        </div> */}

        {/* About section */}
        <div className="columns">
          <div className="content-container column col-12">
            <div
              className="columns content-container"
              id="stats-columns-container-sidebar"
            >
              <div className="column col-lg-12 col-8">
                <div className="near-content">
                  <div className="content-widget markdown">
                    <h2 className="content-title">About Project</h2>
                    <p className="text-assistive">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ex, quasi. Quos ipsam qui non possimus optio eveniet
                      aperiam quae consequatur nemo ipsa, adipisci tenetur?
                      Provident ea perferendis praesentium quasi quae.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nobis, possimus repudiandae. Repellendus, amet odio facere
                      quam praesentium illum nulla magnam ut dolorum pariatur.
                      Earum ratione amet illo error quae pariatur vitae veniam
                      magni soluta delectus distinctio atque repellendus minima
                      consequuntur consequatur harum, dolores culpa dignissimos
                      aliquid quas eveniet quod a?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="awesome-cards">
              <div className="awesome-card-item">
                <div className="awesome-card-header">
                  <div className="related-projects-title">Twitters thread</div>
                </div>
                <div className="awesome-card-body">


                  <div className="loading-icon" id="loadingIcon" style={{display: libExist ? "none": "block"}}> </div>
                  {/* <a href="" className="near-item near-item-list"> */}
                  <div className="near-item-header">
                    <div className="tile">

                    <a
                    className="twitter-timeline"
                      data-width="420"
                      data-height="720"
                      data-theme="dark"
                      href={libExist?"https://twitter.com/gavofyork?ref_src=twsrc%5Etfw" : ""}>
                      {/* Tweets by gavofyork*/ }
                      {/* {libExist?"":"loading...."} */}

                      </a>
                      {/* <script async src="https://platform.twitter.com/widgets.js"></script> */}
                    </div >
                    <p className="text-assistive" style={{display: libExist ? "none":"block"}}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ex, quasi. Quos ipsam qui non possimus optio eveniet
                      aperiam quae consequatur nemo ipsa, adipisci tenetur?
                      Provident ea perferendis praesentium quasi quae.
                    </p>
                    <p style={{display: libExist ? "none":"block"}}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nobis, possimus repudiandae. Repellendus, amet odio facere
                      quam praesentium illum nulla magnam ut dolorum pariatur.
                      Earum ratione amet illo error quae pariatur vitae veniam
                      magni soluta delectus distinctio atque repellendus minima
                      consequuntur consequatur harum, dolores culpa dignissimos
                      aliquid quas eveniet quod a?
                    </p>
                  </div>
                  {/* </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Latest News */}
        <div className="near-content">
          <div className="content-widget article-widget">
            <h2 className="content-title">Latest news</h2>
            <div className="articles-container">
              <a href="" className="article-item">
                <img
                  src="https://imgur.com/HAP5qBg.png"
                  alt="img"
                  width={48}
                  height={40}
                  className="rounded"
                  loading="lazy"
                />

                <div className="article-detail">
                  <h3 className="article-title">
                    Luna classic price pridiction
                  </h3>
                  <div className="article-info">12th feb, 2023</div>
                </div>
              </a>
              <a href="" className="article-item">
                <img
                  src="https://imgur.com/HAP5qBg.png"
                  alt="img"
                  width={48}
                  height={40}
                  className="rounded"
                  loading="lazy"
                />

                <div className="article-detail">
                  <h3 className="article-title">
                    Luna classic price pridiction
                  </h3>
                  <div className="article-info">12th feb, 2023</div>
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* Twitter card */}

        {/*  */}
      </section>
      */
    </>
  );
};

export default Result;
