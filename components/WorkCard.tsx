import Image from "next/image";
import React, { FC } from "react";
import { FilledButton } from "./Button";
import { useRouter } from "next/navigation";

interface workCardProps {
  number: number;
  title: string;
  image: string;
  description: string;
  stack: string[];
  link?: string
}

const WorkCard: FC<workCardProps> = ({
  title,
  image,
  description,
  number,
  stack,
  link
}) => {

    const router = useRouter()

  return (
    <div
      style={{ flexDirection: number % 2 ? "row-reverse" : "row" }}
      className="w-full flex items-center gap-[60px]"
    >
      <div className="w-[48%] parent max-h-500 overflow-hidden relative">
        <div className="child transition duration-300 absolute w-full h-full bg-black50 flex items-center justify-center opacity-0">
          <FilledButton
            text="View Project"
            image={require("@/assets/icons/arrow-diag.svg")}
            btnClass="bg-primary !text-center !rounded-full flex-row-reverse gap-3 px-8 py-4"
            pClass="font-medium text-xl"
            cta={() => { link && router.push(link)}}
          />
        </div>
        <Image src={image} alt="image" className="w-full" />
      </div>
      <div className="w-[63%]">
        <h3 className="text-4xl text-black font-medium lh120  flex gap-4 items-center">
          {title}
        </h3>
        <div className="w-full flex items-center gap-6 my-6">
            {
                stack && stack.map((text, idx) => (<p key={idx} className="text-base text-black font-medium ls5pz">{text}</p>))
            }
        </div>
        <p className="text-lg font-normal text-black lh120 ls1pz text-left">
          {description}
        </p>
      </div>
    </div>
  );
};

export default WorkCard;
