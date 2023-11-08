import React from "react";
import cv from "../../../assets/ValerianNewUpdatedCVRecent00.pdf";
import { motion } from "framer-motion";
import "./HeroStyle.css";
const Hero: React.FC = () => {
  return (
    <div
      id="home"
      className="home relative w-[100%]  dark:bg-[var(--accent)] h-[700px]  flex items-center justify-center"
    >
      <div className="box">
        <div className="boxHold">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="ball w-5 h-5 rounded-full bg-[var(--cyan)]" />
            <div className="line w-1 h-[280px] bg-gradient-to-b from-transparent to-[var(--cyan)]" />
          </div>

          <div className="textHoold">
            <h1 className="title dark:text-[#12C5E4]">
              Hi, I'm <br /> Valerian Pedro Adimike
            </h1>
            <p className="subText dark:text-[#12C5E4]">
              A Full-Stack(MERN-Stack) Engineer. <br /> A versatile, diligent,
              optimistic, innovative, team player, and highly motivated
              graduate.
            </p>
            <a href={cv} download="Valerian's resume">
              <button className="button w-44 h-12 bg-[var(--cyan)]  rounded-full text-white text-lg mt-5 cursor-pointer hover:bg-[var(--cyan)] transition duration-300 ease-in-out">
                Download CV
              </button>
            </a>
          </div>
        </div>

        <div className="imageHold animate-slide-in-from-right ">
          <img
            src="https://avatars.githubusercontent.com/u/99474625?v=4"
            alt="Val's Image"
            className="img w-[70%] h-[70%] object-contain rounded-full"
          />
        </div>
      </div>

      <div className="dots absolute h-[fit-content] p-[5px] flex items-start justify-start top-[70px] bottom-3 right-5 md:right-30 sm:bottom-0 sm:right-45 ">
        <div className="flex flex-col items-center gap-4 mt-[13px] mr-[8px]">
          <div className="dott w-3 h-3 bg-black rounded-full dark:bg-[white]" />
          <div className="dott w-3 h-3 bg-[var(--accent)] rounded-full  dark:bg-[white]" />
          <div className="dott w-3 h-3 bg-[var(--accent)] rounded-full  dark:bg-[white]" />
          <div className="dott w-3 h-3 bg-[var(--accent)] rounded-full  dark:bg-[white]" />
        </div>
        <div className="flex flex-col items-center gap-4 ">
          <div className="dott w-3 h-3 bg-[var(--accent)] rounded-full  dark:bg-[white]" />
          <div className="dott w-3 h-3 bg-[var(--accent)] rounded-full  dark:bg-[white]" />
          <div className="dott w-3 h-3 bg-[var(--accent)] rounded-full  dark:bg-[white]" />
          <div className="dott w-3 h-3 bg-[var(--accent)] rounded-full  dark:bg-[white]" />
        </div>
      </div>

      <div className="dot absolute h-[fit-content] p-[5px] flex items-start justify-start top-[420px] bottom-3 right-5 md:right-30 sm:bottom-0 sm:right-45">
        <div className="flex flex-col items-center gap-4 mr-[8px]">
          <div className="dott w-3 h-3 bg-[var(--accent)] rounded-full  dark:bg-[white]" />
          <div className="dott w-3 h-3 bg-[var(--accent)] rounded-full  dark:bg-[white]" />
          <div className="dott w-3 h-3 bg-[var(--accent)] rounded-full  dark:bg-[white]" />
          <div className="dott w-3 h-3 bg-[var(--accent)] rounded-full  dark:bg-[white]" />
        </div>
        <div className="flex flex-col items-center gap-4 mt-[13px] ">
          <div className="dott w-3 h-3 bg-[var(--accent)] rounded-full  dark:bg-[white]" />
          <div className="dott w-3 h-3 bg-[var(--accent)] rounded-full  dark:bg-[white]" />
          <div className="dott w-3 h-3 bg-[var(--accent)] rounded-full  dark:bg-[white]" />
          <div className="dott w-3 h-3 bg-[var(--accent)] rounded-full  dark:bg-[white]" />
        </div>
      </div>

      <div
        className="bounce absolute xs:bottom-10 
      lg:bottom-[90px] w-full flex justify-center 
      items-center"
      >
        <a href="#about">
          <div
            className="w-[35px] h-[64px] 
          rounded-3xl border-4 
          border-secondary 
          flex justify-center items-start p-2"
          >
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full 
              bg-[var(--cyan)] mb-1"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
