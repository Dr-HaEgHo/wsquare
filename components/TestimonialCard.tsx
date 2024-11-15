import Image from "next/image";
import React, { FC } from "react";

interface props {
  name: string;
  titles: string;
  testimony: string;
}

const TestimonialCard: FC<props> = ({ name, titles, testimony }) => {
  return (
    <div className="w-full flex items-center gap-10">
      <div className="w-full lg:w-[57%] max-lg:justify-center flex-col lg:flex-row mx-auto flex items-center gap-10">
        <div className="text-left w-full lg:w-[79%]">
          <h4 className="text-2xl text-black max-lg:text-center capitalize font-bold lh150">{name}</h4>
          <p className="text-base text-black font-normal max-lg:text-center mt-1 mb-6">{titles}</p>
          <p className="text-2xl text-black font-medium max-lg:text-center">{testimony}</p>
        </div>
        <div className="w-1/2 max-w-[118px] md:w-[18%]">
            <Image 
                src={require('@/assets/images/quotes.png')}
                alt="quotes"
                className="w-full"
            />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
