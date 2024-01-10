import React from "react";
import { motion } from "framer-motion";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Skill({ directionUp, name, level, image }) {
  return (
    <div className="group relative flex cursor-pointer hover:scale-150 transition-all duration-300 ease-in-out">
      <motion.img
        initial={{ y: directionUp ? 100 : -100, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        src={image.src}
        alt={name}
        className="md:rounded-lg dark:bg-gray-300 bg-white object-cover w-8 h-8 md:w-16 md:h-16 xl:w-20 xl:h-20 group-hover:backdrop-blur-xl transition duration-300 ease-in-out overflow-hidden"
      />
      {/* https://nextui.org/docs/components/circular-progress */}
      <div className="absolute opacity-0 group-hover:opacity-95 transition duration-300 ease-in-out dark:group-hover:bg-gray-500 group-hover:bg-white w-8 h-8 md:w-16 md:h-16 xl:w-20 xl:h-20 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <CircularProgressbar value={level} text={`${level}%`} />
        </div>
      </div>
    </div>
  );
}

export default Skill;
