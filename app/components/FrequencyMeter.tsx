"use client";
import { useEffect, useState } from "react";

export const FrequencyMeter = () => {
  const [frequency, setFrequency] = useState(50);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Generate a random number between 45 and 55
      const freqDiff = Math.random() * 2 - 1;
      setFrequency((prev) => {
        const newFreq = prev + freqDiff;
        return newFreq;
      });
    }, 1000);

    // Clean up function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex justify-center items-center flex-col">
      <p className="text-xl font-semibold">{frequency.toFixed(1)}</p>
      <div className="grid grid-cols-7 w-[400px] h-[50px] border border-white">
        <div className="col-span-1 h-[50px] bg-[#f87171] border-r-2 border-white" />
        <div className="col-span-2 h-[50px] bg-[#fcd34d] border-r-2 border-white" />
        <div className="col-span-1 h-[50px] bg-[#84cc16] border-r-2 border-white" />
        <div className="col-span-2 h-[50px] bg-[#fcd34d] border-r-2 border-white" />
        <div className="col-span-1 h-[50px] bg-[#f87171]" />
      </div>
      <div className={`absolute mt-[29px] h-[51px] w-[3px] bg-white`} />
      <div>
        <div className="absolute -ml-[30.5px] h-[15px] w-[2px] bg-white" />
      </div>
      <div>
        <div className="absolute ml-[26.5px] h-[15px] w-[2px] bg-white" />
      </div>
    </div>
  );
};
