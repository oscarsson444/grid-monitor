"use client";
import { useEffect, useState } from "react";
import { FrequencyMeter } from "./components/FrequencyMeter";

export default function Home() {
  const [frequency, setFrequency] = useState(50);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const freqDiff = (Math.random() * 2 - 1) * 0.05;
      setFrequency((prev) => {
        const newFreq = prev + freqDiff;
        return newFreq;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

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
        <FrequencyMeter frequency={frequency} />
      </div>
    </main>
  );
}
