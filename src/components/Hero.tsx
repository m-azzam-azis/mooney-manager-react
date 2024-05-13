import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col gap-1 group">
      <h1 className="font-bold flex gap-1 w-fit md:text-4xl [font-size:_clamp(2em,5vw,10em)]">
        Hi, you{" "}
        <span className="bg-yellow-100 rounded-full wave group-hover:infinite">
          👋
        </span>
      </h1>
      <div className="text-sm font-light text-neutral-500 md:text-base">
        Welcome to your financial manager app!
      </div>
    </section>
  );
};

export default Hero;
