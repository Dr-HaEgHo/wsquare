import Image from "next/image";
import React from "react";

const links = [
  { id: 1, name: "Tech Stack", tagId: "#tech-stack" },
  { id: 2, name: "What We Do", tagId: "#what-we-do" },
  { id: 3, name: "Who We Are", tagId: "#who-we-are" },
  { id: 4, name: "Our Approach", tagId: "#our-approach" },
  { id: 5, name: "Contact Us", tagId: "#contact" },
]

const Navbar = () => {
  return (
    <div className="cont940 z-10 relative ">
      <div className="w-full border border-grey1 bg-transparent rounded-full py-3 flex items-center justify-between px-10 shadow-lg shadow-black25 ">
        <div className="w-[50px] h-[50px]">
          <Image src={require("@/assets/icons/Logo.png")} alt="site logo" />
        </div>
        <ul className="flex h-full items-center gap-8">
          {links &&
            links.map((link) => (
              <li key={link.id} className="h-full">
                <a href={`${link.tagId}`} className="">
                  <p className="text-lg text-textGrey font-medium hover:underline">
                    { link?.name}
                  </p>
                </a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
