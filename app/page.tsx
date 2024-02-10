import { FrequencyMeter } from "./components/FrequencyMeter";

export default function Home() {
  return (
    <main className="flex justify-between px-20 items-center gap-10 h-[100vh] w-full">
      <div className="w-[50%] h-[50%] border border-white rounded-lg">
        <div className="w-full h-full grid grid-cols-6 grid-rows-4">
          <div className="text-black bg-white col-start-1 row-start-4 flex justify-center items-center">
            LFC
          </div>
        </div>
      </div>
      <div className="border border-white rounded-lg flex items-center justify-center w-[50%] h-[50%]">
        <FrequencyMeter />
      </div>
    </main>
  );
}
