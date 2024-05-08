/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { FadeInBottom } from "./FadeInBottom";
import { FaGithub } from "react-icons/fa";
import { BsMicrosoftTeams } from "react-icons/bs";
import Jump from "./Jump";

const Hero = () => {
  return (
    <div
      id="HERO"
      className="relative w-screen h-screen bg-connect text-white flex-1 "
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <FadeInBottom>
          <strong className="main-title text-[4rem] block">Kawano Ryuya</strong>
          <strong className="main-title text-[2rem] block border-t-2">
            Panasonic Engineer
          </strong>
          <div className="icons flex justify-evenly mt-4">
            <a
              target="_blank"
              href="https://github.com/kawano-ryuya"
              className="list-none no-underline"
            >
              <FaGithub className=" size-12" />
            </a>
            <a
              target="_blank"
              href="https://teams.microsoft.com/l/chat/0/0?users=kawano.ryuya@jp.panasonic.com"
              className=""
            >
              <BsMicrosoftTeams className="size-12 cursor-pointer" />
            </a>
          </div>
        </FadeInBottom>
        <Jump content="PROFILE" />
      </div>
    </div>
  );
};

export default Hero;
