'use client'
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import OurApproach from "@/components/OurApproach";
import OurWork from "@/components/OurWork";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import WhatWeDo from "@/components/WhatWeDo";
import WhoWeAre from "@/components/WhoWeAre";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      <Hero/>
      <div id="text-stack">
      </div>
      <TechStack/>
      <WhatWeDo/>
      <OurApproach/>
      <WhoWeAre/>
      <OurWork/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </main>
  );
}