import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import { FilledButton } from "./Button";

const Hero = () => {
  return (
    <div className="w-full bg-black relative pt-[34px]">
      <div className="hidden lg:block w-full absolute top-0 left-0 z-0 ">
        <Image
          src={require("@/assets/images/hero-bg.svg")}
          alt="hero background"
          className="w-full"
        />
      </div>

      <div className="block lg:hidden w-full absolute top-0 left-0 z-0 ">
        <Image
          src={require("@/assets/images/herobgmob.svg")}
          alt="hero background"
          className="w-full"
        />
      </div>

      <div className="cont960 max-lg:pt-[136px] lg:py-[60px] relative z-10">
        <div className="w-[90%] mx-auto lg:w-full text-center lg:py-[76px] flex flex-col items-center">
          <h1 className="text-textGrey font-bold text-[50px] lg:text-[80px] lh101">
            Powering the Technology Behind Your Business
          </h1>
          <p className="text-textGrey text-lg font-medium lh120 my-5 max-w-[840px]">
            At Wsquare Digital, we believe that every business, regardless of
            its size, stage, or industry, deserves a digital product that is
            perfectly tailored to its unique needs and goals.
          </p>
          <FilledButton
            text="Let's Chat"
            image={require("@/assets/icons/arrow-diag.svg")}
            btnClass="bg-primary hoverActive !text-center !rounded-full flex-row-reverse gap-3 px-8 py-4"
            pClass="font-medium text-xl"
          />
        </div>
      </div>

      <div className="w-full pt-[60px] lg:pt-[34px] pb-[64px] px-5 lg:px-10 relative z-10">
        <div className="w-full max-w-[1360px] mx-auto aspect-[2.72] min-h-[500px] bg-grey1"></div>
      </div>
    </div>
  );
};

export default Hero;
