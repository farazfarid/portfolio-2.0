import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <Link href="#hero">
      <footer className="sticky bottom-24 w-full cursor-pointer">
        <div className="flex items-end justify-end mr-2">
          <ArrowUpCircleIcon className="animate-bounce w-10 h-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer" />
        </div>
      </footer>
    </Link>
  );
}

export default Footer;
