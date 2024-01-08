import React from "react";
import { motion } from "framer-motion";

const ExperienceCard = ({
  title,
  company_image,
  company_name,
  date,
  skills,
  points,
}) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#e0e0e0] dark:bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center bg-white"
        src={company_image.src}
        alt={company_name}
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{title}</h4>
        <p className="font-bold text-2xl mt-1 uppercase">{company_name}</p>
        <div className="flex space-x-2 my-2">
          {skills.map((tech, i) => (
            <img
              className="h-10 w-10 hover:scale-150 transition-all duration-100 ease-in-out cursor-pointer"
              src={tech.src}
              alt={tech.name}
              key={i}
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-600 dark:text-gray-300">
          {date}
        </p>
        <ul
          typeof="circle"
          className="list-disc space-y-4 ml-5 pr-5 text-lg h-36 overflow-y-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#89cff0]/80"
        >
          {points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
