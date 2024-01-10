import React from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ExperienceCard = ({
  title,
  company_image,
  company_name,
  date,
  skills,
  points,
}) => {
  return (
    <article className="flex flex-col rounded-lg items-center md:space-y-7 flex-shrink-0 w-11/12 h-[87%] md:h-auto md:w-[200px] xl:w-[500px] snap-center bg-[#e0e0e0] dark:bg-[#292929] p-2 md:p-10 hover:opacity-100 lg:opacity-40 transition-opacity duration-200 ease-in-out overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-28 h-28 rounded-full object-cover lg:w-40 lg:h-40 xl:w-44 xl:h-44 p-5"
        src={company_image.src}
        alt={company_name}
      />

      <div className="px-0 md:px-10 break-all overflow-y-hidden">
        <h4
          style={{ wordBreak: "break-word", whiteSpace: "pre-line" }}
          className="2xs:text-lg text-3xl md:text-4xl font-light"
        >
          {title}
        </h4>
        <p className="2xs:text-sm font-bold text-2xl mt-1 uppercase">
          {company_name}
        </p>
        <div className="flex flex-wrap my-2">
          {skills.map((tech, i) => (
            <img
              className="h-10 w-10 hover:scale-150 transition-all duration-100 ease-in-out p-1"
              src={tech.src}
              alt={tech.name}
              key={i}
            />
          ))}
        </div>
        <p className="text-xs md:text-sm uppercase py-5 text-gray-600 dark:text-gray-300">
          {date}
        </p>
        <div className="bg-[#f7f7f7] dark:bg-[#3f3f3f] rounded-lg p-2">
          <Carousel
            showThumbs={false}
            autoPlay
            interval={3000}
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            showArrows={false}
            emulateTouch
          >
            {points.map((point, i) => (
              <p
                style={{ wordBreak: "break-word", whiteSpace: "pre-line" }}
                className="text-left text-xs md:text-sm"
                key={i}
              >
                {point} →
              </p>
            ))}
          </Carousel>
        </div>
      </div>
    </article>
  );
};

export default ExperienceCard;
