"use client";
import { FadeInBottom } from "./FadeInBottom";
import Jump from "./Jump";
import Image from "next/image";
import React from "react";
import EmblaCarousel from "./carousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import "./carousel/embla.css";
import { basePath } from "../../next.config.js"; // 追加
const BASE_PATH = basePath ? basePath : ""; // 追加

const OPTIONS: EmblaOptionsType = { slidesToScroll: "auto", loop: true };
const SLIDE_COUNT = 3;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Skill = () => {
  const certifications = [
    { name: "応用情報技術者試験", date: "2022年4月", file: "IPA.svg" },
    {
      name: "AWS Certified Solutions Architect - Associate",
      date: "2023年6月",
      file: "SAA.png",
    },
    {
      name: "AWS Certified Developer - Associate",
      date: "2023年7月",
      file: "DVA.png",
    },
    {
      name: "AWS Certified SysOps Administrator - Associate",
      date: "2023年9月",
      file: "SOA.png",
    },
  ];
  const skills = [
    { name: "応用情報技術者試験", date: "2022年4月", file: "IPA.svg" },
    {
      name: "AWS Certified Solutions Architect - Associate",
      date: "2023年6月",
      file: "SAA.png",
    },
    {
      name: "AWS Certified Developer - Associate",
      date: "2023年7月",
      file: "DVA.png",
    },
    {
      name: "AWS Certified SysOps Administrator - Associate",
      date: "2023年9月",
      file: "SOA.png",
    },
  ];
  return (
    <div id="SKILL" className="container w-screen  flex-1">
      <FadeInBottom>
        <h2 className="py-10 text-center font-medium text-5xl">SKILL</h2>
        <h3 className="text-center text-3xl mb-5">保有資格</h3>
        <div className="flex justify-around">
          {certifications.map((certification) => (
            <div
              key={certification.name}
              className="cursor-pointer select-none block w-1/5 max-w-[18rem] border rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white transition-transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <div
                  style={{
                    position: "relative",
                    minHeight: "8rem",
                  }}
                >
                  <Image
                    alt={certification.name}
                    src={`${BASE_PATH}/${certification.file}`}
                    fill
                    style={{ objectFit: "scale-down" }}
                    className="px-5"
                  />
                </div>
              </div>
              <div className="p-4">
                <strong className="break-words">{certification.name}</strong>
                <p className="text-base">{`${certification.date}取得`}</p>
              </div>
            </div>
          ))}
        </div>
        <h3 className="pt-10 text-center text-3xl mb-5">スキル</h3>
        <div className="flex justify-around">
          <div className="w-full">
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          </div>
        </div>
      </FadeInBottom>
      <Jump content="CONTACT" />
      <div className="mt-40"></div> {/*間隔空ける用 */}
    </div>
  );
};

export default Skill;
