import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    id: "james1",
    name: "James Brown",
    titles: "Co-Founder and CEO of Company",
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt sagittis eros. Quisque quis euismod lorem.",
  },
  {
    id: "james2",
    name: "James Brown",
    titles: "Co-Founder and CEO of Company",
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt sagittis eros. Quisque quis euismod lorem.",
  },
  {
    id: "james3",
    name: "James Brown",
    titles: "Co-Founder and CEO of Company",
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt sagittis eros. Quisque quis euismod lorem.",
  },
  {
    id: "james4",
    name: "James Brown",
    titles: "Co-Founder and CEO of Company",
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt sagittis eros. Quisque quis euismod lorem.",
  },
];

const Testimonials = () => {
  const [swiperInstance, setSwiperInstance] = useState<any>();

  return (
    <div className="relative w-full z-10 pt-[64px] pb-[64px] px-8 lg:px-[70px] bg-white">
      <div className="w-full max-w-[1300px] mx-auto flex flex-col items-center text-center">
        <h2 className="text-black text-5xl font-bold mb-16 text-center">
          Testimonial
        </h2>

        <div className="w-full flex flex-col gap-16 py-10">
          <div className="w-full mx-auto mb-10">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000 }}
              onSwiper={(swiper) => setSwiperInstance(swiper)}
              style={{
                width: "100%",
                margin: "auto",
                display: "flex",
                justifyContent: "center",
                gap: 20,
              }}
            >
              {testimonials &&
                testimonials.map((test) => (
                  <SwiperSlide key={test.id}>
                    <TestimonialCard 
                        name={test.name}
                        titles={test.titles}
                        testimony={test.testimony}
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>

          <div className="flex gap-4 lg:gap-10 justify-center">
            <button
              className="nav-btn hoverActive"
              onClick={() => swiperInstance?.slidePrev()}
            >
              <Image
                src={require("@/assets/icons/left-arrow.svg")}
                alt="previous"
              />
            </button>
            <button
              className="nav-btn hoverActive"
              onClick={() => swiperInstance?.slideNext()}
            >
              <Image
                src={require("@/assets/icons/right-arrow.svg")}
                alt="next"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
