import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="relative w-full py-16 px-6 lg:px-[70px]">
      <Image
        src={require("@/assets/images/FooterBg.png")}
        alt="footer background"
        className="absolute z-0 w-full h-full object-cover top-0 left-0"
      />
      <div className="py-8 w-full max-w-[1300px] mx-auto flex flex-col lg:flex-row items-start lg:items-start max-lg:gap-10 justify-between relative z-10">
        <div className="flex flex-col items-start justify-between gap-5">
          <p className="text-2xl text-black font-semibold lh151">Address</p>
          <p className="text-2xl text-black font-semibold lh151">
            Ashcroft road, Luton LU29AX
          </p>
        </div>

        <div className="flex flex-col items-start justify-between gap-5">
          <p className="text-2xl text-black font-semibold lh151">
            Contact us directly
          </p>
          <p className="text-2xl text-black font-semibold lh151">
            +447494954418
          </p>
          <p className="text-2xl text-black font-semibold lh151">
            team@wsquare.co.uk
          </p>
        </div>

        <div className="flex flex-col items-start justify-between gap-5">
          <p className="text-2xl text-black font-semibold lh151">Follow Us</p>
          <div className="flex items-center gap-[18px]">
            <a
              href="https://x.com/wsquaredigital"
              target="_blank"
              className="w-8 h-8 hoverActive"
            >
              <Image
                src={require("@/assets/icons/x.svg")}
                alt="twitter"
                className="w-full h-full object-cover"
              />
            </a>
            <a
              href="https://instagram.com/wsquaredigital"
              target="_blank"
              className="w-8 h-8 hoverActive"
            >
              <Image
                src={require("@/assets/icons/ig.svg")}
                alt="instagram"
                className="w-full h-full object-cover"
              />
            </a>
            <a
              href="https://linkedin.com/company/wsquaredigital"
              target="_blank"
              className="w-8 h-8 hoverActive"
            >
              <Image
                src={require("@/assets/icons/in.svg")}
                alt="linkedIn"
                className="w-full h-full object-cover"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
