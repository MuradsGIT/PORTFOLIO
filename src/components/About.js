import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full  grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>

        <div className="max-w-[1000px] w-full   grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right font-bold text-4xl">
            <p>Hi. I'm Murad, nice to meet you. Go ahead, take a look around</p>
          </div>
          <div>
            <p>
              Self-taught programmer with a knack for coming up with elegant
              solutions in the shortest period possible. Looking to use my
              programming skills to assist others and build my dream projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
