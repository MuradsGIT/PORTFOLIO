import React, { useEffect } from "react";


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

        <div className="max-w-[1000px] w-full   grid sm:grid-cols-2 gap-8 px-4 ">
          <div className="sm:text-right font-bold text-4xl">
            <p>Go ahead, take a look around</p>
          </div>
          <div className="">
            <p>
              I've build my skills through self-learning and hands-on projects.
              Now, I am eager to transition into my first professional role,
              with excitement to apply my knowledge to real-world challenges. I
              am seeking opportunities to contribute, learn, and grow within a team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
