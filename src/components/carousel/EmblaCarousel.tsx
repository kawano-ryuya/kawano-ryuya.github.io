/* eslint-disable @next/next/no-img-element */
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import { FadeInBottom } from "../FadeInBottom";

import { basePath } from "../../../next.config.js"; // 追加
const BASE_PATH = basePath ? basePath : ""; // 追加

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <FadeInBottom>
      <section className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide">
              <div className="embla__parallax">
                <div className="embla__parallax__layer">
                  <div className="relative [&>div]:hover:left-0 overflow-hidden rounded-lg">
                    <img
                      className=" object-cover w-full h-full"
                      src={`${BASE_PATH}/JS.svg`}
                      alt="Your alt text"
                    />
                    <div className="w-full h-full absolute top-0 text-connect-gray4 text-bold px-5 sm:py-20 py-10 flex-col justify-center duration-200 bg-black bg-opacity-50 left-full overflow-hidden rounded-lg">
                      <h1 className="sm:text-5xl text-3xl">javascript</h1>
                      <p className="sm:text-xl text-[1rem] mt-3">
                        経験年数：2.0年
                      </p>
                      <p className="sm:text-xl text-[1rem] mt-3">
                        スキル：★★★★☆
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="embla__slide">
              <div className="embla__parallax">
                <div className="embla__parallax__layer">
                  <div className="relative [&>div]:hover:left-0 overflow-hidden rounded-lg">
                    <img
                      className=" object-cover w-full h-full"
                      src={`${BASE_PATH}/TS.svg`}
                      alt="Your alt text"
                    />
                    <div className="w-full h-full absolute top-0 text-connect-gray4 text-bold px-5 sm:py-20 py-10 flex-col justify-center duration-200 bg-black bg-opacity-50 left-full overflow-hidden rounded-lg">
                      <h1 className="sm:text-5xl text-3xl">typescript</h1>
                      <p className="sm:text-xl text-[1rem] mt-3">
                        経験年数：1.0年
                      </p>
                      <p className="sm:text-xl text-[1rem] mt-3">
                        スキル：★★★☆☆
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="embla__slide">
              <div className="embla__parallax">
                <div className="embla__parallax__layer">
                  <div className="relative [&>div]:hover:left-0 overflow-hidden rounded-lg">
                    <img
                      className=" object-cover w-full h-full"
                      src={`${BASE_PATH}/react.svg`}
                      alt="Your alt text"
                    />
                    <div className="w-full h-full absolute top-0 text-connect-gray4 text-bold px-5 sm:py-20 py-10 flex-col justify-center duration-200 bg-black bg-opacity-50 left-full overflow-hidden rounded-lg">
                      <h1 className="sm:text-5xl text-3xl">react</h1>
                      <p className="sm:text-xl text-[1rem] mt-3">
                        経験年数：1.5年
                      </p>
                      <p className="sm:text-xl text-[1rem] mt-3">
                        スキル：★★★★☆
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="embla__slide">
              <div className="embla__parallax">
                <div className="embla__parallax__layer">
                  <div className="relative [&>div]:hover:left-0 overflow-hidden rounded-lg">
                    <img
                      className=" object-cover w-full h-full"
                      src={`${BASE_PATH}/vue.svg`}
                      alt="Your alt text"
                    />
                    <div className="w-full h-full absolute top-0 text-connect-gray4 text-bold px-5 sm:py-20 py-10 flex-col justify-center duration-200 bg-black bg-opacity-50 left-full overflow-hidden rounded-lg">
                      <h1 className="sm:text-5xl text-3xl">vue</h1>
                      <p className="sm:text-xl text-[1rem] mt-3">
                        経験年数：0.5年
                      </p>
                      <p className="sm:text-xl text-[1rem] mt-3">
                        スキル：★★★☆☆
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="embla__slide">
              <div className="embla__parallax">
                <div className="embla__parallax__layer">
                  <div className="relative [&>div]:hover:left-0 overflow-hidden rounded-lg">
                    <img
                      className=" object-cover w-full h-full"
                      src={`${BASE_PATH}/HTML.svg`}
                      alt="Your alt text"
                    />
                    <div className="w-full h-full absolute top-0 text-connect-gray4 text-bold px-5 sm:py-20 py-10 flex-col justify-center duration-200 bg-black bg-opacity-50 left-full overflow-hidden rounded-lg">
                      <h1 className="sm:text-5xl text-3xl">HTML</h1>
                      <p className="sm:text-xl text-[1rem] mt-3">
                        経験年数：2.0年
                      </p>
                      <p className="sm:text-xl text-[1rem] mt-3">
                        スキル：★★★★☆
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="embla__slide">
              <div className="embla__parallax">
                <div className="embla__parallax__layer">
                  <div className="relative [&>div]:hover:left-0 overflow-hidden rounded-lg">
                    <img
                      className=" object-cover w-full h-full"
                      src={`${BASE_PATH}/CSS.svg`}
                      alt="Your alt text"
                    />
                    <div className="w-full h-full absolute top-0 text-connect-gray4 text-bold px-5 sm:py-20 py-10 flex-col justify-center duration-200 bg-black bg-opacity-50 left-full overflow-hidden rounded-lg">
                      <h1 className="sm:text-5xl text-3xl">CSS</h1>
                      <p className="sm:text-xl text-[1rem] mt-3">
                        経験年数：2.0年
                      </p>
                      <p className="sm:text-xl text-[1rem] mt-3">
                        スキル：★★★★☆
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="embla__slide">
              <div className="embla__parallax">
                <div className="embla__parallax__layer">
                  <div className="relative [&>div]:hover:left-0 overflow-hidden rounded-lg">
                    <img
                      className=" object-cover w-full h-full"
                      src={`${BASE_PATH}/mysql.svg`}
                      alt="Your alt text"
                    />
                    <div className="w-full h-full absolute top-0 text-connect-gray4 text-bold px-5 sm:py-20 py-10 flex-col justify-center duration-200 bg-black bg-opacity-50 left-full overflow-hidden rounded-lg">
                      <h1 className="sm:text-5xl text-3xl">mySQL</h1>
                      <p className="sm:text-xl text-[1rem] mt-3">
                        経験年数：1.5年
                      </p>
                      <p className="sm:text-xl text-[1rem] mt-3">
                        スキル：★★★★☆
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="embla__slide">
              <div className="embla__parallax">
                <div className="embla__parallax__layer">
                  <div className="relative [&>div]:hover:left-0 overflow-hidden rounded-lg">
                    <img
                      className=" object-cover w-full h-full"
                      src={`${BASE_PATH}/postgresql.svg`}
                      alt="Your alt text"
                    />
                    <div className="w-full h-full absolute top-0 text-connect-gray4 text-bold px-5 sm:py-20 py-10 flex-col justify-center duration-200 bg-black bg-opacity-50 left-full overflow-hidden rounded-lg">
                      <h1 className="sm:text-5xl text-3xl">postgreSQL</h1>
                      <p className="sm:text-xl text-[1rem] mt-3">
                        経験年数：0.5年
                      </p>
                      <p className="sm:text-xl text-[1rem] mt-3">
                        スキル：★★★☆☆
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="embla__slide">
              <div className="embla__parallax">
                <div className="embla__parallax__layer">
                  <div className="relative [&>div]:hover:left-0 overflow-hidden rounded-lg">
                    <img
                      className=" object-cover w-full h-full"
                      src={`${BASE_PATH}/next.svg`}
                      alt="Your alt text"
                    />
                    <div className="w-full h-full absolute top-0 text-connect-gray4 text-bold px-5 sm:py-20 py-10 flex-col justify-center duration-200 bg-black bg-opacity-50 left-full overflow-hidden rounded-lg">
                      <h1 className="sm:text-5xl text-3xl">nextJS</h1>
                      <p className="sm:text-xl text-[1rem] mt-3">
                        経験年数：1.0年
                      </p>
                      <p className="sm:text-xl text-[1rem] mt-3">
                        スキル：★★★☆☆
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="embla__slide">
              <div className="embla__parallax">
                <div className="embla__parallax__layer">
                  <div className="relative [&>div]:hover:left-0 overflow-hidden rounded-lg">
                    <img
                      className=" object-fit  h-full"
                      src={`${BASE_PATH}/tailwindcss.png`}
                      alt="Your alt text"
                    />
                    <div className="w-full h-full absolute top-0 text-connect-gray4 text-bold px-5 sm:py-20 py-10 flex-col justify-center duration-200 bg-black bg-opacity-50 left-full overflow-hidden rounded-lg">
                      <h1 className="sm:text-5xl text-3xl">tailwindCSS</h1>
                      <p className="sm:text-xl text-[1rem] mt-3">
                        経験年数：1.0年
                      </p>
                      <p className="sm:text-xl text-[1rem] mt-3">
                        スキル：★★★☆☆
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="embla__controls">
          <div className="embla__buttons">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>

          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={"embla__dot".concat(
                  index === selectedIndex ? " embla__dot--selected" : ""
                )}
              />
            ))}
          </div>
        </div>
      </section>
    </FadeInBottom>
  );
};

export default EmblaCarousel;
