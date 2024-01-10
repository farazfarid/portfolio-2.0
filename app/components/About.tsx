import React from "react";
import { motion } from "framer-motion";
import { about } from "@/constants";

function About() {
  return (
    <div className="h-screen md:space-y-10 flex flex-col items-center justify-center max-w-7xl mx-auto overflow-hidden">
      <h3 className="text-2xl uppercase text-gray-500 pb-2 tracking-[20px] ml-5 mt-2">
        About
      </h3>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col md:flex-row justify-center items-center"
      >
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          src="./profilePic.webp"
          className="w-32 h-32 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px] p-5"
        />
        <p className="max-w-xl p-2 text-sm 2xs:text-xs md:text-sm text-justify md:text-left whitespace-pre-line mb-10">
          {about[0].about}
        </p>
      </motion.div>
    </div>
  );
}

export default About;
