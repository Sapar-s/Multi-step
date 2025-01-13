import { FirstPage } from "@/components/FirstPage";
import { SecondPage } from "@/components/SecondPage";
import { ThirdPage } from "@/components/ThirdPage";

export default function Home() {
  return (
    <>
      <div className="w-[100vw] h-[100vh] flex items-center justify-center bg-[#f4f4f4]">
        <FirstPage />
        {/* <SecondPage /> */}
        {/* <ThirdPage /> */}
      </div>
    </>
  );
}
