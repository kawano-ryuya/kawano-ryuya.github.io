"use client";
import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  const contents = ["PROFILE", "WORKS", "SKILL", "CONTACT"];

  return (
    <div className="absolute bottom-0 h-72 w-full bg-connect-blue1 text-white ">
      <nav className="mt-6  text-center">
        <ul className=" font-bold flex flex-wrap justify-center ">
          {contents.map((content, index) => (
            <li key={index} className=" list-none mx-5 ">
              <Link
                activeClass="active"
                to={content}
                spy={true}
                smooth={true}
                offset={-90}
                duration={800}
                className="select-none cursor-pointer no-underline transition-all hover:text-connect-green1"
              >
                {content}
              </Link>
            </li>
          ))}
        </ul>
        <p className="pt-10 text-muted-foreground">Copyright © 2024 Ryuya</p>
      </nav>
    </div>
  );
};

export default Footer;
