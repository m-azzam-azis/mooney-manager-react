import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="flex items-center self-stretch justify-between p-4 bg-white border-b-2 sm:px-10 md:px-6 md:mx-10 md:mt-4 md:rounded-2xl ring-shadow">
      <a href="/">
        <div className="p-2 text-base font-extrabold text-black duration-200 rounded-md hover:backdrop-brightness-200 bg-main backdrop-blur-3xl hover:bg-black hover:text-main">
          Mooney Manager
        </div>
      </a>
      <div className="flex gap-4">
        <button
          className="p-2 font-bold rounded-lg bg-neutral-200 md:mr-8"
          id="reset-history"
        >
          Reset History
        </button>
        <a href="/" className="duration-200 hover:-translate-x-1">
          {/* <img className="size-[2em] border-gray-300 border rounded-full sm:size-[2.5em]" src="images/honey-icon.png"
          alt="logo"> */}
          <Image
            className="size-[2em] border-gray-300 border rounded-full sm:size-[2.5em]"
            src="/icons/honey-icon.png"
            alt="logo"
            height={100}
            width={100}
          />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
