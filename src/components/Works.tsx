"use client";
import Image from "next/image";
import { FadeInBottom } from "./FadeInBottom";
import Jump from "./Jump";
import { basePath } from "../../next.config.js"; // 追加
const BASE_PATH = basePath ? basePath : ""; // 追加

const Works = () => {
  const works = [
    {
      title: "在庫管理システム",
      stack: "javascript/vue3.0/bootstrap/php/drupal",
      desc: "画面検索から部品在庫情報をapiで取得するwebアプリ開発。フロントエンドとバックエンド両方担当。",
      file: "zaiko.png",
    },
    {
      title: "SmileCourt",
      stack: "typescript/nextJS/tailwindcss",
      desc: "コネクトハッカソン参加作品。フロントエンド担当。フードコートの空席情報をモニタリングするwebアプリ。",
      file: "hackason.png",
    },
    {
      title: "トレーサビリティシステム",
      stack: "typescript/AWS(Lambda/S3/SES/RDS)",
      desc: "基幹システムからのデータと別システムからのメールデータをマージしてDBに登録するシステム。AWS Lambdaを使用。",
      file: "trace.png",
    },
    {
      title: "検収業務DX化",
      stack: "PowerAutomate",
      desc: "発注業務プロセスの研修業務をPowerAutomateでDX化。これまで紙媒体での検収をteams経由で実現可能にした。",
      file: "kensyu.png",
    },
  ];

  return (
    <div id="WORKS" className=" w-screen flex-1 bg-connect text-white">
      <FadeInBottom>
        <h2 className="py-10 text-center font-medium text-5xl">WORKS</h2>
        <div className="flex justify-around gap-8 flex-wrap">
          {works.map((work) => (
            <div
              key={work.title}
              className=" select-none block w-3/7 max-w-[40rem] border rounded-lg border-connect-blue1 bg-connect-blue1 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white transition-transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden bg-cover bg-no-repeat mt-5">
                <div
                  style={{
                    position: "relative",
                    minHeight: "30rem",
                  }}
                >
                  <Image
                    alt={work.title}
                    src={`${BASE_PATH}/${work.file}`}
                    fill
                    style={{ objectFit: "scale-down", minHeight: "30rem" }}
                    className="px-5"
                  />
                </div>
              </div>
              <div className="p-4 box-content">
                <strong className="break-words text-xl">{work.title}</strong>
                <p className="text-base">{work.stack}</p>
                <p className="text-base">{work.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <Jump content="SKILL" />
      </FadeInBottom>
      <div className="pt-40"></div> {/*間隔空ける用 */}
    </div>
  );
};

export default Works;
