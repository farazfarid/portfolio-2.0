import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { skills } from "@/constants";

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left max-w-[2000px] xl:px-10 min-h-screen justify-center md:space-y-10 space-y-5 mx-auto items-center overflow-hidden"
    >
      <h3 className="text-2xl uppercase text-gray-500 pb-2 tracking-[20px] ml-5 mb-10">
        Skills
      </h3>

      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: [0, 0.1, 0.1, 0.1, 1],
        }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="text-gray-500 text-xs uppercase tracking-[3px] mb-2"
      >
        <span className="text-[#89cff0] hidden md:inline-block">
          Hover over
        </span>{" "}
        <span className="text-[#89cff0] md:hidden">Click on</span> a skill for
        current proficiency
      </motion.h3>

      <div className="grid grid-cols-5 md:grid-cols-9 gap-5">
        {skills?.slice(0, skills.length / 2).map((skill, index) => (
          <Skill key={index} directionUp={false} {...skill} />
        ))}

        {skills?.slice(skills.length / 2, skills.length).map((skill, index) => (
          <Skill key={index} {...skill} directionUp={true} />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
