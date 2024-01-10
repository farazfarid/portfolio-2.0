"use client";

import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Button from "../utils/Theme";
import Link from "next/link";
import { socials } from "@/constants";

function Header() {
  return (
    <header className="sticky top-0 flex items-start justify-between p-5 max-w-7xl mx-auto z-20 xl:items-center overflow-hidden">
      <Link href="#hero">
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 0.2 }}
          className="flex flex-row items-center"
        >
          <img
            className="logo w-12 object-contain"
            src="./logo.svg"
            alt="logo"
          />
        </motion.div>
      </Link>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 0.2 }}
        className="flex flex-row items-center"
      >
        {socials.map((social) => (
          <SocialIcon
            className="hover:scale-125 transition-all duration-500 ease-in-out"
            key={social.name}
            url={social.url}
            network={social.url === "#contact" ? "email" : ""}
            fgColor="gray"
            bgColor="transparent"
          />
        ))}
        <Button />
      </motion.div>
    </header>
  );
}

export default Header;
