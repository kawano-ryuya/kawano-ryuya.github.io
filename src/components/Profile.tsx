"use client";
import React from "react";
import { FadeInBottom } from "./FadeInBottom";
import Jump from "./Jump";
import Image from "next/image";
import { basePath } from "../../next.config.js"; // 追加
const BASE_PATH = basePath ? basePath : ""; // 追加

const Profile = () => {
  return (
    <div className="w-screen h-screen flex-1" id="PROFILE">
      <FadeInBottom>
        <h2 className="py-10 text-center font-medium text-5xl">PROFILE</h2>
        <p className="max-w-fit  mx-auto leading-8 text-xl ">
          2015年3月熊本大学卒業。同年4月パナソニックに入社。
          <br />
          2020年3月までハードウェア開発に従事し、その後、2020年4月からSE職に転向。
          <br />
          現在は顔認証SaaSの開発マネジメント業務を担当中。
        </p>
        <div className="flex mt-10">
          <div className="w-1/2 ">
            <div className="max-w-fit mx-auto ">
              <Image
                src={`${BASE_PATH}/beauty_20240403003807.jpg`} // 修正
                alt="Vercel Logo"
                className="dark:invert px-4 "
                width={600}
                height={800}
                // style={{ width: "50%", height: "auto" }}
              />
            </div>
          </div>
          <div className="w-1/2 overflow-scroll hidden-scrollbar">
            <div className="inline-block mx-4 ">
              {/* <h2 className="font-bold text-3xl ">Ryuya Kawano</h2> */}
              {/* <p className="mt-4 leading-8 text-xl">
                2015年3月熊本大学卒業。同年4月パナソニックに入社。
                2020年3月までハードウェア開発に従事し、その後、2020年4月からSE職に転向。
                RPAを活用した社内業務の自動化プロジェクトに携わり、要件定義から設計、開発、テスト、運用までの全工程を経験。
                2021年4月から現パナソニックコネクトへ転籍し、現在に至るまで、
                プロジェクトの開発マネジメントと社内RPAの運用マネジメントを主要な役割とし、
                並行してフロントエンド開発およびAWSによるバックエンド開発を担当。
                プロジェクト全体の指揮を執りながら、技術的な貢献も行っている。
              </p> */}
              <table className=" text-left text-xl select-none ">
                <tbody>
                  <tr className="border-b border-t transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                    <td className="whitespace-nowrap px-6 py-2 font-medium">
                      名前
                    </td>
                    <td className="whitespace-nowrap px-6 py-2">河野 竜也</td>
                  </tr>
                  <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                    <td className="whitespace-nowrap px-6 py-2 font-medium">
                      生まれ
                    </td>
                    <td className="whitespace-nowrap px-6 py-2">1992.06.10</td>
                  </tr>
                  <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                    <td className="whitespace-nowrap px-6 py-2 font-medium">
                      入社
                    </td>
                    <td className="whitespace-nowrap px-6 py-2">2015.04.01~</td>
                  </tr>
                  <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                    <td className="whitespace-nowrap px-6 py-2 font-medium">
                      勤務地
                    </td>
                    <td className="whitespace-nowrap px-6 py-2">横浜</td>
                  </tr>
                  <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                    <td className="whitespace-nowrap px-6 py-2 font-medium">
                      趣味
                    </td>
                    <td className="whitespace-nowrap px-6 py-2">
                      映画、ディズニー、海外一人旅
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </FadeInBottom>
      <Jump content="WORKS" />
    </div>
  );
};

export default Profile;
