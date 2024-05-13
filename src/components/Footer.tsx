import React from "react";
import Image from "next/image";
import ghLogo from "@/assets/github-mark.svg";

const Footer = () => {
  return (
    <footer className="flex justify-center gap-2 py-2.5 text-sm md:text-base bg-neutral-900 text-white w-full">
      Copyright © {new Date().getFullYear()} Azzam
      <a href="https://github.com/m-azzam-azis/" target="_blank">
        <Image
          className="hover:rotate-[360deg] duration-500"
          alt="gh logo"
          src={ghLogo}
          height={20}
          width={20}
        />
      </a>
    </footer>
  );
};

export default Footer;
