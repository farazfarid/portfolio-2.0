import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "@/constants";

function WorkExperience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex overflow-hidden flex-col text-left max-w-full justify-evenly mx-auto items-center"
    >
      <h3 className="text-2xl uppercase text-gray-500 pb-2 tracking-[15px] sm:tracking-[20px] ml-5 mt-24">
        Experience
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#89cff0]/80 h-screen">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </div>
    </motion.div>
  );
}

export default WorkExperience;
