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
      <div className="w-[57%] mx-auto flex items-center gap-10">
        <div className="text-left w-[79%]">
          <h4 className="text-2xl text-black font-bold lh150">{name}</h4>
          <p className="text-base text-black font-normal mt-1 mb-6">{titles}</p>
          <p className="text-2xl text-black font-medium">{testimony}</p>
        </div>
        <div className="w-[18%]">
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
