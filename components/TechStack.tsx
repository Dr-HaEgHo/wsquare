import Image from "next/image";
import React from "react";

const images = [
  { id: "angular", image: require("@/assets/icons/angular.svg") },
  { id: "vue", image: require("@/assets/icons/vue.svg") },
  { id: "react", image: require("@/assets/icons/react.svg") },
  { id: "express", image: require("@/assets/icons/express.svg") },
  { id: "ruby", image: require("@/assets/icons/ruby.svg") },
  { id: "spring", image: require("@/assets/icons/spring.svg") },
  { id: "java", image: require("@/assets/icons/java.svg") },
  { id: "flutter", image: require("@/assets/icons/flutter.svg") },
  { id: "kotlin", image: require("@/assets/icons/kotlin.svg") },
  { id: "node", image: require("@/assets/icons/node.svg") },
  { id: "asp", image: require("@/assets/icons/asp.svg") },
  { id: "mongo", image: require("@/assets/icons/mongo.svg") },
  { id: "postgre", image: require("@/assets/icons/postgre.svg") },
  { id: "python", image: require("@/assets/icons/python.svg") },
  { id: "django", image: require("@/assets/icons/django.svg") },
  { id: "aws", image: require("@/assets/icons/aws.svg") },
  { id: "swift", image: require("@/assets/icons/swift.svg") },
  { id: "figma", image: require("@/assets/icons/figma.svg") },
  { id: "sketch", image: require("@/assets/icons/sketch.svg") },
  { id: "xd", image: require("@/assets/icons/xd.svg") },
  { id: "protopie", image: require("@/assets/icons/protopie.svg") },
  { id: "webflow", image: require("@/assets/icons/webflow.svg") },
  { id: "tensorflow", image: require("@/assets/icons/tensorflow.svg") },
  { id: "learn", image: require("@/assets/icons/learn.svg") },
  { id: "powerbi ", image: require("@/assets/icons/powerbi.svg") },
];

const TechStack = () => {
  return (
    <div id="#tech-stack" className="w-full bg-white px-[70px] py-[64px] relative z-10">
      <h2 className="text-black text-5xl font-bold mb-[68px] text-center">
        Our Tech Stack
      </h2>
      <div className="w-full max-w-[1310px] mx-auto pt-7 gap-10 flex items-center justify-center flex-wrap">
        {images &&
          images.length &&
          images.map((image) => <Image key={image.id} src={image.image} alt={image.id} />)}
      </div>
    </div>
  );
};

export default TechStack;
