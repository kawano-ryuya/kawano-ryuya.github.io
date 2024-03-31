import Image from "next/image";
import { basePath } from "../../next.config.mjs"; // 追加
const BASE_PATH = basePath ? basePath : ""; // 追加

export default function Home() {
  return (
    <div>
      <Image
        src={`${BASE_PATH}/vercel.svg`} // 修正
        alt="Vercel Logo"
        className="dark:invert"
        width={100}
        height={24}
        priority
      />
      test
    </div>
  );
}
