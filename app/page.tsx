"use client";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar, { links } from "@/components/Navbar";
import OurApproach from "@/components/OurApproach";
import OurWork from "@/components/OurWork";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import WhatWeDo from "@/components/WhatWeDo";
import WhoWeAre from "@/components/WhoWeAre";
import { CloseCircle } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {

  const [ openDrawer, setOpenDrawer ] = useState<boolean>(false)


  return (
    <main className="w-full">
      <div className="transition duration-200 fixed z-[999] bottom-10 right-10 cursor-pointer transform hover:scale-[1.05] active:scale-100">
        <Image
          src={require("@/assets/icons/whatsapp.svg")}
          alt="whatsapp"
          className="shad"
        />
      </div>
      <div className={`${openDrawer ? '-top-[0%]' : '-top-[402px]'} transition duration-200 w-[90%] z-[999999] h-[400px] px-3 fixed left-1/2 transform -translate-x-1/2 flex flex-col gap-2 items-center justify-center border-[0.5px] border-grey1 border-t-0 rounded-br-3xl rounded-bl-3xl bg-black`}>
        { links && links.map((link) => (<Link href={`#${link.tagId}`} onClick={() => setOpenDrawer(false)} key={link.id} className="w-full text-black text-lg text-center py-2 rounded-full bg-primary cursor-pointer hover:opacity-90 active:opacity-80">{link.name}</Link>))}
        <button onClick={() => setOpenDrawer(false)} className="flex trnasition duration-200 mt-4 items-center justify-center hover:scale-[1.05] active:scale-100">
          <CloseCircle size="44" color="#595448" variant="Bold"/>
        </button>
      </div>
      <Navbar open={openDrawer} setOpen={setOpenDrawer} />
      <Hero />

      <section id="tech-stack">
        <TechStack />
      </section>

      <section id="what-we-do">
        <WhatWeDo />
      </section>

      <section id="our-approach">
        <OurApproach />
      </section>

      <section id="who-we-are">
        <WhoWeAre />
      </section>

      <section id="">
        <OurWork />
      </section>

      <section id="">
        <Testimonials />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <section id="">
        <Footer />
      </section>
    </main>
  );
}
