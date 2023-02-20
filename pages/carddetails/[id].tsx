import Image from "next/image";
import eth from "./https://imgur.com/undefined.png";
// import "./Card.css";

// import "../../styles/globals.css";

import { AiFillTwitterCircle } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import { AiOutlineGithub } from "react-icons/ai";

const Carddetails = () => {
  return (
    <>
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
        </div>
        {/* Latest News */}
        {/* <div className="near-content">
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
        </div> */}
        {/* Twitter card */}
        {/* <div className="column "> */}
        <div className="awesome-card">
          <div className="awesome-card-ite">
            <div className="awesome-card-header">
              <div className="related-projects-title">Twitter thread</div>
            </div>
          </div>
          <a
            className="twitter-timeline"
            href="https://twitter.com/gavofyork?ref_src=twsrc%5Etfw"
          >
            Tweets by gavofyork
          </a>{" "}
          <script async src="https://platform.twitter.com/widgets.js"></script>
        </div>
        {/* </div> */}
        {/*  */}
      </section>
    </>
  );
};

export default Carddetails;
