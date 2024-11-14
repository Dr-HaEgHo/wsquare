import React from "react";

const points = [
  {
    id: "one",
    top: "Our team is made up of highly skilled professionals with deep expertise in modern technologies, UX/UI design, software development, and data analysis. ",
    bottom:
      "We excel at turning complex business ideas into tangible solutions, offering a seamless blend of creativity and technical excellence that sets us apart from other teams in the industry.",
  },
  {
    id: "two",
    top: "Over the years, we have delivered innovative business solutions across multiple industries, consistently aligning our efforts with our clients' business goals. ",
    bottom: "Our experience has given us a comprehensive understanding of the business problems and technical challenges that enterprises face today. This insight allows us to design and develop tailored solutions that address each client’s specific needs, ensuring a smooth path to success.",
  },
];

const WhoWeAre = () => {
  return (
    <div className="relative w-full z-10 pt-[64px] pb-[64px] px-[45px] bg-black">
      <div className="w-full max-w-[1300px] mx-auto flex flex-col items-center text-center">
        <h2 className="text-white text-5xl font-bold mb-16 text-center">
          About Us
        </h2>
        <p className="w-full text-left text-2xl text-white font-medium lh120 mb-10">
          We are a dedicated team specializing in end-to-end digital product
          development, including web, iOS, and Android development, website
          design, prototyping, technical writing, and business analytics. Our
          mission is to bring your ideas to life and deliver digital products
          seamlessly to your customers.
        </p>

        <div className="w-full flex flex-col gap-10 ">
          {points && points.map((point) => 
          <div key={point.id} className="w-full border-l-2 border-primary text-left pl-10"> 
            <h4 className="text-[34px] text-primary font-semibold lh120 ls1pz mb-6">{point.top}</h4>
            <p className="text-2xl lh120 ls1pz text-white font-normal">{point.bottom}</p>
          </div>)}
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
