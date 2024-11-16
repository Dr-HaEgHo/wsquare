import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";

export const links = [
  { id: 1, name: "Tech Stack", tagId: "tech-stack" },
  { id: 2, name: "What We Do", tagId: "what-we-do" },
  { id: 3, name: "Who We Are", tagId: "who-we-are" },
  { id: 4, name: "Our Approach", tagId: "our-approach" },
  { id: 5, name: "Contact Us", tagId: "contact" },
]


interface props {
  open: boolean;
  setOpen: Function;
}

const Navbar:FC<props> = ({
  open,
  setOpen
}) => {

   
  return (
    <div className="cont940 z-[99999] absolute top-10 left-1/2 transform -translate-x-1/2">
     
      <div className="w-full border border-grey1 bg-transparent rounded-full py-3 flex items-center justify-between px-5 lg:px-10 shadow-lg shadow-black25 ">
        <a href="/" className="w-[50px] h-[50px]">
          <Image src={require("@/assets/icons/Logo.png")} alt="site logo" />
        </a>
        <ul className="hidden lg:flex h-full items-center gap-8">
          {links &&
            links.map((link) => (
              <li key={link.id} className="h-full">
                <Link href={`#${link.tagId}`}  className="">
                  <p className="text-lg cursor-pointer text-textGrey font-medium hover:underline">
                    { link?.name}
                  </p> 
                </Link>
              </li>
            ))}
        </ul>
        <div onClick={() => setOpen(true)} className="lg:hidden">
          <Image
            src={require('@/assets/icons/menu.svg')}
            alt="menu"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
