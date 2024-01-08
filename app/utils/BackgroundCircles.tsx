import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 2.5, ease: "easeInOut" }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute mt-52 border border-gray-700 dark:border-white rounded-full h-[200px] w-[200px] animate-ping" />
      <div className="absolute mt-52 border border-gray-700 dark:border-white rounded-full h-[300px] w-[300px] animate-ping" />
      <div className="absolute mt-52 border border-gray-700 dark:border-white rounded-full h-[400px] w-[400px] animate-ping" />
      <div className="absolute mt-52 border border-cyan-700 dark:border-[#89cff0] opacity-20 rounded-full h-[650px] w-[650px] animate-pulse" />
      <div className="absolute mt-52 border border-gray-700 dark:border-white rounded-full h-[800px] w-[800px] animate-ping" />
    </motion.div>
  );
}

export default BackgroundCircles;
