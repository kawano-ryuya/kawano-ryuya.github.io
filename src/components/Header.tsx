"use client";
import { Link } from "react-scroll";
const Header = () => {
  const contents = ["PROFILE", "WORKS", "SKILL", "CONTACT"];
  return (
    <header className="flex fixed justify-between items-center bg-[#000e4e] text-white w-full z-10 h-[90px]">
      <div className="logo mx-4">
        <Link
          activeClass="active"
          to="HERO"
          spy={true}
          smooth={true}
          offset={-90}
          duration={800}
          className="select-none cursor-pointer"
        >
          <h3 className=" text-3xl">portfolio</h3>
        </Link>
      </div>
      <nav>
        <ul className="m-0 font-bold flex flex-wrap justify-center">
          {contents.map((content, index) => (
            <li key={index} className="mr-12 list-none ">
              <Link
                activeClass="active"
                to={content}
                spy={true}
                smooth={true}
                offset={-90}
                duration={800}
                className="select-none cursor-pointer text-white no-underline transition-all hover:text-connect-green1"
              >
                {content}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
