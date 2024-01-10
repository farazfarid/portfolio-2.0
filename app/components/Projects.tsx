import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/constants";

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left max-w-full justify-center items-center z-0"
    >
      <h3 className="text-2xl uppercase text-gray-500 pb-2 tracking-[20px] ml-5 mt-24">
        Projects
      </h3>

      <div className="w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#89cff0]/80">
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 p-2 items-center justify-center pb-52 h-screen"
          >
            <motion.img
              className="p-2 md:w-[750px]"
              initial={{
                opacity: 0,
              }}
              transition={{ duration: 0.5 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              src={project.image.src}
              alt={project.name}
            />
            <div className="space-y-5 px-0 md:px-10 max-w-6xl">
              <h4 className="text-3xl font-semibold text-center">
                <span className="underline decoration-[#89cff0]/50">
                  Project {i + 1} of {projects.length}:
                </span>{" "}
                {project?.name}
              </h4>
              <p className="text-sm text-center">
                Live Version: {""}
                <Link href={project?.url}>
                  <span className="uppercase cursor-pointer text-[#89cff0]">
                    Here
                  </span>
                </Link>
              </p>
              <div className="flex flex-row items-center justify-center space-x-2">
                {project?.skills.map((technology, index) => (
                  <img
                    className="h-10 w-10"
                    key={index}
                    src={technology.src}
                    alt={technology.src.toString()}
                  />
                ))}
              </div>

              <p className="text-sm text-center md:text-left">
                {project?.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#00aeff]/10 dark:bg-[#89cff0]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
