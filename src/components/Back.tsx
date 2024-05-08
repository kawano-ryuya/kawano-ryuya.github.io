import { Link } from "react-scroll";
import { FadeInBottom } from "./FadeInBottom";

type Props = {
  content: string;
};

const Back = ({ content }: Props) => {
  return (
    <div>
      <FadeInBottom>
        <div className=" mt-10 flex justify-center text-center cursor-pointer">
          {/* <div className="cursor-pointer flex absolute top-3/4  left-1/2 "> */}
          <Link
            activeClass="active"
            to={content}
            spy={true}
            smooth={true}
            offset={-90}
            duration={800}
            className="justify-center "
          >
            <div className="animate-slide-bottom">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 mx-auto  scale-x-100 -scale-y-100"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                />
              </svg>
            </div>
            <p className="font-bold text-2xl select-none mt-4">top</p>
          </Link>
        </div>
      </FadeInBottom>
    </div>
  );
};

export default Back;
