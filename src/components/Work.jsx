import React from "react";
import todo from "../assets/todo.jpg";
import crypto from "../assets/crypto.jpg";
import sudoku from "../assets/sudoku.png";

const Work = () => {
  return (
    <div
      name="work"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f] py-60 "
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Projects
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Project 1*/}

          <div
            style={{ backgroundImage: `url(${todo})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <div className="">
                <span className="text-2xl font-bold text-white tracking-wider">
                  Login: test@gmail.com
                  <br /> Password: ABC123.abc
                </span>
                <p>
                  After clicking on login wait few seconds for the server to
                  start
                </p>
              </div>

              <div className="pt-8 text-center">
                <a href="https://frontend-mzpp.onrender.com/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Project 2*/}
          <div
            style={{ backgroundImage: `url(${crypto})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <div className="">
                <span className="text-2xl font-bold text-white tracking-wider">
                  Crypto Tracker, that fetches live data from crypto api
                </span>
                <p>
                  After opening the page, wait few seconds to get the content
                </p>
              </div>

              <div className="pt-8 text-center">
                <a
                  href="https://muradsgit.github.io/CRYPTOAPI/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Project 3*/}
          <div
            style={{ backgroundImage: `url(${sudoku})` }}
            
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <div className="">
                <span className="text-2xl font-bold text-white tracking-wider">
                  Sudoku Solver{" "}
                </span>
                <p>
                  The website uses backtracking algorithm to find a solution to
                  any valid sudoku{" "}
                </p>
              </div>

              <div className="pt-8 text-center">
                <a href="https://muradsgit.github.io/SUDOKU/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
