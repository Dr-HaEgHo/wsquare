import React from "react";
import ApproachCard from "./ApproachCard";

const points = [
  {
    id: "discovery",
    title: "Discovery and Understanding",
    description:
      "Our process begins with a deep dive into understanding your business, its objectives, and the challenges you face. Through detailed consultations and collaborative discussions, we identify your target audience, market positioning, and specific requirements. This foundational step ensures that we align our strategies with your vision and set the stage for a successful project.",
    image: require("@/assets/images/Discovery.svg"),
  },
  {
    id: "strategy",
    title: "Strategy and Planning",
    description:
      "Once we have a comprehensive understanding of your needs, we move on to the strategic planning phase. Our team formulates a detailed project plan, outlining the scope, timeline, and key milestones. We create a detailed roadmap that directs the entire development process, guaranteeing that every phase is carefully planned and carried out.",
    image: require("@/assets/images/Planning.svg"),
  },
  {
    id: "design",
    title: "Design and Prototyping",
    description:
      "In this phase, our creative designers bring your vision to life through intuitive and visually compelling designs. We create wireframes and prototypes to give you a tangible preview of the user experience. Your feedback is integral during this stage, as we refine and adjust the designs to ensure they align with your brand identity and user expectations.",
    image: require("@/assets/images/Design.svg"),
  },
  {
    id: "development",
    title: "Development and Integrations",
    description:
      "With the designs approved, our expert developers begin the coding process. Using the latest technologies and best practices, we build a comprehensive and scalable digital product. Our development team works closely with you to integrate all necessary functionalities. We ensure that the product is not only aesthetically pleasing but also performs seamlessly across all platforms.",
    image: require("@/assets/images/Development.svg"),
  },
  {
    id: "testing",
    title: "Testing and Quality Assurance",
    description:
      "Before the final launch, we conduct rigorous testing to ensure that your digital product is free from bugs, responsive, and fully functional. Our quality assurance team tests every aspect of the product, from usability to security, to guarantee a flawless user experience. We believe in delivering nothing short of excellence, and this step is crucial in upholding that standard.",
    image: require("@/assets/images/Testing.svg"),
  },
  {
    id: "launch",
    title: "Launch and Deployment",
    description:
      "Once the product has passed our stringent quality checks, we proceed to the launch phase. Our team ensures a smooth and successful deployment, whether it's a website, mobile app, or any other digital solution. We provide full support during this critical stage. We make sure that the product is live and accessible to your audience without any issues.",
    image: require("@/assets/images/Launch.svg"),
  },
  {
    id: "post-launch",
    title: "Post-Launch Support and Optimization",
    description:
      "Our commitment to your success doesn’t end at launch. We offer ongoing support and maintenance to keep your digital product running smoothly. Additionally, we monitor its performance and provide optimization services to enhance functionality, user engagement, and overall impact. Our goal is to ensure that your digital product continues to evolve with your business needs.",
    image: require("@/assets/images/Postlaunch.svg"),
  },
];

const OurApproach = () => {
  return (
    <div className="relative w-full z-10 pt-[64px] pb-[64px] px-5 lg:px-[45px] bg-textGrey">
      <div className="w-full max-w-[1300px] mx-auto flex flex-col items-center text-center">
        <h2 className="text-black text-5xl font-bold mb-4 text-center">
          Our Approach
        </h2>
        <p className="cont960 text-xl text-black font-medium lh120 mb-[26px]">
          At wsquare digital, we are dedicated to transforming your ideas into
          dynamic digital solutions that drive results. Our approach is
          comprehensive, collaborative, and client-focused. We ensured that
          every project we undertake is a step towards your business’s digital
          success.
        </p>

        <div className="w-full flex flex-col gap-[26px]">
          {points &&
            points.map((point, idx) => (
              <ApproachCard
                key={point.id}
                number={idx + 1}
                title={point.title}
                description={point.description}
                image={point.image}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default OurApproach;
