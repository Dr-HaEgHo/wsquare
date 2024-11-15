import React from "react";
import { FilledButton } from "./Button";
import WWDCards from "./WWDCards";
import { useRouter } from "next/navigation";


const cards = [
    {id: "webdev", title: "Website Development", icon: require('@/assets/icons/webdev.svg'), description:"We specialize in creating functional, responsive, and visually appealing websites tailored to your business needs. By developing a professional web presence, we help you reach a broader audience, improve customer engagement, and enhance your brand’s credibility."},
    {id: "mobdev", title: "iOS and Android Development", icon: require('@/assets/icons/mobdev.svg'), description:"We build custom mobile applications for both iOS and Android platforms, ensuring seamless user experiences across devices. With mobile apps, your business can connect with customers on the go, boost brand loyalty, and open up new revenue streams."},
    {id: "weblanding", title: "Website and Landing Pages", icon: require('@/assets/icons/weblanding.svg'), description:"We design and develop optimized websites and landing pages that are both visually striking and highly effective in converting visitors into customers. By creating tailored pages for your marketing campaigns, we help you drive more traffic, generate leads, and increase conversions."},
    {id: "highFid", title: "High Fidelity Prototype", icon: require('@/assets/icons/prototype.svg'), description:"We craft high-fidelity prototypes that provide a realistic view of your product before development begins. This allows you to visualize the final product, make informed decisions, and reduce costly changes during development. "},
    {id: "techWriting", title: "Technical Writing", icon: require('@/assets/icons/techwriting.svg'), description:"Our technical writing services ensure that complex information is communicated clearly and effectively through manuals, documentation, and guides. This enhances user understanding, reduces support costs, and ensures compliance with industry standards."},
    {id: "bizlytics", title: "Business Analytics", icon: require('@/assets/icons/bizanalytics.svg'), description:"We offer business analytics services to help you make data-driven decisions by analyzing your company’s data. With insights from our analytics, you can optimize operations, identify growth opportunities, and enhance overall business performance."},
]

const WhatWeDo = () => {

  const router  = useRouter();

  return (
    <div className="relative w-full z-10 pt-[64px] pb-[64px] px-6 lg:px-[45px] bg-black">
      <div className="w-full max-w-[1350px] mx-auto flex flex-col items-center text-center">
        <h2 className="text-white text-5xl font-bold mb-4 text-center">
          What We Do
        </h2>
        <p className="cont960 text-xl text-white font-medium lh120 mb-16">Our team of skilled professionals and creative minds is committed to transforming your ideas into a live, fully functional digital product that not only meets but exceeds your expectations.</p>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-2 gap-12 mb-[64px]">
            {
                cards && cards.map((card) => (
                    <WWDCards 
                        key={card.id}
                        title={card.title}
                        icon={card.icon}
                        description={card.description}
                    /> 
                ))
            }
        </div>
        <FilledButton
            text="Contact"
            image={require("@/assets/icons/arrow-diag.svg")}
            btnClass="bg-primary hoverActive !text-center !rounded-full flex-row-reverse gap-3 px-8 py-4"
            pClass="font-medium text-xl"
            cta={() => router.push('#contact')}
          />
        
      </div>
    </div>
  );
};

export default WhatWeDo;
