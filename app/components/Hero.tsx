"use client";

import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "../utils/BackgroundCircles";
import AnimatedBorderImage from "../utils/AnimatedBorderImage";
import Link from "next/link";

function Hero() {
  const [text] = useTypewriter({
    words: [
      `Hi, My name is Fabian Faraz Farid`,
      "Full-Stack Developer",
      "AI-Engineer",
      "Business Advisor",
      "Game Developer",
      "Marketing Expert",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <AnimatedBorderImage
        src="/heroImage.webp"
        alt="Faraz's Profile Picture"
      />
      <div className="z-20">
        <h2 className="text-xs md:text-md uppercase text-gray-500 pb-2 tracking-[5px] md:tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-xl md:text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#89cff0" />
        </h1>

        <div className="pt-5 flex flex-col md:flex-row justify-center items-center">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
