import React from "react";
import { project as Project } from "../pages/api/projectdata";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import { AiOutlineGithub } from "react-icons/ai";
import Link from "next/link";
const NFT = () => {
  return (
    <>
      <section className="container mx-auto">
        <Link href="carddetails/1">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-2 ">
            {Project.filter((item) => item.categories.includes("nft")).map(
              (card) => (
                <div key={card.id} className="cards rounded-lg shadow-lg">
                  <div className="blogCard__top p-4">
                    <img src={card.img} alt="img" className="blogCard__image" />
                  </div>
                  <div className="p-3 ">
                    <h3 className="text-xl font-medium">{card.author}</h3>
                    <h5 className="my-2 text-2xl font-semibold">
                      {card.title}
                    </h5>
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
        </Link>
        {/*  */}
        {/* <div className="item column col-4 col-lg-6 col-sm-12">
          <a href="#">
            <div className="near-item-header">
              <div className="tile">
                <div className="tile-icon">
                  <img
                    src="https://awesome-near.s3.amazonaws.com/near-wallet.jpg"
                    alt="NEAR Wallet"
                    loading="lazy"
                  />
                </div>
                <div className="tile-content">
                  <h2 className="tile-title">NEAR Wallet</h2>
                  <div className="tile-tags">
                    <span>Infrastructure</span>
                    <span>Wallets</span>
                  </div>
                </div>
              </div>
            </div>
            <br />

            <div className="tile">
              <h3 className="tile-subtitle">
                NEAR Wallet is a non-custodial, web-based wallet for the NEAR
                blockchain.{" "}
              </h3>
            </div>
            <br />
            <div className="near-item-footer">
              <div className="tile-social">
                <FaTelegram />
                <AiFillTwitterCircle />
                <AiOutlineGithub />
              </div>
              <div className="tile-series">
                <div className="label-series near">
                  <IoShareSocialSharp />
                </div>
              </div>
            </div>
          </a>
        </div> */}

        {/*  */}
      </section>
    </>
  );
};

export default NFT;
